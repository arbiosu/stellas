import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from './ui/button';
import { MenuSquare, ExternalLink } from 'lucide-react';

export interface MenuItemPreview {
  type: string;
  description: string;
  src: string;
  menuSrc: string;
}

function MenuItemPreviewCard({ item }: { item: MenuItemPreview }) {
  return (
    <Link
      href={item.menuSrc}
      target='_blank'
      rel='noopener noreferrer'
      prefetch={false}
      className='group block'
      aria-label={`View ${item.type} section of menu`}
    >
      <Card className='group-focus-visible:ring-primary h-full border-none shadow-sm transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-offset-2 hover:-translate-y-1 hover:shadow-xl'>
        <CardHeader className='pb-4 text-center'>
          <CardTitle className='group-hover:text-primary text-xl font-semibold text-gray-900 transition-colors duration-200'>
            {item.type}
          </CardTitle>
          <CardDescription className='leading-relaxed text-gray-600'>
            {item.description}
          </CardDescription>
        </CardHeader>
        <CardContent className='flex justify-center pt-2'>
          <div className='relative overflow-hidden rounded-full bg-gradient-to-br from-orange-50 to-red-50 p-2 transition-all duration-300 group-hover:from-orange-100 group-hover:to-red-100'>
            <Image
              src={item.src}
              alt={`${item.type} icon`}
              height={64}
              width={64}
              unoptimized
              className='transition-transform duration-300 group-hover:scale-110'
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function MenuPreview({ items }: { items: MenuItemPreview[] }) {
  return (
    <section
      id='menu'
      className='font-lora bg-gradient-to-b from-white to-gray-50 py-16'
      aria-labelledby='menu-heading'
    >
      <div className='container mx-auto px-4'>
        <div className='mb-12 text-center'>
          <h2
            id='menu-heading'
            className='mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl'
          >
            Our Menu{' '}
            <span className='bg-gradient-to-r from-gray-900 via-red-700 to-red-800 bg-clip-text text-transparent'>
              at a Glance
            </span>
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-lg text-gray-600'>
            Discover our carefully crafted selection of authentic Italian
            dishes, made with the finest ingredients and traditional recipes.
          </p>
          <Link
            href='/2025_Stella_Pizza_Menu_Cherry_Hill_NJ.pdf'
            target='_blank'
            rel='noopener noreferrer'
            prefetch={false}
            className='inline-block'
          >
            <Button
              size='lg'
              variant='outline'
              className='group relative transform overflow-hidden border-2 border-stone-800 bg-transparent px-12 py-4 text-lg font-medium text-stone-800 transition-all duration-300 hover:scale-105 hover:cursor-grab hover:bg-red-800 hover:text-white hover:shadow-2xl'
            >
              <span className='relative z-10'>View Full Menu</span>
              <div className='absolute inset-0 origin-left scale-x-0 transform bg-red-600 transition-transform duration-300 group-hover:scale-x-100'></div>
              <MenuSquare className='ml-2 transition-transform duration-200 group-hover:scale-110' />
              <ExternalLink className='ml-1 h-4 w-4 opacity-70' />
            </Button>
          </Link>
        </div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {items.map((item, index) => (
            <MenuItemPreviewCard item={item} key={`${item.type}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
