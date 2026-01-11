'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Product {
  id: number;
  image: string;
  category: string;
  name: string;
  price: string;
  colorVariations?: number;
}

const products: Product[] = [
  {
    id: 1,
    image: '/SOG_90-1.jpg',
    category: 'V-Neck T-Shirt',
    name: 'Embroidered Seersucker Shirt',
    price: '$99'
  },
  {
    id: 2,
    image: '/ddd.jpg',
    category: 'Cotton T Shirt',
    name: 'Basic Slim Fit T-Shirt',
    price: '$99',
    colorVariations: 5
  },
  {
    id: 3,
    image: '/SOG_90-1.jpg',
    category: 'Henley T-Shirt',
    name: 'Blurred Print T-Shirt',
    price: '$99',
    colorVariations: 3
  },
  {
    id: 4,
    image: '/ddd.jpg',
    category: 'Crewneck T-Shirt',
    name: 'Full Sleeve Zipper',
    price: '$99',
    colorVariations: 2
  }
];

export default function NewThisWeek() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optional: Unobserve after first trigger to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it's fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  // Display 4 products at a time
  const visibleProducts = products.slice(currentIndex, currentIndex + 4).concat(
    products.slice(0, Math.max(0, currentIndex + 4 - products.length))
  );

  return (
    <div 
      ref={sectionRef}
      className={`w-full px-4 md:px-8 lg:px-16 py-16 bg-gray-50 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl md:text-5xl font-serif font-normal uppercase tracking-wide text-transparent" style={{ WebkitTextStroke: '1px black', textStroke: '1px black' }}>
              NEW THIS WEEK
            </h2>
            <span className="text-2xl md:text-3xl font-bold text-blue-600 ml-2">
              (50)
            </span>
          </div>
          <a href="#" className="text-gray-500 hover:text-black transition-colors text-sm md:text-base">
            See All
          </a>
        </div>

        {/* Product Gallery */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {visibleProducts.map((product) => (
              <div key={product.id} className="bg-white group">
                {/* Product Image Container */}
                <div className="relative bg-white aspect-square overflow-hidden mb-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Add to Cart Button */}
                  <button className="absolute bottom-2 right-2 w-8 h-8 bg-gray-400 hover:bg-gray-500 flex items-center justify-center transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Product Info */}
                <div className="bg-gray-100 p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <p className="text-xs text-gray-600">{product.category}</p>
                    {product.colorVariations && (
                      <span className="text-xs text-gray-500">+{product.colorVariations}</span>
                    )}
                  </div>
                  <h3 className="text-sm font-medium text-black mb-1">{product.name}</h3>
                  <p className="text-sm font-semibold text-black">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 border border-gray-300 flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 bg-gray-300 hover:bg-gray-400 border border-gray-300 flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

