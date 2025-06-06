import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';

export default function BentoGridGallery() {
  const images = [
    {
      src: '/stella-pepperoni.jpeg',
      alt: 'Thin crust pepperoni pizza, Stella Pizza Cherry Hill NJ',
      title: 'Pepperoni Pizza',
      category: 'Pizza',
      className: 'aspect-square',
    },
    {
      src: '/stella-grandma.jpeg',
      alt: 'Thin crust Grandma pizza, Stella Pizza Cherry Hill NJ',
      title: 'Grandma Pizza',
      category: 'Square Pizza',
      className: 'aspect-square',
    },
    {
      src: '/stella-plain.jpeg',
      alt: 'Large Plain Cheese Pizza, Stella Pizza Cherry Hill NJ',
      title: 'Plain Cheese',
      category: 'Pizza',
      className: 'aspect-square',
    },
    {
      src: '/stellas-1.webp',
      alt: 'Fresh Slices',
      title: 'Pizza by the Slice',
      category: 'Pizza',
      className: 'aspect-[2/1] md:col-span-2',
      featured: true,
    },
    {
      src: '/wings.jpeg',
      alt: 'Wings, Stella Pizza Cherry Hill NJ',
      title: 'Wings',
      category: 'Wings',
      className: 'aspect-square',
    },
    {
      src: '/stella-outside.jpeg',
      alt: 'Outside seating, Stella Pizza Cherry Hill NJ',
      title: 'Outdoor Dining',
      category: 'Ambiance',
      className: 'h-full md:row-span-2',
      featured: true,
    },
    {
      src: '/stella-brooklyn.jpeg',
      alt: 'Thin crust Brooklyn pizza, Stella Pizza Cherry Hill NJ',
      title: 'Brooklyn Style',
      category: 'Square Pizza',
      className: 'aspect-square',
    },
    {
      src: '/stella-buffalo.jpeg',
      alt: 'Large Buffalo Chicken, Stella Pizza Cherry Hill NJ',
      title: 'Buffalo Chicken',
      category: 'Pizza',
      className: 'aspect-square',
    },
    {
      src: '/knots.webp',
      alt: 'Garlic Knots, Stella Pizza Cherry Hill NJ',
      title: 'Garlic Knots',
      category: 'Appetizer',
      className: 'aspect-[2/1] md:col-span-2',
      featured: true,
    },
    {
      src: '/fries.jpeg',
      alt: 'Small Fries with a size of Cheese Whiz, Stella Pizza Cherry Hill NJ',
      title: 'Small Fries w/ Cheese Whiz',
      category: 'Appetizers',
      className: 'aspect-square',
    },
    {
      src: '/stella-burger.jpeg',
      alt: 'Cheeseburger Deluxe, Stella Pizza Cherry Hill NJ',
      title: 'Cheeseburger Deluxe',
      category: 'Burgers',
      className: 'aspect-square',
    },
    {
      src: '/stella-sicillian.jpeg',
      alt: 'Thin crust plain sicilian, Stella Pizza Cherry Hill NJ',
      title: 'Sicilian Pizza',
      category: 'Square Pizza',
      className: 'aspect-square',
    },
  ];

  return (
    <div className='font-lora container mx-auto max-w-7xl px-4 py-12'>
      {/* Header Section */}
      <div className='mb-12 text-center'>
        <h4 className='mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl'>
          Our Menu{' '}
          <span className='bg-gradient-to-r from-gray-900 via-red-700 to-red-800 bg-clip-text text-transparent'>
            Gallery
          </span>
        </h4>
      </div>

      {/* Bento Grid */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl dark:from-gray-800 dark:to-gray-900 ${image.className}`}
          >
            {/* Image Container */}
            <div className={`relative ${image.className}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className='object-cover transition-transform duration-700 ease-out group-hover:scale-110'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                unoptimized
              />

              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

              {/* Featured Badge */}
              {image.featured && (
                <div className='absolute top-4 left-4'>
                  <Badge
                    variant='secondary'
                    className='bg-white/90 font-semibold text-gray-900 backdrop-blur-sm'
                  >
                    Featured
                  </Badge>
                </div>
              )}

              {/* Category Badge */}
              <div className='absolute top-4 right-4'>
                <Badge
                  variant='outline'
                  className='border-white/30 bg-black/20 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100'
                >
                  {image.category}
                </Badge>
              </div>

              {/* Content Overlay */}
              <div className='absolute right-0 bottom-0 left-0 translate-y-6 transform p-6 transition-transform duration-300 ease-out group-hover:translate-y-0'>
                <h3 className='mb-2 text-lg font-bold text-white opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100'>
                  {image.title}
                </h3>
              </div>

              {/* Hover Effect Border */}
              <div className='absolute inset-0 rounded-2xl opacity-0 ring-2 ring-white/20 transition-opacity duration-300 group-hover:opacity-100' />
            </div>

            {/* Shimmer Effect */}
            <div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full' />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className='mt-16 text-center'>
        <p className='mb-6 text-xl text-gray-600'>
          Ready to{' '}
          <span className='bg-gradient-to-r from-gray-900 via-red-700 to-red-800 bg-clip-text text-transparent'>
            taste the best pizza in Cherry Hill?
          </span>
        </p>
        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <div className='pt-6'>
            <Link
              href='https://stellapizzacherryhillnj.pdqonlineordering.com/'
              target='_blank'
            >
              <Button
                variant={'outline'}
                size={'lg'}
                className='group relative transform overflow-hidden border-2 border-stone-800 bg-transparent px-12 py-4 text-lg font-medium text-stone-800 transition-all duration-300 hover:scale-105 hover:cursor-grab hover:bg-stone-800 hover:text-white hover:shadow-2xl'
              >
                <span className='relative z-10'>Order Online</span>
                <div className='absolute inset-0 origin-left scale-x-0 transform bg-stone-800 transition-transform duration-300 group-hover:scale-x-100'></div>
              </Button>
            </Link>
          </div>
          <div className='pt-6'>
            <Link href='tel:8564280055' target='_blank' prefetch={false}>
              <Button
                variant={'outline'}
                size={'lg'}
                className='group relative transform overflow-hidden border-2 border-stone-800 bg-transparent px-12 py-4 text-lg font-medium text-stone-800 transition-all duration-300 hover:scale-105 hover:cursor-grab hover:bg-stone-800 hover:text-white hover:shadow-2xl'
              >
                <span className='relative z-10'>(856)-428-0055</span>
                <div className='absolute inset-0 origin-left scale-x-0 transform bg-stone-800 transition-transform duration-300 group-hover:scale-x-100'></div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
