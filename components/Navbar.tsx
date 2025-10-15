"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Products", href: "#" },
    { name: "AI Tools", href: "#" },
    { name: "Features", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Resources", href: "#" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-md"></div>
            <span className="font-semibold text-base sm:text-lg text-gray-800 dark:text-white">
              Hadaf
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm xl:text-base text-gray-700 dark:text-gray-300 hover:text-orange-500 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a href="#" className="text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors">
              Try Online Version
            </a>
            <button className="px-3 py-1.5 lg:px-4 lg:py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 text-xs lg:text-sm font-medium transition-colors">
              Download
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center space-x-1 sm:space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none p-1"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg"
        >
          <div className="px-3 sm:px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-orange-500 font-medium py-1"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#"
              className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium mt-3 border-t border-gray-100 dark:border-gray-700 pt-3 hover:text-orange-500 transition-colors"
            >
              Try Online Version
            </a>
            <button className="mt-3 w-full px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 text-sm font-medium transition-colors">
              Download
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
