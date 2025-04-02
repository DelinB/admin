import React from "react";

const Table = ({ StocsTableHead, TableValue }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full  border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {StocsTableHead.map((header, index) => (
              <th key={index} className="p-2 font-sans">
                {header.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TableValue.map((item, index) => (
            <tr key={index} className="text-center ">
              {StocsTableHead.map((header, i) => (
                <td key={i} className="p-2 ">
                  {item[header.path] !== undefined ? item[header.path] : "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;


