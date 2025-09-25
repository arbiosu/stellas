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
    <Card className='relative h-full w-full overflow-hidden border-2'>
      <CardHeader className='relative z-10 pb-6 text-center'>
        <div className='mb-2 flex items-center justify-center gap-3'>
          <Clock className='h-8 w-8 text-red-800' />
          <CardTitle className='text-4xl font-bold md:text-5xl'>
            Hours
          </CardTitle>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <div
            className={`h-3 w-3 rounded-full ${isOpen ? 'animate-pulse bg-green-700' : 'bg-red-700'}`}
          ></div>
          <span
            className={`text-sm font-bold ${isOpen ? 'text-green-700' : 'text-red-700'}`}
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
                    <span className='inline-flex animate-pulse items-center rounded-full border border-red-200 bg-red-100 px-3 py-1 text-xs font-bold text-red-900'>
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
    <Card className='relative h-full w-full overflow-hidden border-2 border-gray-200'>
      <CardHeader className='relative z-10 pb-6 text-center'>
        <div className='mb-4 flex items-center justify-center gap-3'>
          <MapPin className='h-8 w-8 text-red-800' />
          <CardTitle className='text-4xl font-bold md:text-5xl'>
            Location
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className='relative z-10 flex flex-1 flex-col p-6'>
        <div className='flex flex-col space-y-6'>
          <div className='group flex items-center justify-center'>
            <Link
              href='https://maps.app.goo.gl/gEL6CG4fFpFyRLwW6'
              target='_blank'
              rel='noopener noreferrer'
              prefetch={false}
              className='group flex items-center gap-3 rounded-lg border border-red-800 bg-white/70 px-6 py-4 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/90 hover:shadow-lg'
            >
              <span className='text-lg font-medium text-gray-700 group-hover:text-blue-700'>
                219 Haddonfield-Berlin Rd., Cherry Hill, NJ 08034
              </span>
              <ExternalLink className='h-4 w-4 text-red-600 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100' />
            </Link>
          </div>

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
                width={400}
                height={400}
                className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
              <div className='absolute right-4 bottom-4 left-4 translate-y-full transform rounded-lg bg-white/80 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0'>
                <p className='flex justify-center font-medium text-gray-800'>
                  Authentic Italian Pizza • Family Owned • Established 2005
                </p>
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
      className='relative flex min-h-screen flex-col justify-center overflow-hidden'
    >
      <div className='font-lora relative z-10 container mx-auto max-w-7xl px-2'>
        <div className='mb-16 text-center'>
          <h3 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
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
