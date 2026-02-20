import { Separator } from '@/components/ui/separator';
import { SpecialCard } from '@/components/specials/specials-card';
import { specials } from '@/lib/specials';

export function DailySpecials() {
  return (
    <section className='mx-auto w-full max-w-7xl px-4 py-16 md:py-24'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <p className='mb-3 text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase'>
          Everyday Specials
        </p>
        <h2 className='text-foreground font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl'>
          Daily Specials
        </h2>
        <p className='text-muted-foreground max-w-md text-sm leading-relaxed md:text-base'>
          Available everyday. Walk-in only!
        </p>
      </div>

      <Separator className='bg-border/60 mx-auto my-10 max-w-xs md:my-14' />

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {specials.map((special) => (
          <SpecialCard key={special.number} {...special} />
        ))}
      </div>

      <p className='text-muted-foreground/60 mt-10 text-center font-sans text-xs tracking-wide md:mt-14'>
        Specials available while supplies last.
      </p>
    </section>
  );
}
