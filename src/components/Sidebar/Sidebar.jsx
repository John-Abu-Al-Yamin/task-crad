import React, { useState } from "react";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`${
        isSidebarOpen ? "w-48" : "w-16"
      } transition-all text-black flex-col p-4 bg-gray-100 flex h-full`}
    >
      {/* Toggle Button */}
      <div className="mb-4 flex justify-between">
        {/* Sidebar Logo */}
        <h1 className={`text-xl font-bold mb-4 ${!isSidebarOpen && "hidden"}`}>
          Sidebar Logo
        </h1>
        <MdMenu
          size={36}
          onClick={toggleSidebar}
          className="cursor-pointer hover:bg-gray-200 p-2 rounded"
        />
      </div>

      {/* Sidebar Links */}
      <ul className="space-y-4">
        <Link to="/">
          <li
            className={`hover:bg-gray-200 p-2 rounded cursor-pointer flex items-center gap-2 ${
              !isSidebarOpen && "justify-center"
            }`}
          >
            <span>
              <FaHome />
            </span>
            {isSidebarOpen && "Home"}
          </li>
        </Link>
        <Link to="/users">
          <li
            className={`hover:bg-gray-200 p-2 rounded cursor-pointer flex items-center gap-2 ${
              !isSidebarOpen && "justify-center"
            }`}
          >
            <span>
              <FaUsers />
            </span>
            {isSidebarOpen && "Users"}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
