import Link from 'next/link';
import Image from 'next/image';
import { PhoneOutgoing } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { MapPin, Phone, Mail, Clock, ArrowRight, FileText } from 'lucide-react';
import { MenuCards } from './menu-stacked-grid';
import RoundedButton from './buttons/rounded-button';

export function HeroAlt() {
  return (
    <section className='relative min-h-screen overflow-hidden'>
      <div className='flex flex-col items-center justify-center gap-2 py-20'>
        <span className='text-muted-foreground text-sm'>
          Cherry Hill&apos;s favorite since 2003
        </span>
        <h1 className='text-foreground font-serif text-5xl leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-8xl'>
          Stella Pizza
          <br />
          <span className='text-primary'>Cherry Hill</span>
        </h1>
        <p className='max-w-md text-lg leading-relaxed font-extrabold'>
          CLOSED: June 30 - July 13. Reopen on July 14th.
        </p>
        <p className='text-muted-foreground max-w-md text-lg leading-relaxed'>
          Eat In • Take Out • Delivery
        </p>
        <p className='text-muted-foreground max-w-md text-lg leading-relaxed'>
          Proudly serving Cherry Hill for 20+ Years
        </p>
        {/* Info Pills */}
        <div className='mt-8 flex flex-wrap items-center gap-3'>
          <div className='bg-card text-card-foreground border-border flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm'>
            <MapPin className='text-primary h-4 w-4' />
            <span>219 Haddonfield-Berlin Rd. Cherry Hill, NJ</span>
          </div>
        </div>
        <div className='font-lora mt-10 flex flex-wrap items-center justify-center gap-4'>
          <Button asChild className='p-6 text-xl'>
            <Link
              href='https://stellapizzacherryhillnj.pdqonlineordering.com/'
              target='_blank'
            >
              <FileText className='h-12 w-12' />
              Order Online
            </Link>
          </Button>
          <Button asChild className='p-6 text-xl'>
            <Link href='tel:+18564280055' prefetch={false}>
              <PhoneOutgoing />
              856-428-0055
            </Link>
          </Button>
        </div>
        <div className='pt-6'>
          <RoundedButton href='/stella-menu-2025.pdf' label='View Full Menu' />
        </div>
      </div>
      <div className='mx-auto max-w-7xl'>
        <MenuCards />
      </div>
    </section>
  );
}

export function ContactHero() {
  return (
    <section className='min-h-screen'>
      <div className='relative h-[40vh] min-h-[320px] overflow-hidden'>
        <Image
          src='/stella-plain.jpeg'
          alt='Restaurant interior'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/40' />

        <div className='from-background via-background/30 absolute inset-0 bg-gradient-to-t to-transparent' />
        <div className='absolute right-0 bottom-0 left-0 p-6 md:p-12'>
          <p className='text-primary mb-2 text-sm tracking-widest uppercase'>
            Get in Touch
          </p>
          <h1 className='text-foreground font-serif text-4xl md:text-6xl'>
            Contact
          </h1>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-8'>
        <h2 className='font-lora text-center text-4xl sm:text-5xl'>
          {"We'd love to hear from you."}
        </h2>
        <div className='flex w-full max-w-7xl flex-col justify-center justify-items-center gap-2'>
          <div className='bg-card border-border aspect-4/3 max-w-3xl overflow-hidden rounded-2xl border'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.236401275196!2d-75.02183342363789!3d39.891339171528905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6cafdddae0769%3A0x9c43fe5d4ccb7852!2sStella%20Pizza!5e0!3m2!1sen!2sus!4v1778126784212!5m2!1sen!2sus'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Restaurant location map'
            />
          </div>
          <div className='group flex items-start gap-4'>
            <div className='bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors'>
              <MapPin className='text-primary h-4 w-4' />
            </div>
            <div>
              <p className='text-muted-foreground mb-1 text-sm'>Location</p>
              <p className='text-foreground text-xl'>
                219 Haddonfield-Berlin Rd. STE-Y
                <br />
                Cherry Hill, NJ 08034
              </p>
            </div>
          </div>

          <div className='group flex items-start gap-4'>
            <div className='bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors'>
              <Phone className='text-primary h-4 w-4' />
            </div>
            <div>
              <p className='text-muted-foreground mb-1 text-sm'>Phone</p>
              <a
                href='tel:+18564280055'
                className='text-foreground hover:text-primary transition-colors'
              >
                (856) 429-0055
              </a>
            </div>
          </div>

          <div className='group flex items-start gap-4'>
            <div className='bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors'>
              <Clock className='text-primary h-4 w-4' />
            </div>
            <div>
              <p className='text-muted-foreground mb-1 text-sm'>Hours</p>
              <div className='text-foreground space-y-1'>
                <p>Tue - Sat: 11am - 9pm</p>
                <p>Sun: 12pm - 9pm</p>
                <p>Monday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
          Stella Pizza Cherry Hill
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
