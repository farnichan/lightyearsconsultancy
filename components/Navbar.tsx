import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center space-x-2 cursor-pointer">
          <div className="relative flex items-center justify-center">
            <img src={logo} className="h-16 md:h-20" />
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 button-text text-primary">
          <a
            href="#howitworks"
            className="hover:text-[#3156ED] transition-colors cursor-pointer"
          >
            Process
          </a>
          <a
            href="#services"
            className="hover:text-[#3156ED] transition-colors cursor-pointer"
          >
            Services
          </a>

          <a
            href="tel:+8801732260262"
            className="px-6 py-3 bg-[#00153A] text-white rounded-full hover:bg-[#3156ED] transition-all button-text cursor-pointer"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
