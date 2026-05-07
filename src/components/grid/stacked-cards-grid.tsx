import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// TODO: add variants?
const gridVariants = cva('', {
  variants: {},
});

interface StackedCardsGridProps extends VariantProps<typeof gridVariants> {
  scrollerRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
  className?: string;
}

export default function StackedCardsGrid({
  scrollerRef,
  children,
  className,
}: StackedCardsGridProps) {
  return (
    <div
      ref={scrollerRef}
      className={cn(
        'scrollbar-hide flex snap-x snap-mandatory overflow-x-auto pr-[80%] pb-6',
        className
      )}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {children}
    </div>
  );
}
