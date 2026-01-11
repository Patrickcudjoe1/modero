'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const mobileProducts = [
  {
    id: 1,
    image: '/SOG_90-1.jpg',
    category: 'Cotton T Shirt',
    name: 'Full Sleeve Zipper',
    price: '$199'
  },
  {
    id: 2,
    image: '/ddd.jpg',
    category: 'Cotton T Shirt',
    name: 'Full Sleeve Zipper',
    price: '$199'
  },
  {
    id: 3,
    image: '/SOG_90-1.jpg',
    category: 'Cotton T Shirt',
    name: 'Full Sleeve Zipper',
    price: '$199'
  },
  {
    id: 4,
    image: '/ddd.jpg',
    category: 'Cotton T Shirt',
    name: 'Full Sleeve Zipper',
    price: '$199'
  }
];

export default function MobileHero() {
  return (
    <div className="lg:hidden w-full px-4 py-6 bg-gray-50 min-h-screen pt-4">
      {/* Category Navigation */}
      <div className="flex flex-col gap-3 mb-8 pt-4">
        <Link href="/products?category=men" className="text-sm font-normal text-black hover:opacity-70 transition-opacity">
          MEN
        </Link>
        <Link href="/products?category=women" className="text-sm font-normal text-black hover:opacity-70 transition-opacity">
          WOMEN
        </Link>
        <Link href="/products?category=kids" className="text-sm font-normal text-black hover:opacity-70 transition-opacity">
          KIDS
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8" stroke="black" strokeWidth="2"/>
            <path d="m21 21-4.35-4.35" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-3 bg-gray-200 border-none rounded text-sm text-black placeholder-gray-500 focus:outline-none"
        />
      </div>

      {/* NEW COLLECTION Section */}
      <div className="mb-8 mt-0">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">NEW COLLECTION</h1>
        <h2 className="text-xl md:text-2xl font-normal text-black mb-1">Summer</h2>
        <p className="text-base md:text-lg text-black">2024</p>
      </div>

      {/* Horizontal Scrollable Product Cards */}
      <div className="mb-8">
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {mobileProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[280px]">
              <div className="bg-white mb-3">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={280}
                    height={280}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Product Info */}
                <div className="px-2">
                  <p className="text-xs text-gray-600 mb-1">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-black">{product.name}</h3>
                    <span className="text-sm font-normal text-black">{product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Go To Shop Button */}
      <div className="fixed bottom-20 left-4 right-4 lg:hidden z-40">
        <Link
          href="/products"
          className="w-full py-4 bg-gray-200 text-black text-sm font-normal rounded-lg flex items-center justify-center gap-2 hover:bg-gray-300 transition-colors"
        >
          Go To Shop
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

