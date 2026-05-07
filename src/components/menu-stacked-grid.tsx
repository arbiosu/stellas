'use client';

import SectionHeader from './text/section-header';
import StackedCardsGrid from './grid/stacked-cards-grid';
import MenuCard from './cards/menu-card';
import AnimatedTextRoller from './text/rolling-text';
import { useStackedGrid } from '@/hooks/useStackedGrid';

export const cards = [
  {
    title: 'Pizza',
    subtitle: 'Authentic New York Style Thin Crust - Square or Round',
    imageSrc: '/pep-compressed.jpeg',
    menuSrc: '/menu/pizza.png',
  },
  {
    title: 'Wings',
    subtitle:
      'Classic Boneless or Buffalo with your choice of Hot, Mild, Garlic Parm or Honey BBQ Sauce',
    imageSrc: '/wings.jpeg',
    menuSrc: '/menu/wings.png',
  },
  {
    title: 'Appetizers',
    subtitle: 'Traditional Italian Starters & Shareable Bites',
    imageSrc: '/mozz-sticks-opt.jpeg',
    menuSrc: '/menu/appetizers.png',
  },
  {
    title: 'Salads',
    subtitle: 'Fresh Garden Salads with Garlic Bread & Dressing',
    imageSrc: '/greek-salad-opt.jpeg',
    menuSrc: '/menu/salads.png',
  },
  {
    title: 'Steaks',
    subtitle: 'Hand-laid Loin Tail Steak on Fresh Italian Rolls',
    imageSrc: '/chs-stk-special.jpeg',
    menuSrc: '/menu/steaks.png',
  },
  {
    title: 'Burgers',
    subtitle: 'Premium ½ lb Angus Beef on Toasted Brioche Buns',
    imageSrc: '/burger-deluxe.jpeg',
    menuSrc: '/menu/burgers.png',
  },
  {
    title: 'Pasta Dinners',
    subtitle: 'Homestyle Pasta - Penne, Spaghetti & Fettuccine',
    imageSrc: '/baked-ziti.jpeg',
    menuSrc: '/menu/pasta.png',
  },
  {
    title: 'Strombolis & Calzones',
    subtitle: 'Authentic Italian Strombolis & Calzones - 12"',
    imageSrc: '/stromboli-opt.jpeg',
    menuSrc: '/menu/strombolis.png',
  },

  {
    title: 'Wraps',
    subtitle: 'Classic wraps in a large flour tortilla',
    imageSrc: '/wrap.jpeg',
    menuSrc: '/menu/wraps.png',
  },
  {
    title: 'Paninis',
    subtitle: 'Served on Rustic Ciabatta Bread',
    imageSrc: '/eggplant-parm-1.jpeg',
    menuSrc: '/menu/paninis.png',
  },
  {
    title: 'Classic Italian Subs',
    subtitle: 'Classic Italian Sub Sandwiches served on a fresh Italian roll',
    imageSrc: '/sub.jpeg',
    menuSrc: '/menu/subs.png',
  },
  {
    title: 'Hoagies',
    subtitle:
      'Served with EVOO, Lettuce, Tomatoes, Onions, Oregano, Salt, Pepper, Fresh Italian Roll',
    imageSrc: '/italian-hoagie.jpeg',
    menuSrc: '/menu/hoagies.png',
  },
];

export default function MenuCardSection() {
  const { scrollerRef, activeIndex } = useStackedGrid(cards.length);

  return (
    <section className='container mx-auto max-w-6xl p-4'>
      <SectionHeader
        overline='Stella Pizza Menu'
        heading='Our Menu at a Glance'
        subtitle=''
      />

      <StackedCardsGrid scrollerRef={scrollerRef}>
        {cards.map((card, i) => (
          <MenuCard
            key={i}
            imageSrc={card.imageSrc}
            menuSrc={card.menuSrc}
            title={card.title}
            subtitle={card.subtitle}
            offset={i - activeIndex}
            isActive={i === activeIndex}
          />
        ))}
      </StackedCardsGrid>
    </section>
  );
}

export function MenuCards() {
  const { scrollerRef, activeIndex } = useStackedGrid(cards.length);
  return (
    <StackedCardsGrid scrollerRef={scrollerRef}>
      {cards.map((card, i) => (
        <MenuCard
          key={i}
          imageSrc={card.imageSrc}
          menuSrc={card.menuSrc}
          title={card.title}
          subtitle={card.subtitle}
          offset={i - activeIndex}
          isActive={i === activeIndex}
        />
      ))}
    </StackedCardsGrid>
  );
}
