'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

// Product data - in a real app, this would come from an API
const productData: { [key: string]: any } = {
  '1': {
    id: 1,
    title: 'ABSTRACT PRINT SHIRT',
    price: '$99',
    description: 'Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.',
    category: 'Cotton T Shirt',
    images: ['/SOG_90-1.jpg', '/ddd.jpg', '/SOG_90-1.jpg', '/ddd.jpg', '/SOG_90-1.jpg'],
    colors: [
      { name: 'Light Gray', value: '#D3D3D3' },
      { name: 'Dark Gray', value: '#808080' },
      { name: 'Black', value: '#000000' },
      { name: 'Mint Green', value: '#98FB98' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Light Purple', value: '#DDA0DD' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2X']
  },
  '2': {
    id: 2,
    title: 'BASIC HEAVY WEIGHT T-SHIRT',
    price: '$99',
    description: 'Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.',
    category: 'Crewneck T-Shirt',
    images: ['/ddd.jpg', '/SOG_90-1.jpg', '/ddd.jpg', '/SOG_90-1.jpg', '/ddd.jpg'],
    colors: [
      { name: 'Light Gray', value: '#D3D3D3' },
      { name: 'Dark Gray', value: '#808080' },
      { name: 'Black', value: '#000000' },
      { name: 'Mint Green', value: '#98FB98' },
      { name: 'White', value: '#FFFFFF' },
      { name: 'Light Purple', value: '#DDA0DD' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2X']
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id as string;
  const product = productData[productId] || productData['1']; // Default to first product if not found

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(2); // Default to black (index 2)
  const [selectedSize, setSelectedSize] = useState('M');

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', { product, color: product.colors[selectedColor], size: selectedSize });
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Mobile Layout */}
      <div className="lg:hidden pb-24">
        {/* Back Button */}
        <div className="px-4 pt-4 pb-2">
          <button
            onClick={() => router.back()}
            className="flex items-center text-black hover:opacity-70 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18l-6-6 6-6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Main Product Image - Full Screen */}
        <div className="w-full aspect-[3/4] bg-white overflow-hidden mb-4">
          <img
            src={product.images[selectedImage]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnail Gallery - Horizontal */}
        <div className="px-4 mb-6">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {product.images.map((image: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 flex-shrink-0 border-2 overflow-hidden transition-all ${
                  selectedImage === index ? 'border-black' : 'border-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.title} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="px-4 mb-6">
          <h1 className="text-2xl font-bold text-black uppercase mb-3">{product.title}</h1>
          
          {/* Price and Favorites */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">MRP incl. of all taxes</p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-normal text-black">{product.price}</span>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-black mb-6">{product.description}</p>

          {/* Color Selection */}
          <div className="mb-6">
            <label className="block text-sm font-normal text-black mb-3">Color</label>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-10 h-10 border-2 transition-all ${
                    selectedColor === index ? 'border-black' : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <label className="block text-sm font-normal text-black mb-3">Size</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size: string) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm font-normal border transition-all ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 bg-white text-black hover:border-gray-500'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Measurement Guide */}
          <div className="mb-6">
            <a
              href="#"
              className="text-sm text-black underline hover:opacity-70 transition-opacity"
            >
              FIND YOUR SIZE | MEASUREMENT GUIDE
            </a>
          </div>

          {/* ADD Button - Fixed at Bottom */}
          <div className="fixed bottom-0 left-0 right-0 bg-gray-200 p-4 border-t border-gray-300">
            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-gray-200 text-black text-sm font-normal uppercase tracking-wide hover:bg-gray-300 transition-colors"
            >
              ADD
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block w-full px-4 md:px-8 lg:px-16 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-black transition-colors">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-black">{product.title}</span>
            </nav>
          </div>

          {/* Product Detail Card */}
          <div className="bg-white border border-blue-500 p-6 md:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Section - Product Images */}
              <div className="flex flex-col lg:flex-row gap-4 flex-1">
                {/* Main Product Image */}
                <div className="flex-1 aspect-square bg-white overflow-hidden">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Thumbnail Gallery - Vertical Stack */}
                <div className="flex lg:flex-col gap-2 lg:gap-3 flex-row lg:flex-shrink-0">
                  {product.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 border-2 overflow-hidden transition-all ${
                        selectedImage === index ? 'border-black' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Section - Product Information */}
              <div className="flex-1 flex flex-col">
                {/* Product Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase mb-4">
                  {product.title}
                </h1>

                {/* Price */}
                <div className="mb-2">
                  <p className="text-2xl md:text-3xl font-bold text-black">{product.price}</p>
                  <p className="text-sm text-gray-600 mt-1">MRP incl. of all taxes</p>
                </div>

                {/* Description */}
                <p className="text-base text-black mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Color Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-normal text-black mb-3">Color</label>
                  <div className="flex gap-3">
                    {product.colors.map((color: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(index)}
                        className={`w-10 h-10 border-2 transition-all ${
                          selectedColor === index
                            ? 'border-black scale-110'
                            : 'border-gray-300 hover:border-gray-500'
                        }`}
                        style={{ backgroundColor: color.value }}
                        aria-label={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-normal text-black mb-3">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size: string) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 text-sm font-normal border transition-all ${
                          selectedSize === size
                            ? 'border-black bg-black text-white'
                            : 'border-gray-300 bg-white text-black hover:border-gray-500'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Measurement Guide */}
                <div className="mb-6">
                  <a
                    href="#"
                    className="text-sm text-black underline hover:opacity-70 transition-opacity"
                  >
                    FIND YOUR SIZE | MEASUREMENT GUIDE
                  </a>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-gray-200 text-black text-sm font-normal uppercase tracking-wide hover:bg-gray-300 transition-colors"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

