import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFilePrescription } from "react-icons/fa";
import { useCommon } from "../context/CommonContext";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const menuItems = [
  { name: "Prescriptions", path: "/prescription" },
  { name: "Stocks", path: "/stocks" },
  { name: "Suppliers", path: "/suppliers" },
  { name: "purchase", path: "/purchase" },
];

const SidebarComponent = () => {
  const { isOpen } = useCommon(); // Get state from context
  const [isShow, setIsShow] = useState(false);

  return (
    <aside
      className={`bg-gray-800 text-white h-screen transition-all duration-500 ease-in-out p-4 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <nav className="mt-4">
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setIsShow(!isShow)}
              className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md w-full text-left"
            >
              <FaFilePrescription size={24} className="text-white" />
              {isOpen && <span className="flex gap-2.5 duration-700 ease-in-out  transition-all">Prescription</span>}
              {isOpen && <span className="flex items-center">{isShow ? <FaAngleUp /> : <FaAngleDown />}</span>}
            </button>

            {/* Dropdown List */}
            {isShow && isOpen && (
              <ul className="flex flex-col gap-3 pl-10 mt-2 text-[20px] font-[400px]">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-gray-300">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarComponent;
