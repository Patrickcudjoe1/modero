import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="w-full px-4 md:px-8 py-4 md:py-6 flex items-center justify-between relative bg-gray-50 z-50 lg:sticky lg:top-0">
      {/* Mobile Navigation */}
      <div className="flex items-center justify-between w-full lg:hidden">
        {/* Hamburger menu */}
        <button className="flex flex-col gap-1.5 cursor-pointer" aria-label="Menu">
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

        {/* Center - Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-[150px] h-[150px] relative">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Right side - Icons */}
        <div className="flex items-center gap-2">
          <Link href="/cart" className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2L4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-5-5H9z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 2v5h6V2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between w-full">
        {/* Left side - Hamburger and Navigation */}
        <div className="flex items-center gap-8">
          {/* Navigation links - visible on desktop only */}
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-normal text-black hover:opacity-70 transition-opacity">Home</Link>
            <Link href="/products" className="text-sm font-normal text-black hover:opacity-70 transition-opacity">Collections</Link>
            <Link href="/#new-this-week" className="text-sm font-normal text-black hover:opacity-70 transition-opacity">New</Link>
          </nav>
        </div>

        {/* Center - Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-50 h-50 relative">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Right side - Icons */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Favorites">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <Link href="/cart" className="px-4 h-10 rounded-full bg-black text-white text-sm font-normal flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2L4 7v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-5-5H9z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 2v5h6V2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Cart
          </Link>
          <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

