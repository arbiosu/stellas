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
          'relative overflow-hidden border-0 bg-white p-0',
          'transition-all duration-500 ease-out',
          'hover:shadow-xl hover:shadow-black/5',
          'will-change-transform'
        )}
      >
        <CardContent className='relative m-0 h-full p-0'>
          <div className='relative -m-0 h-64 w-full overflow-hidden md:h-72 lg:h-80'>
            <Image
              src={imgUrl}
              alt={label}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className={cn(
                'object-cover object-center',
                'transition-transform duration-700 ease-out',
                'will-change-transform'
              )}
              priority={false}
              placeholder='blur'
              blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
            />

            <div className='absolute top-4 left-4'>
              <Badge
                variant='secondary'
                className={cn(
                  'bg-white/95 px-3 py-1.5 text-lg font-bold text-gray-900',
                  'border border-white/30 backdrop-blur-md',
                  'transition-all duration-300 ease-out',
                  'group-hover:bg-red-700',
                  'group-hover:border-transparent group-hover:text-white',
                  'shadow-lg group-hover:shadow-xl'
                )}
              >
                ${price}
              </Badge>
            </div>
          </div>

          <div className='relative p-6 lg:p-8'>
            <h3
              className={cn(
                'text-xl leading-tight font-bold text-gray-900',
                'transition-colors duration-300 ease-out md:text-2xl lg:text-3xl',
                'group-hover:text-red-600'
              )}
            >
              {label}
            </h3>

            <div
              className={cn(
                'mt-4 h-1 w-0 rounded-full bg-gradient-to-r from-gray-900 to-red-600',
                'transition-all duration-500 ease-out',
                'group-hover:w-16'
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
    <div className='font-lora mx-auto w-full max-w-7xl p-4 text-center'>
      <h3 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
        Everyday Specials{' '}
        <span className='bg-gradient-to-r from-gray-900 via-red-700 to-red-800 bg-clip-text text-transparent'>
          at Stella
        </span>
      </h3>
      <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600 lg:text-2xl'>
        Available everyday,{' '}
        <span className='font-extrabold underline decoration-red-600 decoration-2 underline-offset-4'>
          walk-in only!
        </span>
      </p>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'>
        {cards.map((card, index) => (
          <SpecialsCards key={index} {...card} index={index} />
        ))}
      </div>
    </div>
  );
}
