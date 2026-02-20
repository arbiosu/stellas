'use client';

import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type GalleryImage } from '@/lib/gallery';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface GalleryLightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function GalleryLightbox({
  image,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: GalleryLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && hasPrevious) onPrevious();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    },
    [onPrevious, onNext, hasPrevious, hasNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Dialog open={!!image} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className='bg-card border-border w-[calc(100vw-2rem)] max-w-5xl gap-0 overflow-hidden p-0'
        showCloseButton
      >
        <DialogTitle className='sr-only'>
          {image?.title ?? 'Gallery Image'}
        </DialogTitle>
        <DialogDescription className='sr-only'>
          {image?.alt ?? 'A photo from the gallery'}
        </DialogDescription>

        {image && (
          <>
            <div className='bg-background relative flex max-h-[75vh] min-h-[40vh] items-center justify-center'>
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                className='h-auto max-h-[75vh] w-auto object-contain'
                priority
              />

              {hasPrevious && (
                <Button
                  variant='secondary'
                  size='icon'
                  onClick={onPrevious}
                  className='absolute top-1/2 left-3 -translate-y-1/2 rounded-full'
                  aria-label='Previous image'
                >
                  <ChevronLeft className='size-5' />
                </Button>
              )}

              {hasNext && (
                <Button
                  variant='secondary'
                  size='icon'
                  onClick={onNext}
                  className='absolute top-1/2 right-3 -translate-y-1/2 rounded-full'
                  aria-label='Next image'
                >
                  <ChevronRight className='size-5' />
                </Button>
              )}
            </div>

            <div className='border-border flex items-center justify-between border-t p-4'>
              <div>
                <p className='text-card-foreground text-sm font-medium'>
                  {image.title}
                </p>
                <p className='text-muted-foreground mt-0.5 text-xs'>
                  {image.alt}
                </p>
              </div>
              <Badge variant='outline' className='capitalize'>
                {image.category}
              </Badge>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
