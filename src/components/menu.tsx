import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export interface MenuItemPreview {
  type: string;
  description: string;
  src: string;
}

function MenuItemPreviewCard({ item }: { item: MenuItemPreview }) {
  return (
    <Card className='bg-red-100 transition-all duration-300 hover:shadow-lg'>
      <CardHeader className='text-center'>
        <CardTitle className='text-xl'>{item.type}</CardTitle>
        <CardDescription className='text-slate-800'>
          {item.description}
        </CardDescription>
      </CardHeader>
      <CardContent className='flex justify-center'>
        <Image
          src={item.src}
          alt={item.type}
          height={64}
          width={64}
          unoptimized
        />
      </CardContent>
    </Card>
  );
}

export default function MenuPreview({ items }: { items: MenuItemPreview[] }) {
  return (
    <section id='menu' className='font-lora container mx-auto'>
      <div className='text-center'>
        <h2 className='mb-2 text-3xl md:text-5xl'>Our Menu at a Glance</h2>
        <Link
          href='/2025_Stella_Pizza_Menu_Cherry_Hill_NJ.pdf'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='text-xl font-medium hover:underline'>
            View our full menu
          </span>
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4'>
        {items.map((item, index) => (
          <MenuItemPreviewCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
}
