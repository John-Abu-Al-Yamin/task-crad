import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  return (
    <div className="bg-gray-100 text-black p-4 px-5 border-b border-gray-300">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="text-2xl font-semibold">
          <Link to={"/users"}>MyApp</Link >
        </div>

        <div className="relative">
          <FaHeart className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {wishlist.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
