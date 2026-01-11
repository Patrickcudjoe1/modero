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
    category: 'Cotton T Shirt',
    name: 'Basic Heavy Weight T-Shirt',
    price: '$ 199'
  },
  {
    id: 2,
    image: '/ddd.jpg',
    category: 'Cotton jeans',
    name: 'Soft Wash Straight Fit Jeans',
    price: '$ 199',
    colorVariations: 5
  },
  {
    id: 3,
    image: '/SOG_90-1.jpg',
    category: 'Cotton T Shirt',
    name: 'Basic Heavy Weight T-Shirt',
    price: '$ 199',
    colorVariations: 5
  },
  {
    id: 4,
    image: '/ddd.jpg',
    category: 'Cotton T Shirt',
    name: 'Basic Heavy Weight T-Shirt',
    price: '$ 199'
  },
  {
    id: 5,
    image: '/SOG_90-1.jpg',
    category: 'Cotton jeans',
    name: 'Soft Wash Straight Fit Jeans',
    price: '$ 199',
    colorVariations: 3
  },
  {
    id: 6,
    image: '/ddd.jpg',
    category: 'Cotton T Shirt',
    name: 'Basic Heavy Weight T-Shirt',
    price: '$ 199',
    colorVariations: 2
  }
];

export default function Collections() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3); // Start with 3 products visible
  const [selectedProduct, setSelectedProduct] = useState<number | null>(2); // Middle product highlighted by default
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animation
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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
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

  const categories = ['ALL', 'Men', 'Women', 'KID'];
  
  const handleIncrease = () => {
    if (visibleCount < products.length) {
      setVisibleCount(prev => Math.min(prev + 1, products.length));
    }
  };
  
  const handleDecrease = () => {
    if (visibleCount > 1) {
      setVisibleCount(prev => Math.max(prev - 1, 1));
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="collections"
      className={`w-full px-4 md:px-8 lg:px-16 py-16 bg-gray-50 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            {/* Title and Categories */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                XIV COLLECTIONS 23-24
              </h2>
              {/* Category Navigation */}
              <nav className="flex flex-wrap gap-4 md:gap-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-sm font-normal uppercase tracking-wide transition-opacity hover:opacity-70 ${
                      activeCategory === category
                        ? 'text-black underline'
                        : 'text-black'
                    }`}
                  >
                    {category === 'ALL' ? `(${category})` : category}
                  </button>
                ))}
              </nav>
            </div>

            {/* Increase/Decrease Product Count */}
            <div className="mt-4 md:mt-0 flex flex-row items-center gap-2">
              <button
                onClick={handleDecrease}
                disabled={visibleCount <= 1}
                className="w-8 h-8 flex items-center justify-center text-lg font-normal text-black border border-black bg-white hover:bg-black hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                −
              </button>
              <button
                onClick={handleIncrease}
                disabled={visibleCount >= products.length}
                className="w-8 h-8 flex items-center justify-center text-lg font-normal text-black border border-black bg-white hover:bg-black hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {products.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product.id)}
              className={`bg-white group cursor-pointer transition-all ${
                selectedProduct === product.id
                  ? 'border-2 border-blue-500'
                  : 'border border-transparent'
              }`}
            >
              {/* Product Image */}
              <div className="relative bg-white aspect-square overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Add to Cart Button */}
                <button className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-400 hover:bg-gray-500 flex items-center justify-center transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Product Info */}
              <div className="px-3 pb-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1">
                    <p className="text-sm text-black">{product.category}</p>
                    {product.colorVariations && (
                      <span className="text-sm text-gray-500">+{product.colorVariations}</span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-black">{product.price}</p>
                </div>
                <h3 className="text-sm font-normal text-black">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

