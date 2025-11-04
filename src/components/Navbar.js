"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3 text-2xl font-bold transition-colors duration-300">
          <img
            src="/img/logo.png"
            alt="Creative Agency Logo"
            className="w-20 h-20 object-contain"
          />
          <span className={`${isScrolled ? "text-blue-600" : "text-white"}`}>
            Foemofy Creative
          </span>
        </div>

        <ul className="flex space-x-6 font-medium">
          <li>
            <a
              href="#home"
              className={`${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-blue-600 transition`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${  
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-blue-600 transition`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:text-blue-600 transition`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
                className={`${
                isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-600 transition`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
