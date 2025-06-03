import Link from 'next/link';
import { ExternalLink, PhoneOutgoing, MenuSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className='p-2'>
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
