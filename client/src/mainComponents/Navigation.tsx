//** create navbar 8/29/2025  */

import React, { useState } from "react";
import { FaUsers, FaUserPlus, FaHotel, FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0C3B5D] text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
       
        <div className="flex items-center gap-2">
          <FaHotel size={28} className="text-[#D4AF37]" />
          <h3 className="hidden md:block text-xl font-bold tracking-wide">
            Hotel Guest Management
          </h3>
        </div>

        
        <div className="hidden md:flex gap-8">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#D4AF37]">
            <FaUserPlus /> <span>Add Guest</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#D4AF37]">
            <FaUsers /> <span>Guest List</span>
          </div>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-[#0C3B5D] p-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#D4AF37]">
            <FaUserPlus /> <span>Add Guest</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#D4AF37]">
            <FaUsers /> <span>Guest List</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
