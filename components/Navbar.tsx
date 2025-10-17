"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="w-48 h-12 sm:w-56 sm:h-14 relative group-hover:scale-105 transition-transform duration-300">
              <Image
                src={theme === "dark" ? "/Logo/Orange.png" : "/Logo/Logo.png"}
                alt="Hadaf Industrial Cup Logo"
                width={224}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base xl:text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a href="/contact" className={`px-3 py-1.5 lg:px-4 lg:py-2 ${theme === "dark" ? "bg-orange-500 text-white" : "bg-blue-500 text-white"} rounded-full hover:bg-orange-600 hover:text-white text-xs lg:text-sm font-medium transition-colors`}>
              Get Your Now
            </a>
            <a href="/contact" className="px-3 py-1.5 lg:px-4 lg:py-2 bg-transparent border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white text-xs lg:text-sm font-medium transition-colors">
              Contact
            </a>
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
                className="block text-base sm:text-lg text-gray-700 dark:text-gray-300 hover:text-orange-500 font-medium py-1"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-3 border-t border-gray-100 dark:border-gray-700 pt-3 space-y-2">
              <a href="/contact" className="w-full px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 text-sm font-medium transition-colors block text-center">
                Get Your Now
              </a>
              <a href="/contact" className="w-full px-4 py-2 bg-transparent border border-orange-500 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white text-sm font-medium transition-colors block text-center">
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
