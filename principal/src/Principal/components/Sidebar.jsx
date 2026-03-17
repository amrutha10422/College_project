import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Settings,
  Award,
  Trash2,
} from "lucide-react";

const Sidebar = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleProfileDropdown = () => setProfileOpen((prev) => !prev);

  return (
    <aside className="w-70 bg-white min-h-screen shadow-sm flex flex-col px-6 pt-6 pb-4 text-gray-900">
      {/* ===== PROFILE HEADER ===== */}
      <div className="relative bg-blue-50 py-5 px-6 -mx-6 -mt-6  flex flex-col items-center shadow-sm rounded-b-lg">
        <div className="relative">
          <img
            src="/principal.jpg" // Replace with your image path
            alt="Principal"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
          />
          <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <h2 className="mt-5 text-gray-800 font-medium text-lg tracking-tight">
          Dr. Sunita Mehta
        </h2>
        <p className="text-sm text-gray-600 mt-1">Principal</p>
        <span className="mt-4 text-xs font-semibold bg-gray-900 text-white px-4 py-1 rounded-full tracking-wide inline-flex items-center">
          Active
        </span>
      </div>

      {/* CONTACT INFO */} 
      <div className="text-gray-900 text-base mt-5">
         <h3 className="font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-3">
             <li className="flex items-center gap-3 text-xs">
               <Mail size={18} className="text-gray-600 shrink-0 " />
                <span>principal@college.edu</span> </li>
                 <li className="flex items-center gap-3 text-xs">
                   <Phone size={18} className="text-gray-600 shrink-0" />
                    <span>+91 98765 43210</span>
                  </li> 
                  <li className="flex items-center gap-3"> 
                    <MapPin size={18} className="text-gray-600 shrink-0" /> 
                    <span className="text-xs leading-snug">Administrative Block, Room 101</span>
              </li>
            </ul>
        </div>

      {/* PROFESSIONAL DETAILS */}
 
      <div className="mt-5 text-gray-900 text-base">
        <h3 className="mb-4 font-semibold">Professional Details</h3>
         <p className="mb-2 text-xs leading-snug">Experience: 25+ Years in Education</p>
          <p className="text-xs ">Education: Ph.D. in Educational Administration</p>
      </div>
      {/* QUICK ACTIONS */}
      <div className="mt-5">
        <h3 className="font-semibold text-base mb-4">Quick Actions</h3>

        <button className="flex items-center gap-3 w-full border border-gray-300 rounded-md px-4 py-2 text-sm font-normal text-gray-900 hover:bg-gray-50 mb-3 transition">
          <Settings size={18} />
          Settings
        </button>

        <div className="relative">
          {/* Profile Button */}
          <button
            onClick={toggleProfileDropdown}
            className={`flex items-center gap-3 w-full rounded-md px-4 py-2 text-sm font-normal text-gray-900 border border-gray-300 mb-0 transition ${
              profileOpen ? "bg-gray-100" : "bg-white"
            }`}
            aria-expanded={profileOpen}
          >
            <Award size={18} />
            Profile
          </button>

          {/* Dropdown Menu */}
          {profileOpen && (
            <div className="mt-1 left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-30">
              <button
                className="block w-full text-left px-4 py-2 text-sm font-normal hover:bg-gray-50"
                onClick={() => alert("View Detailed Profile clicked")}
              >
                View Detailed Profile
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm font-normal hover:bg-gray-50"
                onClick={() => alert("Edit Profile clicked")}
              >
                Edit Profile
              </button>
              <button
                className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm font-normal text-red-600 hover:bg-red-50"
                onClick={() => alert("Delete Profile clicked")}
              >
                <Trash2  strokeWidth={1} size={18} />
                Delete Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
