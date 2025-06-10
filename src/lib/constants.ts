import type { MenuItemPreview } from '@/components/menu';

export const SLICE_SPECIALS = [
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

export const MENU_ITEMS: MenuItemPreview[] = [
  {
    type: 'Pizza',
    description: 'Authentic New York Style Thin Crust - Square or Round',
    src: '/pizza.svg',
    menuSrc: '/menu/pizza.png',
  },
  {
    type: 'Wings',
    description: 'Crispy Wings - Classic Boneless or Buffalo Style',
    src: '/wings.svg',
    menuSrc: '/menu/wings.png',
  },
  {
    type: 'Appetizers',
    description: 'Traditional Italian Starters & Shareable Bites',
    src: '/appetizers.svg',
    menuSrc: '/menu/appetizers.png',
  },
  {
    type: 'Salads',
    description: 'Fresh Garden Salads with Garlic Bread & Dressing',
    src: '/salad.svg',
    menuSrc: '/menu/salads.png',
  },
  {
    type: 'Steaks',
    description: '½ lb Sirloin Steaks on Fresh Italian Rolls',
    src: '/bread.svg',
    menuSrc: '/menu/steaks.png',
  },
  {
    type: 'Burgers',
    description: 'Premium ½ lb Angus Beef on Toasted Brioche Buns',
    src: '/burgers.svg',
    menuSrc: '/menu/burgers.png',
  },
  {
    type: 'Pasta Dinners',
    description: 'Homestyle Pasta - Penne, Spaghetti & Fettuccine',
    src: '/pasta.svg',
    menuSrc: '/menu/pasta.png',
  },
  {
    type: 'Strombolis & Calzones',
    description: 'Authentic Italian Strombolis & Golden Calzones',
    src: '/pizza.svg',
    menuSrc: '/menu/strombolis.png',
  },

  {
    type: 'Wraps',
    description: 'Hearty Wraps in Large Flour Tortillas',
    src: '/wraps.svg',
    menuSrc: '/menu/wraps.png',
  },
  {
    type: 'Paninis',
    description: 'Artisan Ciabatta Bread',
    src: '/panini.svg',
    menuSrc: '/menu/paninis.png',
  },
  {
    type: 'Classic Italian Subs',
    description: 'Classic Italian Sub Sandwiches',
    src: '/sub.svg',
    menuSrc: '/menu/subs.png',
  },
  {
    type: 'Hoagies',
    description: 'Fresh Hoagies with Premium Fixings on Italian Rolls',
    src: '/hoagie.svg',
    menuSrc: '/menu/hoagies.png',
  },
];
