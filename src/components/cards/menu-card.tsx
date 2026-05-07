import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import RoundedButton from '../buttons/rounded-button';

interface MenuCardProps {
  imageSrc?: string;
  menuSrc: string;
  title?: string;
  subtitle?: string;
  offset?: number;
  isActive?: boolean;
}

export default function MenuCard({
  imageSrc,
  menuSrc,
  title,
  subtitle,
  offset = 0,
  isActive = true,
}: MenuCardProps) {
  return (
    <div
      className='shrink-0 snap-start transition-[transform,opacity] duration-300 ease-out'
      style={{
        transform: isActive
          ? 'scale(1) translateY(0)'
          : `scale(${0.92 - Math.min(Math.abs(offset) * 0.001, 0.16)}) translateY(${Math.min(Math.abs(offset) * 12, 32)}px)`,
        opacity: isActive ? 1 : 0.5 + Math.max(0, 0.3 - Math.abs(offset) * 0.1),
        zIndex: 20 - Math.abs(offset),
      }}
    >
      <Link
        href={menuSrc}
        target='_blank'
        rel='noopener noreferrer'
        prefetch={false}
        aria-label={`View ${title} section of menu`}
      >
        <Card className='relative h-120 max-w-2xs overflow-hidden rounded-2xl border-0 p-0 md:max-w-sm'>
          <Image
            src={imageSrc ?? '/placeholder.svg'}
            alt={subtitle ?? 'An image'}
            fill
            className='rounded-2xl object-cover'
            sizes='(max-width: 768px) 320px, 400px'
          />
          <div className='absolute inset-0 bg-black/40' />

          <div className='relative h-full w-full'>
            <CardContent className='relative flex h-full flex-col justify-end p-8 text-white'>
              <div>
                <h3 className='mb-2 text-5xl tracking-tight md:text-6xl'>
                  {title}
                </h3>
                <div className='flex items-end justify-between'>
                  <p className='text-lg opacity-90'>{subtitle}</p>
                  <RoundedButton size='sm' label='View' noAnimation />
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    </div>
  );
}
