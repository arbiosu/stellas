import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, PhoneOutgoing, MenuSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className=''>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h1 className='font-italiana text-7xl font-extrabold md:text-7xl lg:text-8xl'>
              Stella Pizza Cherry Hill
            </h1>
            <p className='font-lora mx-auto max-w-[700px] text-base md:text-xl'>
              Eat In, Take Out & Delivery
            </p>
          </div>
          <div className='font-lora flex flex-col gap-2 min-[400px]:flex-row'>
            <Button
              asChild
              size='lg'
              className='bg-green-600 p-6 text-lg hover:bg-emerald-700'
            >
              <Link
                href='https://stellapizzacherryhillnj.pdqonlineordering.com/'
                target='_blank'
              >
                Order Online <ExternalLink />
              </Link>
            </Button>
            <Button asChild variant='outline' size='lg' className='p-6 text-lg'>
              <Link href='#menu'>
                View Menu <MenuSquare />
              </Link>
            </Button>
            <Button
              asChild
              size='lg'
              className='bg-red-600 p-6 text-lg hover:bg-rose-700'
            >
              <Link href='tel:8564280055'>
                Call Us <PhoneOutgoing />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <section className='relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-stone-50 via-white to-red-50'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-red-200 blur-xl'></div>
        <div className='absolute right-20 bottom-32 h-48 w-48 animate-pulse rounded-full bg-stone-200 blur-2xl delay-1000'></div>
      </div>

      {/* Main content container */}
      <div className='relative z-10 flex min-h-screen flex-col items-center justify-between px-6 md:px-12 lg:flex-row lg:px-20'>
        {/* Text content */}
        <div className='flex-1 space-y-8 text-center lg:pr-12 lg:text-left'>
          <div className='space-y-4'>
            <h1 className='font-italiana text-7xl leading-none font-light tracking-tight text-stone-800 md:text-8xl lg:text-9xl'>
              <span className='block transform cursor-default transition-transform duration-500 hover:scale-105'>
                Stella Pizza
              </span>
              <span className='block transform cursor-default bg-gradient-to-r from-red-600 to-stone-700 bg-clip-text text-transparent transition-transform delay-100 duration-500 hover:scale-105'>
                Cherry Hill
              </span>
            </h1>
          </div>

          {/* Handmade badge */}
          <div className='flex justify-center lg:justify-start'>
            <div className='group relative'>
              <Image
                src='/stella-logo.png'
                alt='Stella Pizza Cherry Hill New Jersey, 08034'
                height={120}
                width={300}
                unoptimized
                className='rounded-full filter transition-all duration-300 group-hover:scale-105 hover:drop-shadow-xl'
              />
            </div>
          </div>

          {/* Description */}
          <p className='mx-auto max-w-md text-lg leading-relaxed text-stone-600 md:text-xl lg:mx-0'>
            Eat in, Take Out, and Delivery, Proudly Serving Cherry Hill for 20+
            Years
          </p>

          {/* CTA Button */}
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
        </div>

        {/* Hero Image */}
        <div className='relative mt-12 max-w-2xl flex-1 lg:mt-0'>
          <div className='group relative'>
            {/* Floating shadow effect */}
            <div className='absolute inset-0 translate-y-8 transform rounded-3xl bg-gradient-to-br from-red-100 to-stone-200 opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-70'></div>

            {/* Main image */}
            <div className='relative transform overflow-hidden rounded-3xl transition-all duration-700 group-hover:scale-105'>
              <Image
                src='/stella-grandma.jpeg'
                width={800}
                height={600}
                alt='Dragonfly Ceramics Bowl - Handcrafted artisan pottery'
                className='h-auto w-full object-cover brightness-105 contrast-105 filter'
                priority
              />

              {/* Overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100'></div>
            </div>
          </div>

          {/* Floating elements around image */}
          <div className='absolute -top-4 -right-4 h-8 w-8 animate-bounce rounded-full bg-red-400 delay-300'></div>
          <div className='absolute -bottom-6 -left-6 h-6 w-6 animate-bounce rounded-full bg-stone-400 delay-700'></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce'>
        <div className='flex h-10 w-6 justify-center rounded-full border-2 border-stone-400'>
          <div className='mt-2 h-3 w-1 animate-pulse rounded-full bg-stone-400'></div>
        </div>
      </div>
    </section>
  );
}
