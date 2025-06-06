import Image from 'next/image';
import { Hero } from '@/components/hero';
import MenuPreview from '@/components/menu';
import LocationSection from '@/components/location';
import { SiteFooter } from '@/components/footer';
import Banner from '@/components/top-banner';
import BentoGridGallery from '@/components/bento-image-grid';

import { MENU_ITEMS } from '@/lib/constants';

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <Hero />
        <BentoGridGallery />
        <MenuPreview items={MENU_ITEMS} />
        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
}
