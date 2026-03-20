'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FacilityImageGalleryProps {
  images: string[];
  name: string;
}

export default function FacilityImageGallery({ images, name }: FacilityImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="mb-4">
      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-2">
        <Image
          src={images[activeIndex]}
          alt={`${name} — photo ${activeIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-1.5 overflow-x-auto">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActiveIndex(i)}
              className={`relative w-14 h-10 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                i === activeIndex ? 'border-forest' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={src}
                alt={`${name} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="56px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
