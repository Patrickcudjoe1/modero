'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const collectionRef = useRef<HTMLDivElement>(null);

  // Scroll detection to move NEW COLLECTION to top-left corner
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      // Trigger when scrolled down more than 200px
      setIsScrolled(scrollY > 200);
    };

    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to detect when NEW COLLECTION section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (collectionRef.current) {
      observer.observe(collectionRef.current);
    }

    return () => {
      if (collectionRef.current) {
        observer.unobserve(collectionRef.current);
      }
    };
  }, []);

  return (
    <aside className="fixed left-8 top-32 flex flex-col gap-8 z-10 hidden lg:flex">
      {/* Categories */}
      <div className="flex flex-col gap-6">
        <a href="#" className="text-sm font-normal text-black uppercase tracking-wider hover:opacity-70 transition-opacity">
          MEN
        </a>
        <a href="#" className="text-sm font-normal text-black uppercase tracking-wider hover:opacity-70 transition-opacity">
          WOMEN
        </a>
        <a href="#" className="text-sm font-normal text-black uppercase tracking-wider hover:opacity-70 transition-opacity">
          KIDS
        </a>
      </div>

      {/* Search Bar */}
      <div className="relative mt-4">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8" stroke="#666" strokeWidth="2"/>
            <path d="m21 21-4.35-4.35" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-48 pl-10 pr-4 py-3 bg-gray-100 border-none rounded-none text-sm focus:outline-none focus:ring-0 focus:bg-gray-200 transition-colors"
        />
      </div>

      {/* NEW COLLECTION Section - Original position in sidebar */}
      <div 
        ref={collectionRef}
        className={`flex flex-col gap-2 mt-8 transition-all duration-700 ease-in-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        } ${
          isScrolled ? 'opacity-0 h-0 overflow-hidden pointer-events-none' : 'opacity-100'
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight leading-none">
          NEW<br />COLLECTION
        </h1>
        <p className="text-lg text-gray-600 font-normal">
          Summer 2024
        </p>
      </div>
      
      {/* NEW COLLECTION Section - Fixed position in corner when scrolled */}
      <div 
        className={`fixed top-28 left-8 z-50 flex flex-col gap-2 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'opacity-100 translate-x-0 translate-y-0' 
            : 'opacity-0 -translate-x-4 pointer-events-none h-0 overflow-hidden'
        }`}
      >
        <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight leading-none">
          NEW<br />COLLECTION
        </h1>
        <p className="text-sm text-gray-600 font-normal">
          Summer 2024
        </p>
      </div>
    </aside>
  );
}

