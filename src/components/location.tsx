import HoursCard from './cards/hours-card';
import LocationCard from './cards/location-card';
import SectionHeader from './text/section-header';

export default function LocationSection() {
  return (
    <section
      id='location'
      className='bg-background relative flex min-h-screen flex-col justify-center py-24'
    >
      <div className='container mx-auto max-w-5xl px-4'>
        <SectionHeader
          overline='Hours & Location'
          heading='Visit Stella'
          subtitle='Experience authentic Italian pizza crafted with love in the heart of Cherry Hill.'
        />
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
          <HoursCard />
          <LocationCard />
        </div>
      </div>
    </section>
  );
}
