'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { ExternalLink, MapPin, Clock } from 'lucide-react';

const HOURS_DATA = [
  { day: 'Monday', hours: 'Closed', isClosed: true },
  { day: 'Tuesday', hours: '11AM - 9PM', isClosed: false },
  { day: 'Wednesday', hours: '11AM - 9PM', isClosed: false },
  { day: 'Thursday', hours: '11AM - 9PM', isClosed: false },
  { day: 'Friday', hours: '11AM - 9PM', isClosed: false },
  { day: 'Saturday', hours: '11AM - 9PM', isClosed: false },
  { day: 'Sunday', hours: '12PM - 9PM', isClosed: false },
];

function getCurrentDayStatus() {
  const today = new Date().getDay();
  const dayIndex = today === 0 ? 6 : today - 1;
  return dayIndex;
}

function HoursCard() {
  const [currentDayIndex, setCurrentDayIndex] = useState(getCurrentDayStatus());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentDay = getCurrentDayStatus();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      setCurrentDayIndex(currentDay);

      if (HOURS_DATA[currentDay].isClosed) {
        setIsOpen(false);
      } else {
        setIsOpen(
          (currentHour >= 11 && currentHour < 20) ||
            (currentHour === 20 && currentMinute <= 45)
        );
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className='relative h-full overflow-hidden border-2 border-red-100 bg-gradient-to-br from-white via-red-50 to-rose-50 shadow-2xl transition-all duration-500 hover:shadow-red-500/25'>
      {/* Animated background elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-0 left-0 h-72 w-72 animate-pulse rounded-full bg-red-500 blur-3xl filter'></div>
        <div className='absolute right-0 bottom-0 h-96 w-96 animate-pulse rounded-full bg-rose-400 blur-3xl filter delay-1000'></div>
      </div>

      <CardHeader className='relative z-10 pb-6 text-center'>
        <div className='mb-2 flex items-center justify-center gap-3'>
          <Clock className='h-8 w-8 animate-pulse text-red-600' />
          <CardTitle className='bg-gradient-to-r from-gray-800 via-red-700 to-red-800 bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
            Hours
          </CardTitle>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <div
            className={`h-3 w-3 rounded-full ${isOpen ? 'animate-pulse bg-green-500' : 'bg-red-500'}`}
          ></div>
          <span
            className={`text-sm font-medium ${isOpen ? 'text-green-600' : 'text-red-600'}`}
          >
            {isOpen ? 'Open Now' : 'Closed'}
          </span>
        </div>
      </CardHeader>

      <CardContent className='relative z-10 p-0'>
        <div className='space-y-1'>
          {HOURS_DATA.map((item, index) => (
            <div
              key={item.day}
              className={`group relative mx-4 rounded-lg px-6 py-4 transition-all duration-300 ${
                index === currentDayIndex
                  ? 'border-l-4 border-red-500 bg-gradient-to-r from-red-100 to-rose-100 shadow-lg'
                  : 'hover:bg-red-50/50 hover:backdrop-blur-sm'
              }`}
            >
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      index === currentDayIndex
                        ? 'text-red-800'
                        : 'text-gray-700 group-hover:text-red-700'
                    }`}
                  >
                    {item.day}
                  </div>
                  {index === currentDayIndex && (
                    <span className='inline-flex animate-pulse items-center rounded-full border border-red-200 bg-red-100 px-3 py-1 text-xs font-medium text-red-800'>
                      Today
                    </span>
                  )}
                </div>
                <div
                  className={`text-lg font-bold transition-colors duration-300 ${
                    item.isClosed
                      ? 'text-red-600'
                      : index === currentDayIndex
                        ? 'text-red-800'
                        : 'text-gray-600 group-hover:text-red-600'
                  }`}
                >
                  {item.hours}
                </div>
              </div>

              {/* Subtle hover effect */}
              <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/0 to-rose-500/0 transition-all duration-300 group-hover:from-red-500/5 group-hover:to-rose-500/5'></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function LocationCard() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className='relative h-full overflow-hidden border-2 border-gray-200 bg-gradient-to-br from-white via-gray-50 to-slate-50 shadow-2xl transition-all duration-500 hover:shadow-red-500/25'>
      {/* Animated background elements */}
      <div className='absolute inset-0 opacity-15'>
        <div className='absolute top-0 right-0 h-80 w-80 animate-pulse rounded-full bg-red-400 blur-3xl filter delay-500'></div>
        <div className='absolute bottom-0 left-0 h-96 w-96 animate-pulse rounded-full bg-rose-300 blur-3xl filter delay-1500'></div>
      </div>

      <CardHeader className='relative z-10 pb-6 text-center'>
        <div className='mb-4 flex items-center justify-center gap-3'>
          <MapPin className='h-8 w-8 animate-bounce text-red-600' />
          <CardTitle className='bg-gradient-to-r from-gray-800 via-red-700 to-red-800 bg-clip-text text-4xl font-bold text-transparent md:text-5xl'>
            Location
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className='relative z-10 flex flex-1 flex-col p-6'>
        <div className='flex flex-col space-y-6'>
          {/* Address with enhanced styling */}
          <div className='group flex items-center justify-center'>
            <Link
              href='https://maps.app.goo.gl/gEL6CG4fFpFyRLwW6'
              target='_blank'
              rel='noopener noreferrer'
              prefetch={false}
              className='group flex items-center gap-3 rounded-lg border border-red-200 bg-white/70 px-6 py-4 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-red-400 hover:bg-white/90 hover:shadow-lg'
            >
              <MapPin className='h-5 w-5 text-red-600 group-hover:animate-bounce' />
              <span className='text-lg font-medium text-gray-700 group-hover:text-red-700'>
                219 Haddonfield-Berlin Rd., Cherry Hill, NJ 08034
              </span>
              <ExternalLink className='h-4 w-4 text-red-600 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100' />
            </Link>
          </div>

          {/* Restaurant Image with enhanced effects */}
          <div className='relative min-h-[300px] flex-1 overflow-hidden rounded-2xl border-2 border-red-200 shadow-2xl'>
            <div className='group relative h-full'>
              <div
                className={`absolute inset-0 bg-gradient-to-br from-red-100/50 to-rose-100/50 transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
              >
                <div className='flex h-full items-center justify-center'>
                  <div className='h-12 w-12 animate-spin rounded-full border-4 border-red-500 border-t-transparent'></div>
                </div>
              </div>

              <Image
                src='/stella-sign.jpeg'
                alt='Front view of Stella Pizza in Cherry Hill New Jersey'
                width={800}
                height={600}
                className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />

              {/* Overlay effects */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
              <div className='absolute right-4 bottom-4 left-4 translate-y-full transform rounded-lg bg-white/80 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0'>
                <p className='font-medium text-gray-800'>
                  Authentic Italian Pizza • Family Owned Since 2005
                </p>
              </div>

              {/* Floating action button */}
              <div className='absolute top-4 right-4 -translate-y-2 transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                <button className='rounded-full bg-red-500 p-3 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-600'>
                  <ExternalLink className='h-5 w-5' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LocationSection() {
  return (
    <section
      id='location'
      className='relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10'
    >
      {/* Animated background elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-red-400 blur-3xl filter'></div>
        <div className='absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-rose-300 blur-3xl filter delay-1000'></div>
        <div className='absolute top-3/4 left-3/4 h-64 w-64 animate-pulse rounded-full bg-red-500 blur-3xl filter delay-2000'></div>
      </div>

      {/* Main content */}
      <div className='font-lora relative z-10 container mx-auto max-w-7xl px-6'>
        {/* Section header */}
        <div className='mb-16 text-center'>
          <h3 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl'>
            Visit{' '}
            <span className='bg-gradient-to-r from-gray-900 via-red-700 to-red-800 bg-clip-text text-transparent'>
              Stella
            </span>
          </h3>
          <p className='mx-auto max-w-2xl text-xl text-gray-600'>
            Experience authentic Italian flavors in the heart of Cherry Hill
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <div className='flex'>
            <HoursCard />
          </div>
          <div className='flex'>
            <LocationCard />
          </div>
        </div>
      </div>
    </section>
  );
}
