import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const gridVariants = cva(
  'grid w-full snap-x snap-mandatory auto-cols-max grid-flow-col overflow-x-auto overflow-y-hidden lg:auto-cols-auto lg:grid-flow-row lg:overflow-visible',
  {
    variants: {
      cols: {
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
      },
      gap: {
        sm: 'gap-2 lg:gap-4',
        md: 'gap-4 lg:gap-6',
        lg: 'gap-6 lg:gap-8',
      },
      density: {
        compact: 'p-2',
        normal: 'p-4',
        loose: 'p-6',
      },
    },
    defaultVariants: {
      cols: 3,
      gap: 'lg',
      density: 'compact',
    },
  }
);

interface SlidingCardGridProps extends VariantProps<typeof gridVariants> {
  children: React.ReactNode;
  className?: string;
}

export default function SlidingCardGrid({
  children,
  cols,
  gap,
  density,
  className,
}: SlidingCardGridProps) {
  return (
    <div className={cn(gridVariants({ cols, gap, density }), className)}>
      {children}
    </div>
  );
}
