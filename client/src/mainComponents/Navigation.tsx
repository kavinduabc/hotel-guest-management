//** create navbar 8/29/2025  */

import  { useState } from "react";
import { FaUsers, FaUserPlus, FaHotel, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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

        {/* Files Added */}
        
        <div className="hidden md:flex gap-8">
            <Link to="/add-guest">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#D4AF37]">
            <FaUserPlus /> <span>Add Guest</span>
          </div></Link>
          
          <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#D4AF37]">
            <FaUsers /> <span>Guest List</span>
          </div>
          </Link>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-[#0C3B5D] p-4 rounded-lg shadow-lg">
        <Link to="/add-guest">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#D4AF37]">
            <FaUserPlus /> <span>Add Guest</span>
          </div>
        </Link>  

         <Link to="/guest-list">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#D4AF37]">
            <FaUsers /> <span>Guest List</span>
          </div>
        </Link>  
        </div>
      )}
    </nav>
  );
};

export default Navigation;
