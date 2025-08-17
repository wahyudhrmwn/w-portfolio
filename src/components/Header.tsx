"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest("header")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg">
        <nav className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Portfolio
            </span>
            <div className="w-2 h-2 bg-red-500 rounded-full ml-1"></div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Work
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Reviews
            </a>
            <button className="bg-gray-900 hover:cursor-pointer text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Book a call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              // Close X icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
        }`}
      >
        <div className="mt-2 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
          <nav className="py-2">
            <a
              href="#"
              className="block px-6 py-3 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="block px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#"
              className="block px-6 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <div className="px-6 py-3">
              <button
                className="w-full bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a call
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
