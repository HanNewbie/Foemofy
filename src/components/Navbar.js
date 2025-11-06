"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

        <ul className="hidden md:flex space-x-6 font-medium">
          {["home", "about", "services", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-600 transition`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X
              className={`w-7 h-7 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            />
          ) : (
            <Menu
              className={`w-7 h-7 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            />
          )}
        </button>
      </nav>

      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center bg-gray-300/30 backdrop-blur text-white py-4 space-y-4 font-medium drop-shadow-md">
          {["home", "about", "services", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
