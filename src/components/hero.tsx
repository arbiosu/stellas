import Link from 'next/link';
import { ExternalLink, PhoneOutgoing } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className='p-2'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center space-y-4 text-center'>
          <div className='space-y-2'>
            <h1 className='font-italiana text-5xl font-bold md:text-7xl lg:text-8xl'>
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
              className='bg-green-600 hover:bg-emerald-700'
            >
              <Link
                href='https://stellapizzacherryhillnj.pdqonlineordering.com/'
                target='_blank'
              >
                Order Online <ExternalLink className='ml-2 h-4 w-4' />
              </Link>
            </Button>
            <Button asChild variant='outline' size='lg'>
              <Link href='#menu'>View Menu</Link>
            </Button>
            <Button asChild size='lg' className='bg-red-600 hover:bg-rose-700'>
              <Link href='tel:+8564280055'>
                Call Us <PhoneOutgoing className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
