'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatar?: string;
}

const selectedReviews: Review[] = [
  {
    id: '1',
    name: 'Joe Polimeni',
    rating: 5,
    text: "I would give this place 10 🌟. Been coming here for over 4 years. Pizza is the best I believe in South Jersey. It ranks up to the best pizza joints down the shore. Service is top notch and prices and pretty reasonable. They do deliver but if you are out of your area, do a take out. It's worth it. They also have seating as well. Steeaalaaaaaa (Seinfeld) You will not be disappointed! Give me a like if you tried.",
    avatar: 'JP',
  },
  {
    id: '2',
    name: 'Sheri Zachary',
    rating: 5,
    text: "Our go-to pizzeria—hands down! The crust is perfect, the sauce is rich and flavorful, and the cheese (or whatever toppings you add) takes it over the top. The sandwiches are fresh, the wings are crave-worthy, and they have a nice selection of salads. Everything on the menu hits the mark. You should try them out - you won't be disappointed!.",
    avatar: 'SZ',
  },
  {
    id: '3',
    name: 'Amanda Arrigo',
    rating: 5,
    text: 'Their pizza is fresh and crunchy. It’s so flavorful. Their wings have amazing sauce and big. Absolutely the best place to get pizza and wings.',
    avatar: 'AA',
  },
  {
    id: '4',
    name: 'Bob Paz',
    rating: 5,
    text: "Their Grandma's pizza is incredible. Nice thin crust! Also, best take out french fries cause they use a box that allows the steam out! Not soggy!!",
    avatar: 'BP',
  },
  {
    id: '5',
    name: 'Karina Martinez',
    rating: 5,
    text: 'My husband and our two kids love coming to Stella’s, the food is always great! We always feel welcome when we step in the building, everyone who work here is polite and treat their guest excellent. Definitely recommend!!',
    avatar: 'KM',
  },
  {
    id: '6',
    name: 'Greg Harmon',
    rating: 5,
    text: 'I have been coming for a very long time. They are good guys and always make it consistent and delicious. Over ten years of ordering we have had maybe two issues but both times they corrected the issue right away. I will be ordering the chicken tenders with extra honey mustard until they stop selling them 😊',
    avatar: 'GH',
  },
];

const GoogleReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % selectedReviews.length);
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
    <div className='font-lora mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4'>
      <div className='mb-8 text-center'>
        <h2 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
          What Our Customers Say
        </h2>
        <div className='mb-4 flex items-center justify-center gap-2'>
          <div className='flex items-center gap-1'>{renderStars(5)}</div>
          <span className='text-lg font-semibold text-gray-700'>
            4.2 out of 5
          </span>
          <span className='text-gray-500'>• Based on 133 reviews</span>
        </div>
        <div className='mx-auto h-1 w-20 rounded-full bg-red-700'></div>
      </div>

      <div className='relative'>
        <div className='relative min-h-[500px] overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-lg lg:min-h-[300px]'>
          <Quote className='absolute top-4 right-4 h-12 w-12 rotate-12 transform text-red-100' />

          <div className='relative z-10'>
            <div className='mb-6 flex items-center gap-4'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-lg font-semibold text-white'>
                {selectedReviews[currentIndex].avatar}
              </div>
              <div>
                <p className='text-lg font-semibold text-gray-900'>
                  {selectedReviews[currentIndex].name}
                </p>
              </div>
            </div>

            <div className='mb-4 flex items-center gap-2'>
              <div className='flex gap-1'>
                {renderStars(selectedReviews[currentIndex].rating)}
              </div>
              <span className='text-sm font-medium text-gray-600'>
                {selectedReviews[currentIndex].rating}/5
              </span>
            </div>

            {/* Review Text */}
            <p className='text-lg leading-relaxed text-gray-700'>
              "{selectedReviews[currentIndex].text}"
            </p>
          </div>
        </div>
      </div>

      <div className='mt-6 flex justify-center gap-2'>
        {selectedReviews.map((_, index) => (
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
