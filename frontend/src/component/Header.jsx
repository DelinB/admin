import React from "react";
import { useCommon } from "../context/CommonContext";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const { isOpen, setIsOpen } = useCommon();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      {/* Toggle Button */}
      <button
        className="p-2 rounded-md hover:bg-gray-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose size={24} /> : <HiOutlineMenuAlt1 size={24} />}
      </button>

      {/* Logo */}
      <p className="text-[20px]">LOGO</p>
    </header>
  );
};

export default Header;
