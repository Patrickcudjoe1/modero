'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function FashionApproach() {
  const [isVisible, setIsVisible] = useState(false);
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

  // Placeholder images - user can replace with actual images
  // Each image has different height and vertical alignment for staggered effect
  const imagePanels = [
    {
      id: 1,
      src: '/MOD-35.jpg',
      alt: 'Fashion model in gray coat',
      height: 'h-[500px]',
      alignment: 'self-start'
    },
    {
      id: 2,
      src: '/MOD-45.jpg',
      alt: 'Fashion model in rust jacket',
      height: 'h-[550px]',
      alignment: 'self-end'
    },
    {
      id: 3,
      src: '/MOD-41.jpg',
      alt: 'Fashion detail - cream trousers',
      height: 'h-[480px]',
      alignment: 'self-start'
    },
    {
      id: 4,
      src: '/MOD-23.jpg',
      alt: 'Fashion flat lay - white sweatshirt',
      height: 'h-[520px]',
      alignment: 'self-center'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`w-full px-4 md:px-8 lg:px-16 py-16 bg-gray-50 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black uppercase tracking-wide mb-6">
            OUR APPROACH TO FASHION DESIGN
          </h2>
          <p className="text-base md:text-lg text-black font-normal max-w-4xl mx-auto leading-relaxed">
            at elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quelity exqulsite finish
          </p>
        </div>

        {/* Image Panels - Grid on mobile, Horizontal Row on desktop */}
        <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:gap-6 lg:gap-8 md:justify-center md:items-end">
          {imagePanels.map((panel) => (
            <div 
              key={panel.id}
              className={`relative bg-white aspect-square md:flex-1 md:max-w-[300px] md:h-[500px] lg:h-[550px] ${panel.alignment} overflow-hidden group`}
            >
              <img
                src={panel.src}
                alt={panel.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

