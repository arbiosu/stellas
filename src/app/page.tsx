import { Hero } from '@/components/hero';
import MenuPreview from '@/components/menu';
import LocationSection from '@/components/location';
import { SiteFooter } from '@/components/footer';
import Banner from '@/components/top-banner';
import BentoGridGallery from '@/components/bento-image-grid';
import GoogleReviewsCarousel from '@/components/reviews';

import { MENU_ITEMS } from '@/lib/constants';

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <Hero />
        <div className='p-2'></div>
        <GoogleReviewsCarousel />
        <MenuPreview items={MENU_ITEMS} />
        <LocationSection />
        <BentoGridGallery />
      </main>
      <SiteFooter />
    </div>
  );
}
