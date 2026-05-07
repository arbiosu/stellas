'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function LocationCard() {
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
