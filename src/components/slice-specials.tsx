import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SpecialsProps {
  label: string;
  imgUrl: string;
  price: string;
}

function SpecialsCards({
  label,
  imgUrl,
  price,
}: SpecialsProps & { index: number }) {
  return (
    <div className='group block'>
      <Card
        className={cn(
          'relative overflow-hidden border-0 bg-white dark:bg-gray-900',
          'transition-all duration-500 ease-out',
          'hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/25',
          'group-hover:-translate-y-1 group-hover:scale-[1.03]',
          'will-change-transform'
        )}
      >
        <CardContent className='relative h-full p-0'>
          {/* Image container */}
          <div className='relative aspect-square overflow-hidden'>
            <Image
              src={imgUrl}
              alt={label}
              width={400}
              height={320}
              className={cn(
                'h-full w-full object-cover',
                'transition-transform duration-700 ease-out',
                'group-hover:scale-105',
                'will-change-transform',
                'aspect-square'
              )}
              unoptimized
            />

            {/* Price Badge - positioned over image */}
            <div className='absolute top-4 left-4'>
              <Badge
                variant='secondary'
                className={cn(
                  'bg-white/90 font-semibold text-gray-900',
                  'border border-white/20 backdrop-blur-sm',
                  'transition-all duration-300 ease-out',
                  'group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-red-600',
                  'group-hover:border-transparent group-hover:text-white',
                  'shadow-sm group-hover:shadow-md'
                )}
              >
                ${price}
              </Badge>
            </div>

            {/* Subtle overlay that appears on hover */}
            <div
              className={cn(
                'absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent',
                'opacity-0 transition-opacity duration-500 ease-out',
                'group-hover:opacity-100'
              )}
            />

            {/* Clean shimmer effect */}
            <div
              className={cn(
                'absolute inset-0 -translate-x-full',
                'bg-gradient-to-r from-transparent via-white/10 to-transparent',
                'transition-transform duration-1000 ease-out',
                'group-hover:translate-x-full'
              )}
            />
          </div>

          {/* Content area */}
          <div className='relative p-6'>
            <h3
              className={cn(
                'text-xl font-bold text-gray-900',
                'transition-colors duration-300 ease-out md:text-2xl',
                'group-hover:text-red-600'
              )}
            >
              {label}
            </h3>

            {/* Subtle indicator line */}
            <div
              className={cn(
                'mt-3 h-0.5 w-0 bg-gradient-to-r from-gray-900 to-red-600',
                'transition-all duration-500 ease-out',
                'group-hover:w-12'
              )}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function SpecialsGrid({ cards }: { cards: SpecialsProps[] }) {
  if (cards.length === 0) {
    return (
      <div className='flex items-center justify-center py-16'>
        <div className='text-center'>
          <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800'>
            <svg
              className='h-8 w-8 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0H4m16 0l-2-2m-2 2l2 2M4 13l2-2m0 0l2 2'
              />
            </svg>
          </div>
          <p className='text-xl text-gray-500 dark:text-gray-400'>
            No items to display
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='font-lora mx-auto w-full max-w-6xl p-4 text-center'>
      <h3 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl'>
        Everyday Specials{' '}
        <span className='bg-gradient-to-r from-gray-900 via-red-700 to-red-800 bg-clip-text text-transparent'>
          at Stella
        </span>
      </h3>
      <p className='mx-auto mb-4 max-w-2xl text-xl text-gray-600'>
        Available everyday,{' '}
        <span className='font-extrabold underline'>walk-in only!</span>
      </p>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {cards.map((card, index) => (
          <SpecialsCards key={index} {...card} index={index} />
        ))}
      </div>
    </div>
  );
}
