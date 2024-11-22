import React from "react";
import { IoClose } from "react-icons/io5";

const UserModal = ({ isOpen, user, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`bg-white p-6 rounded-lg shadow-lg max-w-md w-full transform transition-all duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">User Details</h2>
          <button
            className="text-gray-500 hover:text-gray-700 text-2xl"
            onClick={closeModal}
          >
            <IoClose />
          </button>
        </div>

        <div className="space-y-4">
          {user?.name && (
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-600">Name:</p>
              <p className="text-sm text-gray-800">{user.name}</p>
            </div>
          )}
          {user?.username && (
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-600">Username:</p>
              <p className="text-sm text-gray-800">{user.username}</p>
            </div>
          )}
          {user?.email && (
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-600">Email:</p>
              <p className="text-sm text-gray-800">{user.email}</p>
            </div>
          )}
          {user?.phone && (
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-600">Phone:</p>
              <p className="text-sm text-gray-800">{user.phone}</p>
            </div>
          )}
          {user?.website && (
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-600">Website:</p>
              <p className="text-sm text-gray-800">{user.website}</p>
            </div>
          )}

          {user?.address && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700">Address:</h3>
              {user.address?.street && (
                <p className="text-sm text-gray-800">
                  Street: {user.address.street}
                </p>
              )}
              {user.address?.suite && (
                <p className="text-sm text-gray-800">
                  Suite: {user.address.suite}
                </p>
              )}
              {user.address?.city && (
                <p className="text-sm text-gray-800">City: {user.address.city}</p>
              )}
              {user.address?.zipcode && (
                <p className="text-sm text-gray-800">
                  Zipcode: {user.address.zipcode}
                </p>
              )}
              {user.address?.geo && (
                <>
                  <p className="text-sm text-gray-800">
                    Latitude: {user.address.geo.lat}
                  </p>
                  <p className="text-sm text-gray-800">
                    Longitude: {user.address.geo.lng}
                  </p>
                </>
              )}
            </div>
          )}

          {user?.company && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-700">Company:</h3>
              {user.company?.name && (
                <p className="text-sm text-gray-800">
                  Company Name: {user.company.name}
                </p>
              )}
              {user.company?.catchPhrase && (
                <p className="text-sm text-gray-800">
                  Catchphrase: {user.company.catchPhrase}
                </p>
              )}
              {user.company?.bs && (
                <p className="text-sm text-gray-800">BS: {user.company.bs}</p>
              )}
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
