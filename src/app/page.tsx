import { Hero } from '@/components/hero';
import MenuPreview from '@/components/menu';
import LocationSection from '@/components/location';
import { SiteFooter } from '@/components/footer';
import BentoGridGallery from '@/components/bento-image-grid';
import GoogleReviewsCarousel from '@/components/reviews';
import SpecialsGrid from '@/components/slice-specials';

import { MENU_ITEMS, SLICE_SPECIALS } from '@/lib/constants';

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <div className='pt-12 lg:pt-0'></div>
        <SpecialsGrid cards={SLICE_SPECIALS} />
        <div className='pt-12 lg:pt-0'></div>
        <MenuPreview items={MENU_ITEMS} />
        <div className='pt-12 xl:pt-0'></div>
        <LocationSection />
        <div className='pt-12 lg:pt-0'></div>
        <GoogleReviewsCarousel />
        <div className='pt-12 lg:pt-0'></div>
        <BentoGridGallery />
      </main>
      <div className='pt-12'></div>
      <SiteFooter />
    </div>
  );
}
