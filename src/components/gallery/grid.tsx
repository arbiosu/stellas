'use client';

import Image from 'next/image';
import { type GalleryImage } from '@/lib/gallery';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

export function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className='columns-1 gap-4 sm:columns-2 lg:columns-3'>
      {images.map((image, index) => (
        <div
          key={image.id}
          className={cn(
            'group mb-4 cursor-pointer break-inside-avoid',
            'animate-in fade-in slide-in-from-bottom-4'
          )}
          style={{
            animationDelay: `${index * 60}ms`,
            animationFillMode: 'both',
            animationDuration: '400ms',
          }}
          onClick={() => onImageClick(image)}
          role='button'
          tabIndex={0}
          aria-label={`View ${image.title}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onImageClick(image);
            }
          }}
        >
          <div className='bg-muted relative overflow-hidden rounded-lg'>
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={
                image.aspect === 'portrait'
                  ? 800
                  : image.aspect === 'landscape'
                    ? 400
                    : 600
              }
              className='h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105'
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              unoptimized
            />
            <div className='bg-foreground/0 group-hover:bg-foreground/10 absolute inset-0 transition-colors duration-300' />
            <div className='absolute right-0 bottom-0 left-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0'>
              <div className='bg-card/90 border-border flex items-center justify-between rounded-md border px-3 py-2 backdrop-blur-sm'>
                <div>
                  <p className='text-card-foreground text-sm font-medium'>
                    {image.title}
                  </p>
                </div>
                <Badge variant='secondary' className='text-[10px] capitalize'>
                  {image.category}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
