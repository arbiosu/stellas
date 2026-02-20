import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from './ui/separator';
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
      <Card className='group-focus-visible:ring-primary border-border hover:border-primary/40 h-full transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-offset-2 hover:-translate-y-2'>
        <CardHeader className='pb-4 text-center'>
          <CardTitle className='group-hover:text-primary flex justify-between gap-8 text-xl font-semibold text-gray-900 transition-colors duration-200'>
            {item.type}
            <ExternalLink />
          </CardTitle>
          <CardDescription className='text-left leading-relaxed text-gray-600'>
            {item.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default function MenuPreview({ items }: { items: MenuItemPreview[] }) {
  return (
    <section
      id='menu'
      className='font-lora mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 py-16 md:py-24'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center'>
          <p className='mb-3 text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase'>
            View Our Menu
          </p>
          <h2 className='text-foreground font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl'>
            Our Menu at a Glance
          </h2>
        </div>
        <Separator className='bg-border/60 mx-auto my-10 max-w-xs md:my-14' />
        <div className='mb-8 flex justify-center'>
          <Link
            href='/stella-menu-2025.pdf'
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

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {items.map((item, index) => (
            <MenuItemPreviewCard item={item} key={`${item.type}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
