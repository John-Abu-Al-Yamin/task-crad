import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaChartBar } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Dashboard Header */}
      <div className="bg-blue-600 text-white p-6">
        <h1 className="text-3xl font-semibold">Welcome to Your Dashboard</h1>
        <p className="text-lg mt-2">Manage your account and explore your options here.</p>
      </div>

      {/* Dashboard Content */}
      <div className="flex flex-wrap gap-6 justify-center p-6">
        {/* User Profile Section */}
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">User List</h2>
            <FaUser className="text-2xl text-blue-600" />
          </div>
          <p className="text-gray-700">View and edit your personal information.</p>
          <Link
            to="/users"
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Go to Users
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
