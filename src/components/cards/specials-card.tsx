import Image from 'next/image';
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
  CardFooter,
} from '../ui/card';
import { cn } from '@/lib/utils';

interface SpecialsCardProps {
  index: number;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  offset?: number;
  isActive?: boolean;
}

export function SpecialCard({
  index,
  title,
  description,
  price,
  imageSrc,
  imageAlt,
}: SpecialsCardProps) {
  return (
    <div
      className={cn(
        index === 1 ? 'lg:-translate-y-6 lg:scale-105' : '',
        'w-80'
      )}
    >
      <Card className='pt-0'>
        <CardContent className='relative aspect-square'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className='rounded-t-2xl object-cover'
            sizes='(max-width: 768px) 100vw, 33vw'
            unoptimized
          />
          <span className='text-foreground/20 absolute top-4 left-4 font-serif text-5xl leading-none font-bold'>
            0{index + 1}
          </span>
        </CardContent>
        <CardHeader>
          <CardTitle className='text-foreground font-serif text-xl leading-tight font-semibold text-balance'>
            {title}
          </CardTitle>
          <CardDescription className='text-muted-foreground text-sm leading-relaxed'>
            {description}
          </CardDescription>
        </CardHeader>
        <CardFooter className='text-primary font-serif text-2xl font-bold'>
          {price}
        </CardFooter>
      </Card>
    </div>
  );
}
