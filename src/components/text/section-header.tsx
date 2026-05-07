interface SectionHeaderProps {
  overline?: string;
  heading: string;
  subtitle: string;
}

export default function SectionHeader({
  overline,
  heading,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className='flex flex-col items-center gap-4 p-4 text-center'>
      <p className='mb-3 text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase'>
        {overline}
      </p>
      <h2 className='text-foreground font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl'>
        {heading}
      </h2>
      <p className='text-muted-foreground max-w-md text-sm leading-relaxed md:text-base'>
        {subtitle}
      </p>
    </div>
  );
}
