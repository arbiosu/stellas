import { Hero } from '@/components/hero';
import MenuPreview from '@/components/menu';
import LocationSection from '@/components/location';
import { SiteFooter } from '@/components/footer';
import Banner from '@/components/top-banner';
import BentoGridGallery from '@/components/bento-image-grid';
import GoogleReviewsCarousel from '@/components/reviews';
import SpecialsGrid from '@/components/slice-specials';

import { MENU_ITEMS } from '@/lib/constants';

const sliceSpecials = [
  {
    label: '2 Plain Slices + Fountain Soda',
    imgUrl: '/plain-slices.jpeg',
    price: '8.50',
  },
  {
    label: '2 Specialty Slices + Fountain Soda',
    imgUrl: '/specialty-slices.jpeg',
    price: '10.50',
  },
  {
    label: '2 Square Slices + Fountain Soda',
    imgUrl: '/square-slices.jpeg',
    price: '8.50',
  },
];

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
        <SpecialsGrid cards={sliceSpecials} />
        <BentoGridGallery />
      </main>
      <SiteFooter />
    </div>
  );
}
