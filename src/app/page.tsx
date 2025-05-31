import Image from 'next/image';
import { HeroSection } from '@/components/hero';
import PhotosSection from '@/components/photo-carousel';
import MenuPreview from '@/components/menu';
import LocationSection from '@/components/location';
import { SiteFooter } from '@/components/footer';
import Banner from '@/components/top-banner';

import { MENU_ITEMS } from '@/lib/constants';

export default function Home() {
  return (
    <div className=''>
      <main className='space-y-10'>
        <Banner />
        <HeroSection />
        <div className='relative mx-auto flex justify-center'>
          <Image
            src='/stella-logo.png'
            alt='Stella Pizza Cherry Hill Logo'
            width={400}
            height={300}
            unoptimized
          />
        </div>
        <PhotosSection />
        <MenuPreview items={MENU_ITEMS} />
        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
}
