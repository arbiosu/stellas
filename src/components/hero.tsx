import Link from 'next/link';
import Image from 'next/image';
import { PhoneOutgoing } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';

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
          Proudly Serving{' '}
          <span className='text-2xl font-black text-red-300 md:text-3xl'>
            Cherry Hill
          </span>{' '}
          for{' '}
          <span className='text-2xl font-extrabold text-red-300 md:text-3xl'>
            20+
          </span>{' '}
          Years
        </p>
        <div className='font-lora flex flex-col items-center gap-4'>
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
            <Badge asChild variant={'destructive'}>
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
