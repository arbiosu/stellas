export type Category =
  | 'all'
  | 'pizza'
  | 'appetizers'
  | 'salads'
  | 'steaks'
  | 'burgers'
  | 'pasta'
  | 'strombolis'
  | 'wraps'
  | 'paninis'
  | 'subs'
  | 'hoagies'
  | 'atmosphere';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: Exclude<Category, 'all'>;
  title: string;
  aspect: 'square' | 'portrait' | 'landscape';
}

export const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'pizza', label: 'Pizza' },
  { value: 'appetizers', label: 'Appetizers' },
  { value: 'salads', label: 'Salads' },
  { value: 'steaks', label: 'Steaks' },
  { value: 'burgers', label: 'Burgers' },
  { value: 'pasta', label: 'Pasta' },
  { value: 'strombolis', label: 'Strombolis' },
  { value: 'paninis', label: 'Paninis' },
  { value: 'hoagies', label: 'Hoagies' },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'pizza-1',
    src: '/stella-pepperoni.jpeg',
    alt: 'Thin crust pepperoni pizza, Stella Pizza Cherry Hill NJ',
    category: 'pizza',
    title: 'Pepperoni Pizza',
    aspect: 'landscape',
  },
  {
    id: 'wings-2',
    src: '/wings.jpeg',
    alt: 'Wings, Stella Pizza Cherry Hill NJ',
    category: 'appetizers',
    title: 'Wings',
    aspect: 'square',
  },
  {
    id: 'wings-1',
    src: '/garlic-parm-wings.jpeg',
    alt: 'Garlic Parm Wings - Stella Pizza Cherry Hill NJ',
    category: 'appetizers',
    title: 'Garlic Parm Wings',
    aspect: 'portrait',
  },
  {
    id: 'pizza-2',
    src: '/stella-plain.jpeg',
    alt: 'Large Plain Cheese Pizza, Stella Pizza Cherry Hill NJ',
    category: 'pizza',
    title: 'Plain Cheese',
    aspect: 'portrait',
  },
  {
    id: 'dough-1',
    src: '/dough.jpeg',
    alt: 'Hand Rolled Dough, Stella Pizza Cherry Hill NJ',
    category: 'pizza',
    title: 'Hand Rolled Dough',
    aspect: 'landscape',
  },
  {
    id: 'slices-1',
    src: '/square-slices.jpeg',
    alt: 'Square Slices, Stella Pizza Cherry Hill NJ',
    category: 'pizza',
    title: 'Square Slices',
    aspect: 'portrait',
  },
  {
    id: 'slices-2',
    src: '/stellas-1.webp',
    alt: 'Fresh Slices',
    category: 'pizza',
    title: 'Pizza by the Slice',
    aspect: 'landscape',
  },
  {
    id: 'atmosphere-1',
    src: '/stella-outside.jpeg',
    alt: 'Outside seating, Stella Pizza Cherry Hill NJ',
    category: 'atmosphere',
    title: 'Outdoor Seating',
    aspect: 'portrait',
  },
  {
    id: 'pizza-3',
    src: '/stella-brooklyn.jpeg',
    alt: 'Thin crust Brooklyn pizza, Stella Pizza Cherry Hill NJ',
    category: 'pizza',
    title: 'Brooklyn Pizza',
    aspect: 'landscape',
  },
  {
    id: 'pizza-4',
    src: '/stella-buffalo.jpeg',
    alt: 'Large Buffalo Chicken Pizza, Stella Pizza Cherry Hill NJ',
    category: 'pizza',
    title: 'Buffalo Chicken',
    aspect: 'square',
  },
  {
    id: 'appetizers-4',
    src: '/knots.webp',
    alt: 'Garlic Knots, Stella Pizza Cherry Hill NJ',
    category: 'appetizers',
    title: 'Garlic Knots',
    aspect: 'landscape',
  },
  {
    id: 'salad-1',
    src: '/chkn-caesar-salad.jpeg',
    alt: 'Chicken Caesar Salad, Stella Pizza Cherry Hill NJ',
    category: 'salads',
    title: 'Chicken Caesar Salad',
    aspect: 'portrait',
  },
  {
    id: 'burger-1',
    src: '/burger-deluxe.jpeg',
    alt: 'Cheeseburger Deluxe, Stella Pizza Cherry Hill NJ',
    category: 'burgers',
    title: 'Golden Hour',
    aspect: 'portrait',
  },
  {
    id: 'pasta-1',
    src: '/meatballs.jpeg',
    alt: 'Pasta with Meatballs, Stella Pizza Cherry Hill NJ',
    category: 'pasta',
    title: 'Spaghetti Pasta with Meatballs',
    aspect: 'portrait',
  },
  {
    id: 'paninis-1',
    src: '/eggplant-parm-1.jpeg',
    alt: 'Eggplant Parm Panini, Stella Pizza Cherry Hill NJ',
    category: 'paninis',
    title: 'Eggplant Parm Panini',
    aspect: 'portrait',
  },
  {
    id: 'atmosphere-2',
    src: '/stellas-7.webp',
    alt: 'Sign of NYC culture, Stella Pizza Cherry Hill NJ',
    category: 'atmosphere',
    title: '',
    aspect: 'portrait',
  },
  {
    id: 'pizza-6',
    src: '/stella-sicillian.jpeg',
    alt: 'Thin crust plain sicilian, Stella Pizza Cherry Hill NJ',
    category: 'pizza',
    title: 'Thin Sicilian Pizza',
    aspect: 'portrait',
  },
  {
    id: 'pasta-6',
    src: '/baked-ziti.jpeg',
    alt: 'Baked Ziti, Stella Pizza Cherry Hill NJ',
    category: 'pasta',
    title: 'Baked Ziti',
    aspect: 'portrait',
  },
  {
    id: 'hoagies-1',
    src: '/italian-hoagie.jpeg',
    alt: 'Italian Hoagie, Stella Pizza Cherry Hill NJ',
    category: 'hoagies',
    title: 'Italian Hoagie',
    aspect: 'portrait',
  },
];
