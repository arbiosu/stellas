'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  initials: string;
}

const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Joe Polimeni',
    rating: 5,
    text: "I would give this place 10 stars. Been coming here for over 4 years. Pizza is the best I believe in South Jersey. It ranks up to the best pizza joints down the shore. Service is top notch and prices are pretty reasonable. They do deliver but if you are out of your area, do a take out. It's worth it.",
    initials: 'JP',
  },
  {
    id: '2',
    name: 'Sheri Zachary',
    rating: 5,
    text: "Our go-to pizzeria — hands down! The crust is perfect, the sauce is rich and flavorful, and the cheese takes it over the top. The sandwiches are fresh, the wings are crave-worthy, and they have a nice selection of salads. Everything on the menu hits the mark. You won't be disappointed!",
    initials: 'SZ',
  },
  {
    id: '3',
    name: 'Amanda Arrigo',
    rating: 5,
    text: "Their pizza is fresh and crunchy. It's so flavorful. Their wings have amazing sauce and are big. Absolutely the best place to get pizza and wings.",
    initials: 'AA',
  },
  {
    id: '4',
    name: 'Bob Paz',
    rating: 5,
    text: "Their Grandma's pizza is incredible. Nice thin crust! Also, best take out french fries cause they use a box that allows the steam out! Not soggy!!",
    initials: 'BP',
  },
  {
    id: '5',
    name: 'Karina Martinez',
    rating: 5,
    text: "My husband and our two kids love coming to Stella's, the food is always great! We always feel welcome when we step in the building, everyone who works here is polite and treats their guests excellent. Definitely recommend!",
    initials: 'KM',
  },
  {
    id: '6',
    name: 'Greg Harmon',
    rating: 5,
    text: 'I have been coming for a very long time. They are good guys and always make it consistent and delicious. Over ten years of ordering we have had maybe two issues but both times they corrected the issue right away.',
    initials: 'GH',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className='flex gap-0.5'>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  isActive,
}: {
  review: Review;
  isActive: boolean;
}) {
  return (
    <Card
      className={`border-border/50 bg-card h-full shadow-sm transition-all duration-500 ${
        isActive ? 'opacity-100' : 'scale-95 opacity-40'
      }`}
    >
      <CardContent className='flex h-full flex-col p-6 lg:p-8'>
        <div className='relative mb-6'>
          <Quote className='text-accent/10 absolute -top-1 -left-1 h-8 w-8' />
          <p className='text-foreground relative z-10 pt-4 text-base leading-relaxed lg:text-lg'>
            &ldquo;{review.text}&rdquo;
          </p>
        </div>

        <div className='border-border/50 mt-auto flex items-center gap-4 border-t pt-5'>
          <div className='bg-accent text-accent-foreground flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold'>
            {review.initials}
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-foreground text-sm font-semibold'>
              {review.name}
            </span>
            <StarRating rating={review.rating} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function GoogleReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(
      ((index % REVIEWS.length) + REVIEWS.length) % REVIEWS.length
    );
  }, []);

  const goNext = useCallback(() => {
    goTo(currentIndex + 1);
    setIsAutoPlaying(false);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(currentIndex - 1);
    setIsAutoPlaying(false);
  }, [currentIndex, goTo]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Compute visible indices for the 3-card layout
  const prevIndex =
    (((currentIndex - 1) % REVIEWS.length) + REVIEWS.length) % REVIEWS.length;
  const nextIndex = (currentIndex + 1) % REVIEWS.length;

  return (
    <section className='relative py-24' id='reviews'>
      <div className='container mx-auto max-w-5xl px-4'>
        {/* Header */}
        <div className='mb-14 text-center'>
          <p className='mb-3 text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase'>
            Testimonials
          </p>
          <h2 className='text-foreground font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl'>
            What Our Guests Say
          </h2>
          <div className='mx-auto mt-6 flex items-center justify-center gap-3'>
            <div className='flex gap-0.5'>
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < 4
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-amber-400/40 text-amber-400/40'
                  }`}
                />
              ))}
            </div>
            <span className='text-foreground text-sm font-medium'>4.2</span>
            <span className='text-muted-foreground text-sm'>
              on Google &middot; 133 reviews
            </span>
          </div>
        </div>

        {/* Desktop: 3-card carousel */}
        <div className='hidden lg:block'>
          <div className='grid grid-cols-3 gap-6'>
            <ReviewCard review={REVIEWS[prevIndex]} isActive={false} />
            <ReviewCard review={REVIEWS[currentIndex]} isActive={true} />
            <ReviewCard review={REVIEWS[nextIndex]} isActive={false} />
          </div>
        </div>

        {/* Mobile: single card */}
        <div className='lg:hidden'>
          <ReviewCard review={REVIEWS[currentIndex]} isActive={true} />
        </div>

        {/* Controls */}
        <div className='mt-8 flex items-center justify-center gap-6'>
          <button
            onClick={goPrev}
            className='border-border bg-card text-foreground hover:bg-secondary flex h-10 w-10 items-center justify-center rounded-full border transition-colors'
            aria-label='Previous review'
          >
            <ChevronLeft className='h-4 w-4' />
          </button>

          <div className='flex items-center gap-2'>
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goTo(index);
                  setIsAutoPlaying(false);
                }}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent h-2.5 w-8'
                    : 'bg-border hover:bg-muted-foreground/40 h-2.5 w-2.5'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className='border-border bg-card text-foreground hover:bg-secondary flex h-10 w-10 items-center justify-center rounded-full border transition-colors'
            aria-label='Next review'
          >
            <ChevronRight className='h-4 w-4' />
          </button>
        </div>

        {/* Google badge */}
        <div className='mt-8 flex justify-center'>
          <Badge
            variant='outline'
            className='border-border bg-card text-muted-foreground gap-2 px-3 py-1.5'
          >
            <svg viewBox='0 0 24 24' className='h-3.5 w-3.5' aria-hidden='true'>
              <path
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z'
                fill='#4285F4'
              />
              <path
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                fill='#34A853'
              />
              <path
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                fill='#FBBC05'
              />
              <path
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                fill='#EA4335'
              />
            </svg>
            <span className='text-xs'>Verified Google Reviews</span>
          </Badge>
        </div>
      </div>
    </section>
  );
}
