'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SpecialCardProps {
  number: string;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  featured?: boolean;
}

export function SpecialCard({
  number,
  title,
  description,
  price,
  imageSrc,
  imageAlt,
  featured = false,
}: SpecialCardProps) {
  return (
    <div
      className={cn(
        'group border-border bg-card hover:border-primary/40 relative flex flex-col overflow-hidden rounded-xl border transition-all duration-500 hover:shadow-[0_0_40px_rgba(180,140,80,0.08)]',
        featured && 'lg:col-span-1'
      )}
    >
      <div className='relative aspect-[4/3] overflow-hidden'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className='object-cover transition-transform duration-700 group-hover:scale-105'
          sizes='(max-width: 768px) 100vw, 33vw'
          unoptimized
        />

        <span className='text-foreground/20 absolute top-4 left-4 font-serif text-5xl leading-none font-bold'>
          {number}
        </span>
      </div>

      <div className='flex flex-1 flex-col justify-between gap-4 p-5'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-foreground font-serif text-xl leading-tight font-semibold text-balance'>
            {title}
          </h3>
          <p className='text-muted-foreground text-sm leading-relaxed'>
            {description}
          </p>
        </div>

        <div className='border-border flex items-center justify-between border-t pt-4'>
          <span className='text-primary font-serif text-2xl font-bold'>
            {price}
          </span>
        </div>
      </div>
    </div>
  );
}
