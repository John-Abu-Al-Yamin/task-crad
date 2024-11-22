// store.js
import { configureStore } from "@reduxjs/toolkit";
import users from "./UserSlice/userSlice"; 
import wishlistReducer from "./wishlistSlice";

export default configureStore({
  reducer: {
    users,
    wishlist: wishlistReducer,  
  },
});
