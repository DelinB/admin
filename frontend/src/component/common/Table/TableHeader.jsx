import React from "react";

const TableHeader = () => {
  return (
    <div>
      <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
        <p className="font-semibold text-lg">Stock List</p>
        <p className="text-gray-600">Filter</p>
        <p className="text-gray-600">
          Product Type: <span className="font-medium">All</span>
        </p>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default TableHeader;
