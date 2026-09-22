import { HeroAlt } from '@/components/hero';
import LocationSection from '@/components/location';
import GoogleReviewsCarousel from '@/components/reviews';
import { Gallery } from '@/components/gallery/gallery';
import SliceSpecialSection from '@/components/slice-specials';

export default function Home() {
  return (
    <div>
      <main className='flex flex-col gap-8'>
        <HeroAlt />
        <SliceSpecialSection />
        <LocationSection />
        <GoogleReviewsCarousel />
        <Gallery />
      </main>
    </div>
  );
}
