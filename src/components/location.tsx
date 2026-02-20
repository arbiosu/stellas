'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const HOURS_DATA = [
  { day: 'Monday', shortDay: 'Mon', hours: 'Closed', isClosed: true },
  { day: 'Tuesday', shortDay: 'Tue', hours: '11AM - 9PM', isClosed: false },
  { day: 'Wednesday', shortDay: 'Wed', hours: '11AM - 9PM', isClosed: false },
  { day: 'Thursday', shortDay: 'Thu', hours: '11AM - 9PM', isClosed: false },
  { day: 'Friday', shortDay: 'Fri', hours: '11AM - 9PM', isClosed: false },
  { day: 'Saturday', shortDay: 'Sat', hours: '11AM - 9PM', isClosed: false },
  { day: 'Sunday', shortDay: 'Sun', hours: '12PM - 9PM', isClosed: false },
];

function getCurrentDayIndex() {
  const today = new Date().getDay();
  return today === 0 ? 6 : today - 1;
}

function HoursCard() {
  const [currentDayIndex, setCurrentDayIndex] = useState(getCurrentDayIndex());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentDay = getCurrentDayIndex();
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
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className='border-border/50 bg-card h-full shadow-sm'>
      <CardContent className='p-6 lg:p-8'>
        <div className='mb-6 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='bg-secondary flex h-10 w-10 items-center justify-center rounded-full'>
              <Clock className='text-foreground h-5 w-5' />
            </div>
            <h3 className='text-foreground font-serif text-2xl font-semibold tracking-tight'>
              Hours
            </h3>
          </div>
          <Badge
            variant={isOpen ? 'default' : 'secondary'}
            className={
              isOpen
                ? 'bg-emerald-800 text-emerald-50'
                : 'bg-secondary text-muted-foreground'
            }
          >
            <span
              className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${
                isOpen
                  ? 'animate-pulse bg-emerald-300'
                  : 'bg-muted-foreground/50'
              }`}
            />
            {isOpen ? 'Open Now' : 'Closed'}
          </Badge>
        </div>

        <div className='space-y-0'>
          {HOURS_DATA.map((item, index) => {
            const isToday = index === currentDayIndex;
            return (
              <React.Fragment key={item.day}>
                <div
                  className={`flex items-center justify-between rounded-lg px-3 py-3 transition-colors ${
                    isToday ? 'bg-accent/10' : 'hover:bg-secondary/50'
                  }`}
                >
                  <div className='flex items-center gap-3'>
                    <span
                      className={`text-sm font-medium ${
                        isToday ? 'text-primary' : 'text-foreground'
                      }`}
                    >
                      {item.day}
                    </span>
                    {isToday && (
                      <Badge
                        variant='outline'
                        className='border-accent/30 text-primary px-1.5 py-0 text-[10px] font-medium'
                      >
                        Today
                      </Badge>
                    )}
                  </div>
                  <span
                    className={`text-sm tabular-nums ${
                      item.isClosed
                        ? 'text-muted-foreground/60'
                        : isToday
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground'
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
                {index < HOURS_DATA.length - 1 && (
                  <Separator className='opacity-50' />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

function LocationCard() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className='border-border/50 bg-card h-full shadow-sm'>
      <CardContent className='flex h-full flex-col p-6 lg:p-8'>
        <div className='mb-6 flex items-center gap-3'>
          <div className='bg-secondary flex h-10 w-10 items-center justify-center rounded-full'>
            <MapPin className='text-foreground h-5 w-5' />
          </div>
          <h3 className='text-foreground font-serif text-2xl font-semibold tracking-tight'>
            Location
          </h3>
        </div>

        <div className='relative mb-6 flex-1 overflow-hidden rounded-xl'>
          <div
            className={`bg-secondary absolute inset-0 z-10 transition-opacity duration-500 ${
              imageLoaded ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            <div className='flex h-full items-center justify-center'>
              <div className='border-foreground/20 border-t-foreground/60 h-8 w-8 animate-spin rounded-full border-2' />
            </div>
          </div>

          <Image
            src='/stella-sign.jpeg'
            alt='Front view of Stella Pizza in Cherry Hill, New Jersey'
            width={600}
            height={400}
            className={`h-full min-h-[280px] w-full object-cover transition-all duration-700 ${
              imageLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />

          <div className='from-primary/60 via-primary/10 absolute inset-0 bg-gradient-to-t to-transparent' />

          <div className='absolute right-4 bottom-4 left-4'>
            <p className='text-primary-foreground/90 text-sm font-medium'>
              Authentic Italian Pizza
            </p>
            <p className='text-primary-foreground/60 text-xs'>
              Family Owned &middot; Est. 2005
            </p>
          </div>
        </div>

        <Link
          href='https://maps.app.goo.gl/gEL6CG4fFpFyRLwW6'
          target='_blank'
          rel='noopener noreferrer'
          prefetch={false}
          className='group border-border bg-secondary/50 hover:border-accent/30 hover:bg-secondary flex items-center justify-between rounded-xl border px-5 py-4 transition-all'
        >
          <div>
            <p className='text-foreground text-sm font-medium'>
              219 Haddonfield-Berlin Rd.
            </p>
            <p className='text-muted-foreground text-sm'>
              Cherry Hill, NJ 08034
            </p>
          </div>
          <div className='bg-accent text-accent-foreground flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:scale-110'>
            <ArrowUpRight className='h-4 w-4' />
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}

export default function LocationSection() {
  return (
    <section
      id='location'
      className='bg-background relative flex min-h-screen flex-col justify-center py-24'
    >
      <div className='container mx-auto max-w-5xl px-4'>
        <div className='mb-14 text-center'>
          <p className='mb-3 text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase'>
            Come See Us
          </p>
          <h2 className='text-foreground font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl'>
            Visit Stella
          </h2>
          <p className='text-muted-foreground mx-auto mt-4 max-w-md text-base leading-relaxed'>
            Experience authentic Italian pizza crafted with love in the heart of
            Cherry Hill.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <HoursCard />
          <LocationCard />
        </div>
      </div>
    </section>
  );
}
