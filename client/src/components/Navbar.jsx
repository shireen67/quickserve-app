import React from "react";
import {
  FaUserCircle,
  FaBell
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("vendor");

    navigate("/");

  };

  return (

    <div className="backdrop-blur-lg bg-white/10 border-b border-white/20 px-8 py-5 flex justify-between items-center shadow-xl">

      <div>

        <h1 className="text-3xl font-bold text-white tracking-wide">

          VendorHub

        </h1>

        <p className="text-gray-200 text-sm">

          Professional Vendor Dashboard

        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="bg-white/20 p-3 rounded-full text-white cursor-pointer hover:scale-110 transition">

          <FaBell size={20} />

        </div>

        <div className="flex items-center gap-3">

          <FaUserCircle
            size={38}
            className="text-white"
          />

          <button
            onClick={logout}
            className="bg-white text-indigo-700 px-5 py-2 rounded-xl font-semibold hover:bg-indigo-100 transition"
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  );
};

export default Navbar;