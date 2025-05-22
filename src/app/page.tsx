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
        <PhotosSection />
        <MenuPreview items={MENU_ITEMS} />
        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
}
