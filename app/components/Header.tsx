'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Solution', hasDropdown: true },
    { name: 'Industries', hasDropdown: true },
    { name: 'Our Services', hasDropdown: true },
    { name: 'Company', hasDropdown: true },
    { name: 'Resources', hasDropdown: true },
  ];

  return (
    <header className="bg-[#4B2E83] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold">
              DYNAMICS <span className="bg-red-600 px-2 py-1 rounded">SQUARE</span>™
            </div>
            <div className="h-8 w-px bg-white"></div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500"></div>
                <div className="w-3 h-3 bg-green-500"></div>
                <div className="w-3 h-3 bg-blue-500"></div>
                <div className="w-3 h-3 bg-yellow-500"></div>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-black">Microsoft</div>
                <div className="text-gray-600">Solutions Partner</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="flex items-center gap-1 hover:text-gray-300 transition-colors"
              >
                {item.name}
                {item.hasDropdown && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <button className="hidden md:block bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition-colors">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="block py-2 hover:text-gray-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg w-full">
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

