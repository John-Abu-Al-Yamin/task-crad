import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: JSON.parse(sessionStorage.getItem("wishlist")) || [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const user = action.payload;
      if (!state.wishlist.some((item) => item.id === user.id)) {
        state.wishlist.push(user);
        sessionStorage.setItem("wishlist", JSON.stringify(state.wishlist));
      }
    },
    removeFromWishlist: (state, action) => {
      const userId = action.payload;
      state.wishlist = state.wishlist.filter((user) => user.id !== userId);
      sessionStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
