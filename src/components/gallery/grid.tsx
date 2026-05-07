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
            animationDelay: `${index * 20}ms`,
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
              className='h-auto w-full object-cover'
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              unoptimized
            />
            <div className='absolute inset-0 transition-colors duration-300 group-hover:bg-black/40' />
            <div className='absolute right-0 bottom-0 left-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0'>
              <div className='flex items-center justify-between px-3 py-2'>
                <div>
                  <p className='font-serif text-xl font-bold text-white text-shadow-black'>
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
