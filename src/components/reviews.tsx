'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

const mockReviews: Review[] = [
  {
    id: '1',
    name: 'Sheri Zachary',
    rating: 5,
    text: "Our go-to pizzeria—hands down! The crust is perfect, the sauce is rich and flavorful, and the cheese (or whatever toppings you add) takes it over the top. The sandwiches are fresh, the wings are crave-worthy, and they have a nice selection of salads. Everything on the menu hits the mark. You should try them out - you won't be disappointed!.",
    date: '3 weeks ago',
    avatar: 'SZ',
  },
  {
    id: '2',
    name: 'Joe Polimeni',
    rating: 5,
    text: "I would give this place 10 🌟. Been coming here for over 4 years. Pizza is the best I believe in South Jersey. It ranks up to the best pizza joints down the shore. Service is top notch and prices and pretty reasonable. They do deliver but if you are out of your area, do a take out. It's worth it. They also have seating as well. Steeaalaaaaaa (Seinfeld) You will not be disappointed! Give me a like if you tried.",
    date: '3 weeks ago',
    avatar: 'ER',
  },
  {
    id: '3',
    name: 'Amanda Arrigo',
    rating: 5,
    text: 'Their pizza is fresh and crunchy. It’s so flavorful. Their wings have amazing sauce and big. Absolutely the best place to get pizza and wings.',
    date: '1 year ago',
    avatar: 'AA',
  },
  {
    id: '4',
    name: 'Bob Paz',
    rating: 5,
    text: "Their Grandma's pizza is incredible. Nice thin crust! Also, best take out french fries cause they use a box that allows the steam out! Not soggy!!",
    date: '2 years ago',
    avatar: 'BP',
  },
  {
    id: '5',
    name: 'Karina Martinez',
    rating: 5,
    text: 'My husband and our two kids love coming to Stella’s, the food is always great! We always feel welcome when we step in the building, everyone who work here is polite and treat their guest excellent. Definitely recommend!!',
    date: '3 years ago',
    avatar: 'KM',
  },
];

const GoogleReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockReviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 animate-pulse fill-current ${
          i < rating ? 'text-amber-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className='font-lora mx-auto w-full max-w-4xl px-4 py-8'>
      {/* Header */}
      <div className='mb-8 text-center'>
        <h2 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl'>
          What{' '}
          <span className='bg-gradient-to-r from-gray-900 via-red-700 to-red-800 bg-clip-text text-transparent'>
            Our Customers Say
          </span>
        </h2>
        <div className='mb-4 flex items-center justify-center gap-2'>
          <div className='flex items-center gap-1'>{renderStars(5)}</div>
          <span className='text-lg font-semibold text-gray-700'>
            4.2 out of 5
          </span>
          <span className='text-gray-500'>• Based on {130} reviews</span>
        </div>
        <div className='mx-auto h-1 w-20 rounded-full bg-red-500'></div>
      </div>

      {/* Carousel Container */}
      <div className='relative'>
        {/* Main Review Display */}
        <div className='relative min-h-[300px] overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg'>
          {/* Background Quote Icon */}
          <Quote className='absolute top-4 right-4 h-12 w-12 rotate-12 transform text-red-100' />

          <div className='relative z-10'>
            {/* User Info */}
            <div className='mb-6 flex items-center gap-4'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-lg font-semibold text-white'>
                {mockReviews[currentIndex].avatar}
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>
                  {mockReviews[currentIndex].name}
                </h3>
                <p className='text-sm text-gray-500'>
                  {mockReviews[currentIndex].date}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className='mb-4 flex items-center gap-2'>
              <div className='flex gap-1'>
                {renderStars(mockReviews[currentIndex].rating)}
              </div>
              <span className='text-sm font-medium text-gray-600'>
                {mockReviews[currentIndex].rating}/5
              </span>
            </div>

            {/* Review Text */}
            <p className='text-lg leading-relaxed text-gray-700'>
              "{mockReviews[currentIndex].text}"
            </p>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className='mt-6 flex justify-center gap-2'>
        {mockReviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'scale-110 bg-red-500'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>

      {/* Google Reviews Badge */}
      <div className='mt-8 flex items-center justify-center'>
        <div className='rounded-lg border border-gray-200 bg-gray-50 px-4 py-2'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              <div className='flex h-4 w-4 items-center justify-center rounded-sm bg-blue-500'>
                <span className='text-xs font-bold text-white'>G</span>
              </div>
              <span className='text-sm font-medium text-gray-700'>
                Google Reviews
              </span>
            </div>
            <div className='h-4 w-px bg-gray-300'></div>
            <span className='text-xs text-gray-500'>Verified reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsCarousel;
