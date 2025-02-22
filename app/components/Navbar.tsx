'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Microfinance text */}
          <div className="flex flex-col">
            <div className="font-serif italic text-xl md:text-3xl text-[#003366] font-bold">
              SNEP
            </div>
            <div className="text-[#003366] text-xs -mt-1">
              microfinance
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#003366]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#003366] hover:text-[#0056b3]">HOME</Link>
            <Link href="/about" className="text-[#003366] hover:text-[#0056b3]">ABOUT US</Link>
            <Link href="/products" className="text-[#003366] hover:text-[#0056b3]">PRODUCTS</Link>
            <Link href="/news" className="text-[#003366] hover:text-[#0056b3]">NEWS</Link>
            <Link href="/vacancies" className="text-[#003366] hover:text-[#0056b3]">VACANCIES</Link>
            <Link href="/contact" className="text-[#003366] hover:text-[#0056b3]">CONTACT US</Link>
            <Link href="/save" className="text-[#003366] hover:text-[#0056b3]">SAVE WISELY</Link>
            <Link href="/banking" className="text-[#003366] hover:text-[#0056b3]">INTERNET BANKING</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white z-50 shadow-lg transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
      }`}>
        <div className="flex flex-col space-y-2 p-4">
          <Link href="/" className="text-[#003366] hover:text-[#0056b3]">HOME</Link>
          <Link href="/about" className="text-[#003366] hover:text-[#0056b3]">ABOUT US</Link>
          <Link href="/products" className="text-[#003366] hover:text-[#0056b3]">PRODUCTS</Link>
          <Link href="/news" className="text-[#003366] hover:text-[#0056b3]">NEWS</Link>
          <Link href="/vacancies" className="text-[#003366] hover:text-[#0056b3]">VACANCIES</Link>
          <Link href="/contact" className="text-[#003366] hover:text-[#0056b3]">CONTACT US</Link>
          <Link href="/save" className="text-[#003366] hover:text-[#0056b3]">SAVE WISELY</Link>
          <Link href="/banking" className="text-[#003366] hover:text-[#0056b3]">INTERNET BANKING</Link>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-[#003366] py-2">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-2 justify-between">
            <button className="bg-[#003366] text-white px-3 py-1 text-sm hover:bg-[#004080] transition-colors whitespace-nowrap">
              SAVE
            </button>
            <button className="bg-[#003366] text-white px-3 py-1 text-sm hover:bg-[#004080] transition-colors whitespace-nowrap">
              BORROW
            </button>
            <button className="bg-[#003366] text-white px-3 py-1 text-sm hover:bg-[#004080] transition-colors whitespace-nowrap">
              TRANSACT
            </button>
            <button className="bg-[#003366] text-white px-3 py-1 text-sm hover:bg-[#004080] transition-colors whitespace-nowrap">
              BUSINESS
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
