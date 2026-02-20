'use client';

import { useMemo, useState } from 'react';
import { type Category, type GalleryImage, galleryImages } from '@/lib/gallery';
import { GalleryFilters } from './filters';
import { GalleryGrid } from './grid';
import { GalleryLightbox } from './lightbox';
import { Separator } from '@/components/ui/separator';

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const counts = useMemo(() => {
    const c: Record<Category, number> = {
      all: galleryImages.length,
      pizza: 0,
      appetizers: 0,
      salads: 0,
      steaks: 0,
      burgers: 0,
      pasta: 0,
      strombolis: 0,
      paninis: 0,
      hoagies: 0,
      atmosphere: 0,
      wraps: 0,
      subs: 0,
    };
    for (const img of galleryImages) {
      c[img.category]++;
    }
    return c;
  }, []);

  const lightboxIndex = lightboxImage
    ? filteredImages.findIndex((img) => img.id === lightboxImage.id)
    : -1;

  const handlePrevious = () => {
    if (lightboxIndex > 0) {
      setLightboxImage(filteredImages[lightboxIndex - 1]);
    }
  };

  const handleNext = () => {
    if (lightboxIndex < filteredImages.length - 1) {
      setLightboxImage(filteredImages[lightboxIndex + 1]);
    }
  };

  return (
    <div className='bg-background min-h-screen'>
      <header className='mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8'>
        <h2 className='text-foreground font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl'>
          Menu Gallery
        </h2>
        <p className='text-muted-foreground mt-3 max-w-2xl text-lg leading-relaxed text-pretty'>
          A curated collection of our favorites at Stella.
        </p>
      </header>

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Separator />
      </div>

      <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='mb-8'>
          <GalleryFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            counts={counts}
          />
        </div>

        {filteredImages.length > 0 ? (
          <GalleryGrid
            key={activeCategory}
            images={filteredImages}
            onImageClick={setLightboxImage}
          />
        ) : (
          <div className='flex items-center justify-center py-24'>
            <p className='text-muted-foreground text-lg'>
              No images in this category yet.
            </p>
          </div>
        )}
      </main>

      <GalleryLightbox
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={lightboxIndex > 0}
        hasNext={lightboxIndex < filteredImages.length - 1}
      />
    </div>
  );
}
