import Link from 'next/link';
import Image from 'next/image';
import { PhoneOutgoing } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';

function oldhero() {
  <div className='flex min-h-screen flex-col items-center justify-between gap-12 lg:flex-row'>
    <div className='space-y-4 text-center lg:text-left'>
      <h1 className='font-italiana text-6xl leading-none font-light tracking-tight text-stone-800 lg:text-8xl xl:text-9xl'>
        <span className='block'>Stella Pizza</span>
        <span className='block text-red-800'>Cherry Hill</span>
      </h1>

      <div className='flex justify-center lg:justify-start'>
        <Image
          src='/stella-logo.png'
          alt='Stella Pizza Cherry Hill New Jersey, 08034'
          height={300}
          width={300}
          unoptimized
          className='rounded-full'
        />
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

    <div className='max-w-full flex-1 overflow-hidden rounded-sm'>
      <Image
        src='/pep-compressed.jpeg'
        width={800}
        height={600}
        alt='Pepperoni Pizza - Stella Pizza Cherry Hill'
        className='h-full w-full object-cover'
        priority
      />
    </div>
  </div>;
}

export function Hero() {
  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden text-center'>
      <Image
        src='/stella-grandma.jpeg'
        alt='Stella Pizza Cherry Hill Fresh Rolled Dough'
        fill
        priority
        className='object-cover object-center'
      />
      <div className='absolute inset-0 bg-black/60' />

      <div className='relative z-10 px-4'>
        <h1 className='font-italiana mb-4 text-7xl font-bold text-white drop-shadow-lg md:text-9xl'>
          Stella Pizza
        </h1>
        <p className='font-lora mb-6 text-xl font-semibold text-red-50 md:text-4xl'>
          Eat In • Take Out • Delivery
        </p>
        <p className='font-lora mb-6 text-lg font-light text-white'>
          Proudly Serving Cherry Hill for{' '}
          <span className='font-extrabold text-red-300'>20+</span> Years
        </p>
        <div className='font-lora flex flex-col items-center gap-2'>
          <div className='font-lora'>
            <Button
              asChild
              size={'lg'}
              variant={'secondary'}
              className='py-6 text-2xl'
            >
              <Link
                href='https://stellapizzacherryhillnj.pdqonlineordering.com/'
                target='_blank'
              >
                Order Online
              </Link>
            </Button>
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
      </div>
    </section>
  );
}
