"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled"); // Debugging line
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full h-24 backdrop-blur-sm px-4 md:px-20 z-40 transition-all duration-300 ease-in-out">
      <div className="w-full h-full flex flex-row justify-between items-center">
        <div className="flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-14 pl-20">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <div
              key={item}
              className="text-black z-50 text-sm font-medium leading-normal tracking-tight hover:text-[#067017] transition-colors duration-300 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-60">
          <button
            onClick={toggleMenu}
            className="text-black text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center justify-start gap-4">
          <button className="px-6 py-2 rounded-full border-2 border-black text-black text-sm font-bold hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Sign In
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-[#067017] to-[#0a9023] rounded-full text-white text-sm font-bold hover:from-[#045812] hover:to-[#078a1e] transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full flex flex-col justify-center backdrop-blur-xl bg-slate-50 py-4 px-4 shadow-lg z-50">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <div
              key={item}
              className="text-black text-sm font-medium leading-loose tracking-tight hover:text-[#067017] transition-colors duration-300 cursor-pointer"
            >
              {item}
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <button className="w-full py-2 rounded-full border-2 border-black text-black text-sm font-bold hover:bg-black hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
              Sign In
            </button>
            <button className="w-full py-2 bg-gradient-to-r from-[#067017] to-[#0a9023] rounded-full text-white text-sm font-bold hover:from-[#045812] hover:to-[#078a1e] transition-all duration-300 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
