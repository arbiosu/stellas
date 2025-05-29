'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const images = [
  {
    src: '/stellas-1.webp',
    alt: 'Restaurant interior with elegant table settings',
  },
  {
    src: '/stellas-2.webp',
    alt: 'Chef preparing a gourmet dish in the kitchen',
  },
  {
    src: '/stellas-3.webp',
    alt: 'Signature dish beautifully plated',
  },
  {
    src: '/stellas-4.webp',
    alt: 'Outdoor patio seating area',
  },
  {
    src: '/stellas-5.webp',
    alt: 'Outdoor patio seating area',
  },
  {
    src: '/stellas-6.webp',
    alt: 'Outdoor patio seating area',
  },
  {
    src: '/stellas-7.webp',
    alt: 'Outdoor patio seating area',
  },
  {
    src: '/stellas-8.webp',
    alt: 'Outdoor patio seating area',
  },
  {
    src: '/stellas-9.webp',
    alt: 'Outdoor patio seating area',
  },
  {
    src: '/stellas-10.webp',
    alt: 'Outdoor patio seating area',
  },
];

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div
      className='relative mx-auto w-full max-w-4xl'
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className='overflow-hidden rounded-lg'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className='w-full flex-shrink-0'>
              <div className='relative h-[300px] w-full md:h-[500px]'>
                <Image
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  fill
                  className='object-cover'
                  priority={index === 0}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant='outline'
        size='icon'
        className='absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white'
        onClick={prevSlide}
        aria-label='Previous image'
      >
        <ChevronLeft className='h-6 w-6' />
      </Button>

      <Button
        variant='outline'
        size='icon'
        className='absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white'
        onClick={nextSlide}
        aria-label='Next image'
      >
        <ChevronRight className='h-6 w-6' />
      </Button>

      <div className='mt-4 flex justify-center gap-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-orange-600' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function PhotosSection() {
  return (
    <section id='photos' className='w-full'>
      <div className='container mx-auto'>
        <PhotoCarousel />
      </div>
    </section>
  );
}
