import Image from 'next/image';
import Link from 'next/link';
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card';
import { Clock, MapPin } from 'lucide-react';

export function HoursCard() {
  return (
    <div className='font-lora container mx-auto max-w-3xl'>
      <Card className='overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl'>
        <CardHeader className='relative'>
          <div className='flex items-center justify-center gap-2'>
            <Clock className='h-8 w-8' />
            <CardTitle className='text-center text-3xl md:text-4xl'>
              Hours
            </CardTitle>
          </div>
          <div className='mx-auto mt-2 h-1 w-full rounded-full bg-black' />
        </CardHeader>

        <CardContent className='relative grid grid-cols-2 gap-y-4 p-6 text-center'>
          <div className='text-base font-medium md:text-lg'>
            <p>Monday</p>
          </div>
          <div className='text-base font-bold md:text-lg'>
            <p>Closed</p>
          </div>
          <div className='text-base font-medium md:text-lg'>
            <p>Tuesday</p>
          </div>
          <div className='text-base font-bold md:text-lg'>
            <p>11AM - 9PM</p>
          </div>
          <div className='text-base font-medium md:text-lg'>
            <p>Wednesday</p>
          </div>
          <div className='text-base font-bold md:text-lg'>
            <p>11AM - 9PM</p>
          </div>
          <div className='text-base font-medium md:text-lg'>
            <p>Thursday</p>
          </div>
          <div className='text-base font-bold md:text-lg'>
            <p>11AM - 9PM</p>
          </div>
          <div className='text-base font-medium md:text-lg'>
            <p>Friday</p>
          </div>
          <div className='text-base font-bold md:text-lg'>
            <p>11AM - 9PM</p>
          </div>
          <div className='text-base font-medium md:text-lg'>
            <p>Saturday</p>
          </div>
          <div className='text-base font-bold md:text-lg'>
            <p>11AM - 9PM</p>
          </div>
          <div className='text-base font-medium md:text-lg'>
            <p>Sunday</p>
          </div>
          <div className='text-base font-bold md:text-lg'>
            <p>12PM - 9PM</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function FindUs() {
  return (
    <div className='container mx-auto p-6'>
      <div className='flex flex-col items-center space-y-4 text-center'>
        <h2 className='text-3xl md:text-4xl'>Our Location</h2>
        <div className='flex items-center justify-center'>
          <MapPin className='mr-2 h-8 w-8' />
          <Link
            href='https://maps.app.goo.gl/gEL6CG4fFpFyRLwW6'
            target='_blank'
          >
            <p className='text-base hover:underline md:text-lg'>
              219 Haddonfield-Berlin Rd., Cherry Hill, NJ, 08034
            </p>
          </Link>
        </div>
        <div className='mt-6 h-[300px] w-full max-w-3xl overflow-hidden rounded-lg border'>
          <Image
            src='/stellas-location.webp'
            alt='Front view of Stella Pizza in Cherry Hill New Jersey'
            width={800}
            height={600}
            className='h-full w-full object-cover'
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
export default function LocationSection() {
  return (
    <section id='location' className='font-lora mb-8'>
      <div>
        <FindUs />
      </div>
      <div>
        <HoursCard />
      </div>
    </section>
  );
}
