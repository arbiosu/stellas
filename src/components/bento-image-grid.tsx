import Image from 'next/image';

export default function BentoGridGallery() {
  return (
    <div className='container mx-auto p-10'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        {/* Regular square image */}
        <div className='overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>
          <div className='relative aspect-square'>
            <Image
              src='/stella-pepperoni.jpeg'
              alt='Thin crust pepperoni pizza, Stella Pizza Cherry Hill NJ'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
              unoptimized
            />
          </div>
        </div>

        <div className='overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>
          <div className='relative aspect-square'>
            <Image
              src='/stella-grandma.jpeg'
              alt='Thin crust Grandma pizza, Stella Pizza Cherry Hill NJ'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
              unoptimized
            />
          </div>
        </div>

        {/* Regular square image */}
        <div className='overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>
          <div className='relative aspect-square'>
            <Image
              src='/stella-burger.jpeg'
              alt='Cheeseburger Deluxe, Stella Pizza Cherry Hill NJ'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
              unoptimized
            />
          </div>
        </div>

        {/* Wide image spanning 2 columns */}
        <div className='overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg md:col-span-2'>
          <div className='relative aspect-[2/1]'>
            <Image
              src='/stella-turnover.jpeg'
              alt='Turnover, Stella Pizza Cherry Hill NJ'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
              unoptimized
            />
          </div>
        </div>

        {/* Regular square image */}
        <div className='overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>
          <div className='relative aspect-square'>
            <Image
              src='/stella-plain.jpeg'
              alt='Large Plain Cheese Pizza, Stella Pizza Cherry Hill NJ'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
              unoptimized
            />
          </div>
        </div>

        {/* Vertical image spanning 2 rows */}
        <div className='overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg md:row-span-2'>
          <div className='relative h-full'>
            <Image
              src='/stella-outside.jpeg'
              alt='Outside seating, Stella Pizza Cherry Hill NJ'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
              unoptimized
            />
          </div>
        </div>

        {/* Regular square image */}
        <div className='overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>
          <div className='relative aspect-square'>
            <Image
              src='/stella-brooklyn.jpeg'
              alt='Thin crust Brooklyn pizza, Stella Pizza Cherry Hill NJ'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </div>
        </div>
        <div className='overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>
          <div className='relative aspect-square'>
            <Image
              src='/stella-buffalo.jpeg'
              alt='Large Buffalo Chicken, Stella Pizza Cherry Hill NJ'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </div>
        </div>

        {/* Wide image spanning 2 columns */}
        <div className='overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg md:col-span-2'>
          <div className='relative aspect-[2/1]'>
            <Image
              src='/stellas-2.webp'
              alt='Garlic Knots, Stella Pizza Cherry Hill NJ'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </div>
        </div>

        <div className='overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>
          <div className='relative aspect-square'>
            <Image
              src='/stella-hoagie.jpeg'
              alt='Ham and Cheese Hoagie with pickles and banana peppers, Stella Pizza Cherry Hill NJ'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </div>
        </div>

        <div className='overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>
          <div className='relative aspect-square'>
            <Image
              src='/stella-panini.jpeg'
              alt='Chicken Parm Panini, Stella Pizza Cherry Hill NJ'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </div>
        </div>

        <div className='overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg'>
          <div className='relative aspect-square'>
            <Image
              src='/stella-sicillian.jpeg'
              alt='Thin crust plain sicilian, Stella Pizza Cherry Hill NJ'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, 33vw'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
