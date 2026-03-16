import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, Bell, MessageSquare, LogOut, Bot, X, Send } from "lucide-react";
import AIAssistant from "./AIAssistant";



const Header = () => {
  const navigate = useNavigate();
  const [showAI, setShowAI] = useState(false);
  useEffect(() => {
  if (showAI) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [showAI]);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <>
      <header className="flex justify-between items-center bg-white px-8 py-4">
        {/* Left section */}
        <div>
          <h1 className="text-base font-semibold text-gray-900">
            Principal Dashboard
          </h1>
          <p className="text-xs text-gray-700 mt-1">
            College Administration Portal
          </p>
        </div>

        {/* Right section */}
        <nav className="flex items-center gap-6 text-sm">

          <NavLink to="/principal"
            className={({ isActive }) =>
              `flex items-center gap-1 px-3 py-1 rounded transition ${
                isActive ? "bg-black text-white" : "text-black hover:bg-gray-200"
              }`
            }
          >
            <Home size={16} /> Home
          </NavLink>

          <NavLink to="/messages"
            className={({ isActive }) =>
              `flex items-center gap-1 px-3 py-1 rounded transition ${
                isActive ? "bg-black text-white" : "text-black hover:bg-gray-200"
              }`
            }
          >
            <MessageSquare size={16} /> Messages
          </NavLink>

          <NavLink to="/notifications"
            className={({ isActive }) =>
              `flex items-center gap-1 px-3 py-1 rounded transition ${
                isActive ? "bg-black text-white" : "text-black hover:bg-gray-200"
              }`
            }
          >
            <Bell size={16} /> Notifications
          </NavLink>

          {/* ✅ AI Button */}
          <button
            onClick={() => setShowAI(true)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition"
          >
            <Bot size={16} /> AI Assistant
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-red-600 hover:text-red-800 transition"
          >
            <LogOut size={16} /> Logout
          </button>

        </nav>
      </header>

      <AIAssistant showAI={showAI} setShowAI={setShowAI} />
    </>
  );
};

export default Header;