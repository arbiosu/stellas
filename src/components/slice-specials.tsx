import SectionHeader from './text/section-header';
import SlidingCardGrid from './grid/sliding-card-grid';
import { SpecialCard } from './cards/specials-card';

const specials = [
  {
    title: '2 Cheese Slices + Fountain Soda',
    description: 'Select any two classic plain cheese slices.',
    price: '$8.99',
    imageSrc: '/regular-specials-opt.jpeg',
    imageAlt: 'Two plain cheese slices and a fountain soda',
  },
  {
    title: '2 Specialty Slices + Fountain Soda',
    description:
      'Select any two from our selection of signature gourmet slices.',
    price: '$10.99',
    imageSrc: '/new-specials-pic.jpg',
    imageAlt:
      'Two specialty slices - buffalo chicken and broccoli tomato ricotta and a fountain soda.',
  },
  {
    title: '2 Square Slices + Fountain Soda',
    description:
      'Select any two Grandma, Brooklyn, or Cheese thin crust square slices.',
    price: '$8.50',
    imageSrc: '/square-specials-opt.jpeg',
    imageAlt: '3 square sices - brooklyn, grandma, plain - and a fountain soda',
  },
];

export default function SliceSpecialSection() {
  return (
    <section className='container mx-auto max-w-6xl p-4'>
      <SectionHeader
        overline='Everyday Specials'
        heading='Daily Specials'
        subtitle='Available everyday. Walk-in only!'
      />
      <SlidingCardGrid density={'loose'}>
        {specials.map((card, i) => (
          <SpecialCard
            key={i}
            title={card.title}
            description={card.description}
            price={card.price}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            index={i}
          />
        ))}
      </SlidingCardGrid>
      <p className='text-muted-foreground/60 mt-10 text-center font-sans text-xs tracking-wide md:mt-14'>
        Specials available while supplies last.
      </p>
    </section>
  );
}
