// Skeleton.js
import React from "react";

const Skeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      {/* Skeleton for the header */}
      <div className="h-8 bg-gray-300 rounded w-2/5"></div>
      
      {/* Skeleton for the table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <div className="my-4 flex justify-end">
          <div className="bg-gray-300 h-10 w-32 rounded"></div>
        </div>
        <table className="w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm md:text-base">
                <div className="bg-gray-300 h-4 w-1/3 rounded"></div>
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm md:text-base">
                <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
              </th>
              <th className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-left text-sm md:text-base">
                <div className="bg-gray-300 h-4 w-1/3 rounded"></div>
              </th>
              <th className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-left text-sm md:text-base">
                <div className="bg-gray-300 h-4 w-1/4 rounded"></div>
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center text-sm md:text-base">
                <div className="bg-gray-300 h-4 w-1/2 rounded mx-auto"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-100 transition-colors cursor-pointer duration-200 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">
                  <div className="bg-gray-300 h-4 w-1/3 rounded"></div>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">
                  <div className="bg-gray-300 h-4 w-2/3 rounded"></div>
                </td>
                <td className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-sm md:text-base">
                  <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
                </td>
                <td className="hidden sm:table-cell border border-gray-300 px-4 py-2 text-sm md:text-base">
                  <div className="bg-gray-300 h-4 w-1/4 rounded"></div>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center text-sm md:text-base">
                  <div className="bg-gray-300 h-4 w-1/3 rounded mx-auto"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skeleton;
