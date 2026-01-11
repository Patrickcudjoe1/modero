'use client';

import React from 'react';

// Product image data - using two images from public folder
const productImages = [
  {
    id: 1,
    src: '/SOG_90-1.jpg',
    alt: 'Product 1'
  },
  {
    id: 2,
    src: '/ddd.jpg',
    alt: 'Product 2'
  },
  {
    id: 3,
    src: '/SOG_90-1.jpg',
    alt: 'Product 3'
  },
  {
    id: 4,
    src: '/SOG600.jpg',
    alt: 'Product 4'
  },
  {
    id: 5,
    src: '/SOG_90-1.jpg',
    alt: 'Product 5'
  },
  {
    id: 6,
    src: '/SOG600.jpg',
    alt: 'Product 6'
  },
  {
    id: 7,
    src: '/SOG_90-1.jpg',
    alt: 'Product 7'
  },
  {
    id: 8,
    src: '/SOG600.jpg',
    alt: 'Product 8'
  }
];

interface HeroProps {
  currentIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Hero({ currentIndex, onPrevious, onNext }: HeroProps) {
  // Get the two images to display (current pair)
  const getVisibleImages = () => {
    const image1 = productImages[currentIndex % productImages.length];
    const image2 = productImages[(currentIndex + 1) % productImages.length];
    return [image1, image2];
  };

  const [image1, image2] = getVisibleImages();

  const renderProductImage = (product: typeof productImages[0], index: number) => {
    // White background containers with thin white borders (as shown in the image)
    // Responsive dimensions with landscape/rectangular aspect ratio
    // Desktop: ~600×400px, Tablet: ~400×300px, Mobile: ~300×200px
    return (
      <div key={product.id} className="w-[300px] md:w-[400px] lg:w-[600px] aspect-[3/2] bg-white border border-gray-200 flex items-center justify-center overflow-hidden relative max-w-full shadow-sm">
        <img
          src={product.src}
          alt={product.alt}
          className="w-full h-full object-cover"
        />
      </div>
    );
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-24 py-0 flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-8 lg:gap-12 min-h-[calc(100vh-120px)]">
      {/* Right Side - Product Images Carousel */}
      {/* Positioned next to NEW COLLECTION, aligned vertically with it */}
      {/* Responsive: Mobile 600×400px, Tablet 800×533px, Desktop 1200×800px total (landscape) */}
      <div className="w-full lg:w-auto flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-center lg:justify-start lg:pl-12 lg:absolute lg:top-[408px] lg:right-8">
        {renderProductImage(image1, 0)}
        {renderProductImage(image2, 1)}
      </div>
    </div>
  );
}
