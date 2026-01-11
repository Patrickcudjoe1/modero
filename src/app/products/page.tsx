'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    name: 'Basic Slim Fit T-Shirt',
    price: '$ 199',
    colorVariations: 5
  },
  {
    id: 2,
    image: '/ddd.jpg',
    category: 'Crewneck T-Shirt',
    name: 'Basic Heavy Weight T-Shirt',
    price: '$ 199',
    colorVariations: 6
  },
  {
    id: 3,
    image: '/SOG_90-1.jpg',
    category: 'Cotton T Shirt',
    name: 'Full Sleeve Zipper',
    price: '$ 199'
  },
  {
    id: 4,
    image: '/ddd.jpg',
    category: 'Cotton T Shirt',
    name: 'Basic Slim Fit T-Shirt',
    price: '$ 199',
    colorVariations: 3
  },
  {
    id: 5,
    image: '/SOG_90-1.jpg',
    category: 'Crewneck T-Shirt',
    name: 'Basic Heavy Weight T-Shirt',
    price: '$ 199',
    colorVariations: 4
  },
  {
    id: 6,
    image: '/ddd.jpg',
    category: 'Cotton T Shirt',
    name: 'Full Sleeve Zipper',
    price: '$ 199',
    colorVariations: 2
  },
  {
    id: 7,
    image: '/SOG_90-1.jpg',
    category: 'Cotton T Shirt',
    name: 'Basic Slim Fit T-Shirt',
    price: '$ 199'
  },
  {
    id: 8,
    image: '/ddd.jpg',
    category: 'Crewneck T-Shirt',
    name: 'Basic Heavy Weight T-Shirt',
    price: '$ 199',
    colorVariations: 5
  },
  {
    id: 9,
    image: '/SOG_90-1.jpg',
    category: 'Cotton T Shirt',
    name: 'Full Sleeve Zipper',
    price: '$ 199',
    colorVariations: 3
  }
];

const categories = ['NEW', 'BEST SELLERS', 'SHIRTS', 'T-SHIRTS', 'POLO SHIRTS', 'JEANS', 'JACKETS', 'SHORTS', 'SUITS', 'COATS'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', '2X'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [expandedFilters, setExpandedFilters] = useState<{ [key: string]: boolean }>({
    availability: true,
    category: false,
    colors: false,
    priceRange: false,
    collections: false,
    tags: false,
    ratings: false
  });

  const toggleFilter = (filterName: string) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="w-full px-4 md:px-8 lg:px-16 py-4 md:py-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Breadcrumb - Centered */}
            <div className="mb-4 text-center">
              <nav className="text-xs text-gray-500">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-black">Products</span>
              </nav>
            </div>

            {/* Main Title - Centered */}
            <h1 className="text-3xl font-bold text-black uppercase mb-6 text-center">PRODUCTS</h1>
            
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
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
            </div>

            {/* Filter Buttons - Mobile Layout */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <h2 className="text-sm font-bold text-black">Filters</h2>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['NEW', 'SHIRTS', 'POLO SHIRTS', 'BEST SELLERS', 'T-SHIRTS', 'JEANS'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                    className={`px-3 py-2 text-xs font-normal uppercase tracking-wide border border-black bg-white hover:bg-gray-100 transition-colors ${
                      selectedCategory === category ? 'bg-black text-white' : 'text-black'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid - Mobile 2 Columns */}
            <div className="grid grid-cols-2 gap-4 mb-20">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="bg-white group cursor-pointer transition-all block"
                >
                  {/* Product Image */}
                  <div className="relative bg-white aspect-square overflow-hidden mb-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="px-2 pb-2">
                    <p className="text-xs text-gray-600 mb-1">{product.category}</p>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xs font-bold text-black flex-1">{product.name}</h3>
                      <span className="text-xs font-normal text-black ml-2">{product.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Breadcrumb */}
            <div className="mb-4">
              <nav className="text-sm text-gray-500">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-black">Products</span>
              </nav>
            </div>

            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-black uppercase mb-6">PRODUCTS</h1>
              
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative max-w-2xl">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11" cy="11" r="8" stroke="#666" strokeWidth="2"/>
                      <path d="m21 21-4.35-4.35" stroke="#666" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-none text-sm focus:outline-none focus:ring-0 focus:bg-gray-200 transition-colors"
                  />
                </div>
              </div>

              {/* Category Filter Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                    className={`px-4 py-2 text-sm font-normal uppercase tracking-wide border border-gray-300 bg-white hover:bg-gray-100 transition-colors ${
                      selectedCategory === category ? 'border-black bg-black text-white' : 'text-black'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Filters */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white p-6 border border-gray-200">
                <h2 className="text-lg font-bold text-black mb-6">Filters</h2>

                {/* Size Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-normal text-black mb-3">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                        className={`w-10 h-10 text-xs font-normal border border-gray-300 bg-white hover:bg-gray-100 transition-colors ${
                          selectedSize === size ? 'border-black bg-black text-white' : 'text-black'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability Filter */}
                <div className="mb-6">
                  <button
                    onClick={() => toggleFilter('availability')}
                    className="w-full flex items-center justify-between text-sm font-normal text-black mb-3"
                  >
                    <span>Availability</span>
                    {expandedFilters.availability ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {expandedFilters.availability && (
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" defaultChecked />
                        <span>Availability (450)</span>
                      </label>
                      <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>Out Of Stock (18)</span>
                      </label>
                    </div>
                  )}
                </div>

                {/* Collapsible Filter Sections */}
                {[
                  { key: 'category', label: 'Category' },
                  { key: 'colors', label: 'Colors' },
                  { key: 'priceRange', label: 'Price Range' },
                  { key: 'collections', label: 'Collections' },
                  { key: 'tags', label: 'Tags' },
                  { key: 'ratings', label: 'Ratings' }
                ].map((filter) => (
                  <div key={filter.key} className="mb-6">
                    <button
                      onClick={() => toggleFilter(filter.key)}
                      className="w-full flex items-center justify-between text-sm font-normal text-black"
                    >
                      <span>{filter.label}</span>
                      {expandedFilters[filter.key] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {expandedFilters[filter.key] && (
                      <div className="mt-3 text-sm text-gray-500">
                        {/* Filter content would go here */}
                        <p className="text-xs">Filter options coming soon</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </aside>

            {/* Main Content - Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="bg-white group cursor-pointer transition-all hover:shadow-lg block"
                  >
                    {/* Product Image */}
                    <div className="relative bg-white aspect-[3/4] overflow-hidden mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

