'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function CheckoutPage() {
  const [activeTab, setActiveTab] = useState('information');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    country: '',
    state: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="w-full px-4 md:px-8 lg:px-16 py-4 md:py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Left Panel - Checkout Information */}
            <div className="w-full">
              {/* Back Arrow */}
              <Link href="/" className="inline-flex items-center mb-6 text-black hover:opacity-70 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* CHECKOUT Heading */}
              <h1 className="text-3xl font-bold text-black mb-8 uppercase">CHECKOUT</h1>

              {/* Tabs */}
              <div className="flex items-center gap-6 mb-8">
                <button
                  onClick={() => setActiveTab('information')}
                  className={`text-sm font-normal uppercase tracking-wide transition-opacity ${
                    activeTab === 'information' ? 'text-black' : 'text-gray-400'
                  }`}
                >
                  INFORMATION
                </button>
                <button
                  onClick={() => setActiveTab('shipping')}
                  className={`text-sm font-normal uppercase tracking-wide transition-opacity ${
                    activeTab === 'shipping' ? 'text-black' : 'text-gray-400'
                  }`}
                >
                  SHIPPING
                </button>
                <button
                  onClick={() => setActiveTab('payment')}
                  className={`text-sm font-normal uppercase tracking-wide transition-opacity ${
                    activeTab === 'payment' ? 'text-black' : 'text-gray-400'
                  }`}
                >
                  PAYMENT
                </button>
              </div>

              {/* Contact Info Section */}
              <div className="mb-8">
                <h2 className="text-sm font-normal text-black mb-4 uppercase">CONTACT INFO</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black text-sm font-normal focus:outline-none focus:border-black"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black text-sm font-normal focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Shipping Address Section */}
              <div className="mb-8">
                <h2 className="text-sm font-normal text-black mb-4 uppercase">SHIPPING ADDRESS</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-black text-sm font-normal focus:outline-none focus:border-black"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-black text-sm font-normal focus:outline-none focus:border-black"
                    />
                  </div>
                  <div className="relative">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-black text-sm font-normal focus:outline-none focus:border-black appearance-none pr-10"
                    >
                      <option value="">Country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                    </select>
                    <svg
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="state"
                    placeholder="State / Region"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black text-sm font-normal focus:outline-none focus:border-black"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-black text-sm font-normal focus:outline-none focus:border-black"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-black text-sm font-normal focus:outline-none focus:border-black"
                    />
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Postal Code"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-black text-sm font-normal focus:outline-none focus:border-black"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Button */}
              <button className="w-full py-4 bg-gray-400 text-black text-sm font-normal uppercase tracking-wide hover:bg-gray-500 transition-colors flex items-center justify-center gap-2">
                Shipping
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Right Panel - Order Summary */}
            <div className="w-full">
              <div className="sticky top-8">
                <div className="bg-white p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-black uppercase">YOUR ORDER</h2>
                    <span className="text-sm text-gray-500">(2)</span>
                  </div>

                  {/* Order Items */}
                  <div className="space-y-4 mb-6">
                    {/* Product 1 */}
                    <div className="flex gap-4 pb-4 border-b border-gray-200">
                      <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
                        <Image
                          src="/SOG_90-1.jpg"
                          alt="Basic Heavy T-Shirt"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h3 className="text-sm font-normal text-black mb-1">Basic Heavy T-Shirt</h3>
                            <p className="text-xs text-gray-500 mb-1">Black/L</p>
                            <p className="text-xs text-gray-500">(1)</p>
                          </div>
                          <div className="text-right">
                            <a href="#" className="text-xs text-black underline mb-2 block">Change</a>
                            <p className="text-sm font-normal text-black">$99</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product 2 */}
                    <div className="flex gap-4 pb-4 border-b border-gray-200">
                      <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
                        <Image
                          src="/ddd.jpg"
                          alt="Basic Fit T-Shirt"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-1">
                          <div>
                            <h3 className="text-sm font-normal text-black mb-1">Basic Fit T-Shirt</h3>
                            <p className="text-xs text-gray-500 mb-1">Black/L</p>
                            <p className="text-xs text-gray-500">(1)</p>
                          </div>
                          <div className="text-right">
                            <a href="#" className="text-xs text-black underline mb-2 block">Change</a>
                            <p className="text-sm font-normal text-black">$99</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-normal text-black">Subtotal</span>
                      <span className="text-sm font-normal text-black">$180.00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-normal text-gray-400">Shipping</span>
                      <span className="text-sm font-normal text-gray-400">Calculated at next step</span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                      <span className="text-sm font-bold text-black">Total</span>
                      <span className="text-sm font-bold text-black">$180.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

