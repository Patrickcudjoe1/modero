'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import MobileHero from '@/components/MobileHero';
import NewThisWeek from '@/components/NewThisWeek';
import Collections from '@/components/Collections';
import FashionApproach from '@/components/FashionApproach';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? 6 : prev - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= 6 ? 0 : prev + 2));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="bg-gray-50">
      <Navbar />
      
      {/* Mobile Hero Section */}
      <div className="lg:hidden">
        <MobileHero />
      </div>

      {/* Desktop Hero Section */}
      <section id="home" className="min-h-screen relative hidden lg:block">
        <Sidebar />
        <Hero currentIndex={currentIndex} onPrevious={handlePrevious} onNext={handleNext} />
        
        {/* CTA Buttons - At bottom, aligned with NEW COLLECTION section */}
        <div className="fixed left-8 bottom-8 flex items-center gap-4 z-10">
          <Link 
            href="/products"
            className="px-8 py-4 bg-gray-200 text-black text-sm font-normal flex items-center gap-3 hover:bg-gray-300 transition-colors"
          >
            Go To Shop
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrevious}
              className="w-12 h-12 bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors" 
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors" 
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      {/* NEW THIS WEEK Section - appears when scrolling down - Desktop only */}
      <section id="new-this-week" className="hidden lg:block">
        <NewThisWeek />
      </section>
      
      {/* Collections Section - Desktop only */}
      <div className="hidden lg:block">
        <Collections />
      </div>
      
      {/* Fashion Approach Section - Desktop only */}
      <div className="hidden lg:block">
        <FashionApproach />
      </div>
      
      {/* Footer - Desktop only */}
      <div className="hidden lg:block">
        <Footer />
      </div>
    </main>
  );
}
