'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function CartPage() {
  const [activeTab, setActiveTab] = useState('shopping-bag');
  const [quantities, setQuantities] = useState({
    1: 1,
    2: 1
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleQuantityChange = (productId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change)
    }));
  };

  const subtotal = 180;
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <main className="bg-gray-50 min-h-screen pb-20 lg:pb-8">
      <Navbar />
      
      <div className="w-full px-4 md:px-8 lg:px-16 py-4 md:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            {/* Left Panel - Shopping Bag */}
            <div className="lg:col-span-2">
              {/* Header with Tabs */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-black uppercase">SHOPPING BAG</h1>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                    <circle cx="12" cy="12" r="4" fill="black"/>
                  </svg>
                  <button
                    onClick={() => setActiveTab('favourites')}
                    className={`text-sm font-normal transition-opacity ${
                      activeTab === 'favourites' ? 'text-black' : 'text-gray-400'
                    }`}
                  >
                    FAVOURITES
                  </button>
                </div>
              </div>

              {/* Product Cards - Mobile: Stacked, Desktop: Grid */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-6">
                {/* Product 1 */}
                <div className="bg-white relative flex gap-4 md:flex-col">
                  {/* Remove Button (X) */}
                  <button className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity z-10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Product Image */}
                  <div className="relative w-32 h-32 md:w-full md:aspect-square overflow-hidden flex-shrink-0 md:mb-4">
                    <Image
                      src="/SOG_90-1.jpg"
                      alt="Full Sleeve Zipper"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    {/* Heart Icon */}
                    <button className="absolute bottom-2 right-2 w-6 h-6 md:w-8 md:h-8 bg-white flex items-center justify-center hover:opacity-80 transition-opacity">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-4 md:h-4">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  {/* Product Details - Mobile Layout */}
                  <div className="flex-1 flex flex-col justify-between py-2 md:px-2">
                    <div>
                      {/* Product Info */}
                      <p className="text-xs text-gray-600 mb-1">Cotton T Shirt</p>
                      <h3 className="text-sm font-normal text-black mb-1">Full Sleeve Zipper</h3>
                      <p className="text-sm font-normal text-black mb-3">$99</p>
                    </div>

                    {/* Mobile: Size, Color, Quantity on Right */}
                    <div className="flex flex-col items-end md:items-start gap-2">
                      {/* Size and Color */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-normal text-black">L</span>
                        <div className="w-4 h-4 bg-black border border-gray-300"></div>
                      </div>

                      {/* Quantity Selector - Vertical on Mobile */}
                      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                        <button
                          onClick={() => handleQuantityChange(1, 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition-colors"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5v14M5 12h14" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </button>
                        <span className="text-sm text-black w-8 text-center">{quantities[1]}</span>
                        <button
                          onClick={() => handleQuantityChange(1, -1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition-colors"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </button>
                        {/* Refresh/Undo Icon */}
                        <button className="hover:opacity-70 transition-opacity mt-1 md:mt-0 md:ml-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 3v5h-5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 21v-5h5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="bg-white relative flex gap-4 md:flex-col">
                  {/* Remove Button (X) */}
                  <button className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity z-10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Product Image */}
                  <div className="relative w-32 h-32 md:w-full md:aspect-square overflow-hidden flex-shrink-0 md:mb-4">
                    <Image
                      src="/ddd.jpg"
                      alt="Basic Slim Fit T-Shirt"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    {/* Heart Icon */}
                    <button className="absolute bottom-2 right-2 w-6 h-6 md:w-8 md:h-8 bg-white flex items-center justify-center hover:opacity-80 transition-opacity">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-4 md:h-4">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  {/* Product Details - Mobile Layout */}
                  <div className="flex-1 flex flex-col justify-between py-2 md:px-2">
                    <div>
                      {/* Product Info */}
                      <p className="text-xs text-gray-600 mb-1">Cotton T Shirt</p>
                      <h3 className="text-sm font-normal text-black mb-1">Basic Slim Fit T-Shirt</h3>
                      <p className="text-sm font-normal text-black mb-3">$99</p>
                    </div>

                    {/* Mobile: Size, Color, Quantity on Right */}
                    <div className="flex flex-col items-end md:items-start gap-2">
                      {/* Size and Color */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-normal text-black">L</span>
                        <div className="w-4 h-4 bg-black border border-gray-300"></div>
                      </div>

                      {/* Quantity Selector - Vertical on Mobile */}
                      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                        <button
                          onClick={() => handleQuantityChange(2, 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition-colors"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5v14M5 12h14" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </button>
                        <span className="text-sm text-black w-8 text-center">{quantities[2]}</span>
                        <button
                          onClick={() => handleQuantityChange(2, -1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition-colors"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12h14" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </button>
                        {/* Refresh/Undo Icon */}
                        <button className="hover:opacity-70 transition-opacity mt-1 md:mt-0 md:ml-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 3v5h-5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 21v-5h5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Order Summary */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-8">
                <div className="bg-white p-4 lg:p-6 border border-gray-200">
                  <h2 className="text-lg lg:text-xl font-bold text-black uppercase mb-4 lg:mb-6">ORDER SUMMARY</h2>

                  {/* Order Details */}
                  <div className="space-y-3 mb-4 lg:mb-6 pb-4 lg:pb-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-normal text-black">Subtotal</span>
                      <span className="text-sm font-normal text-black">${subtotal}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-normal text-black">Shipping</span>
                      <span className="text-sm font-normal text-black">${shipping}</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex items-center justify-between mb-4 lg:mb-6">
                    <span className="text-sm font-bold text-black uppercase">TOTAL (TAX INCL.)</span>
                    <span className="text-sm font-bold text-black">${total}</span>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="mb-4 lg:mb-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToTerms}
                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                        className="w-4 h-4 border-gray-300 text-black focus:ring-black"
                      />
                      <span className="text-xs text-black">I agree to the Terms and Conditions</span>
                    </label>
                  </div>

                  {/* Continue Button */}
                  <Link
                    href="/checkout"
                    className="block w-full py-3 lg:py-4 bg-gray-400 text-black text-sm font-normal uppercase tracking-wide hover:bg-gray-500 transition-colors text-center"
                  >
                    CONTINUE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

