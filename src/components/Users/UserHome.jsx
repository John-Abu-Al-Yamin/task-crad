import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../../store/UserSlice/userThunks";
import { addToWishlist, removeFromWishlist } from "../../store/wishlistSlice";
import { toast } from "react-toastify";
import Skeleton from "../Skeleton/Skeleton";
import UserModal from "./UserModal";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const UserHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const dispatch = useDispatch();
  const { isLoading, users } = useSelector((state) => state.users);
  const { wishlist } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    toast.success("User deleted successfully!");
  };

  const toggleWishlist = (user) => {
    if (wishlist.some((item) => item.id === user.id)) {
      dispatch(removeFromWishlist(user.id));
      toast.success("User removed from wishlist!");
    } else {
      dispatch(addToWishlist(user));
      toast.success("User added to wishlist!");
    }
  };

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center md:text-left animate-fadeIn">
        User List
      </h1>
      <div className="my-4 flex justify-end">
        <Link
          to="/users/add"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
        >
          Add User
        </Link>
      </div>
      
      {/* Desktop and tablet table layout */}
      <div className="hidden sm:block overflow-x-auto shadow-lg rounded-lg p-4 bg-white">
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-6 py-3 text-left text-sm md:text-base">ID</th>
              <th className="border border-gray-300 px-6 py-3 text-left text-sm md:text-base">User Name</th>
              <th className="hidden sm:table-cell border border-gray-300 px-6 py-3 text-left text-sm md:text-base">Email</th>
              <th className="hidden sm:table-cell border border-gray-300 px-6 py-3 text-left text-sm md:text-base">Wishlist</th>
              <th className="border border-gray-300 px-6 py-3 text-center text-sm md:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`hover:bg-gray-100 transition-colors duration-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
              >
                <td className="border border-gray-300 px-6 py-4 text-sm md:text-base">{user.id}</td>
                <td
                  onClick={() => openModal(user)}
                  className="cursor-pointer border border-gray-300 px-6 py-4 text-sm md:text-base"
                >
                  {user.name} {user.username}
                </td>
                <td
                  onClick={() => openModal(user)}
                  className="cursor-pointer hidden sm:table-cell border border-gray-300 px-6 py-4 text-sm md:text-base"
                >
                  {user.email}
                </td>
                <td
                  className="cursor-pointer hidden sm:table-cell border border-gray-300 px-6 py-4 text-sm md:text-base"
                  onClick={() => toggleWishlist(user)}
                >
                  <FaHeart
                    className={`text-xl ${
                      wishlist.some((item) => item.id === user.id)
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </td>
                <td className="border border-gray-300 px-6 py-4 text-center">
                  <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-2 space-y-2 md:space-y-0">
                    <Link
                      to={`/users/${user.id}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card layout */}
      <div className="sm:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg shadow-md p-4 bg-white transition-all duration-300 hover:shadow-xl"
          >
            <div
              onClick={() => openModal(user)}
              className="cursor-pointer mb-4 text-lg font-semibold text-blue-600"
            >
              {user.name} {user.username}
            </div>
            <div className="text-sm text-gray-600 mb-4">{user.email}</div>
            <div className="flex justify-between items-center">
              <FaHeart
                onClick={() => toggleWishlist(user)}
                className={`text-xl cursor-pointer ${
                  wishlist.some((item) => item.id === user.id)
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              />
              <div className="flex space-x-2">
                <Link
                  to={`/users/${user.id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && <UserModal isOpen={isModalOpen} user={selectedUser} closeModal={closeModal} />}
    </div>
  );
};

export default UserHome;
