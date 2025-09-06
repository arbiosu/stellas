import Link from 'next/link';
import Image from 'next/image';
import { PhoneOutgoing } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';

export function Hero() {
  return (
    <section className='relative min-h-screen w-full overflow-hidden'>
      <div className='relative z-10 flex min-h-screen flex-col items-center justify-between px-6 md:px-12 lg:flex-row lg:px-20'>
        <div className='flex-1 space-y-8 text-center lg:pr-12 lg:text-left'>
          <div className='space-y-4'>
            <h1 className='font-italiana text-6xl leading-none font-light tracking-tight text-stone-800 md:text-8xl lg:text-9xl'>
              <span className='block transform cursor-default transition-transform duration-500'>
                Stella Pizza
              </span>
              <span className='block transform cursor-default bg-gradient-to-r from-red-600 to-stone-700 bg-clip-text text-transparent'>
                Cherry Hill
              </span>
            </h1>
          </div>

          <div className='flex justify-center lg:justify-start'>
            <div className='group relative'>
              <Image
                src='/stella-logo.png'
                alt='Stella Pizza Cherry Hill New Jersey, 08034'
                height={120}
                width={300}
                unoptimized
                className='rounded-full filter transition-all duration-300 group-hover:scale-105'
              />
            </div>
          </div>

          <p className='mx-auto max-w-md text-lg leading-relaxed text-stone-600 md:text-xl lg:mx-0'>
            Eat in, Take Out, and Delivery. Proudly Serving Cherry Hill for 20+
            Years
          </p>

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
          <div>
            <Badge asChild variant={'destructive'} className='text-white'>
              <Link href='tel:8564280055' prefetch={false}>
                <PhoneOutgoing />
                856-428-0055
              </Link>
            </Badge>
          </div>
        </div>

        <div className='relative mt-12 max-w-full flex-1'>
          <div className='group relative'>
            <div className='relative transform overflow-hidden rounded-3xl transition-all duration-700 group-hover:scale-[1.02]'>
              <Image
                src='/pep-compressed.jpeg'
                width={800}
                height={600}
                alt='Pepperoni Pizza - Stella Pizza Cherry Hill'
                className='h-full w-full object-cover brightness-105 contrast-105 filter'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
