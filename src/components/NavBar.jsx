import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-blue-800">
              StayEasy
            </span>
          </div>
          <div className="space-x-6 hidden md:block">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link to="/working" className="text-gray-700 hover:text-blue-600">
              How It Works
            </Link>
            <Link to="/founders" className="text-gray-700 hover:text-blue-600">
              Founders
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
