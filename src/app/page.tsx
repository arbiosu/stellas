import { Hero } from '@/components/hero';
import MenuPreview from '@/components/menu';
import LocationSection from '@/components/location';
import SiteFooter from '@/components/footer';
import GoogleReviewsCarousel from '@/components/reviews';
import { DailySpecials } from '@/components/specials/daily-specials';
import { MENU_ITEMS } from '@/lib/menu-items';
import { Gallery } from '@/components/gallery/gallery';

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <DailySpecials />
        <MenuPreview items={MENU_ITEMS} />
        <LocationSection />
        <GoogleReviewsCarousel />
        <Gallery />
      </main>
      <SiteFooter />
    </div>
  );
}
