import React, { useState } from "react";
import logo from "../images/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 mt-5 left-0 right-0 mx-auto z-50 
      w-full sm:w-[95%] md:w-[85%] lg:w-[75%] xl:w-[45%] px-4">
      {/* Header Container */}
      <div className="flex justify-between md:justify-evenly items-center 
        px-4 py-2 md:px-8 md:py-1 
        bg-black/35 backdrop-blur-2xl shadow-2xl rounded-full border border-white/10 text-white">

        {/* Logo */}
        <a href="#LandingPage">
          <img
            src={logo}
            alt="Logo"
            className="h-6 w-6 md:h-7 md:w-7 cursor-pointer"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center ml-10 space-x-6 lg:space-x-12 text-base lg:text-lg font-thin">
          <a href="#LandingPage" className="hover:text-gray-200">Home</a>
          <a href="#About" className="hover:text-gray-200">About</a>
          <a href="#Skills" className="hover:text-gray-200">Skills</a>
          <a href="#Projects" className="hover:text-gray-200">Work</a>
          <a href="#Contact">
            <button className="ml-4 px-4 py-1 bg-green-600  rounded-lg hover:bg-green-700">
              Contact
            </button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-black/90 backdrop-blur-lg shadow-lg rounded-xl p-5 flex flex-col space-y-4 text-white text-lg font-light">
          <a href="#LandingPage" className="hover:text-gray-200" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#About" className="hover:text-gray-200" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#Skills" className="hover:text-gray-200" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#Projects" className="hover:text-gray-200" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#Contact" className="bg-green-600 w-full rounded-lg p-1 hover:text-gray-200" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
