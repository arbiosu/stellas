import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type RoundedButtonProps = {
  label: string;
  href?: string;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  noAnimation?: boolean;
  className?: string;
  onClick?: () => void;
};

const sizeStyles = {
  sm: {
    base: 'h-9 ps-4 pe-10 text-xs',
    icon: 'h-7 w-7 right-1',
    iconSize: 12,
    hover: 'group-hover:right-[calc(100%-32px)]',
    paddingHover: 'hover:ps-10 hover:pe-4',
  },
  md: {
    base: 'h-12 ps-6 pe-14 text-sm',
    icon: 'h-10 w-10 right-1',
    iconSize: 16,
    hover: 'group-hover:right-[calc(100%-44px)]',
    paddingHover: 'hover:ps-14 hover:pe-6',
  },
  lg: {
    base: 'h-14 ps-8 pe-16 text-base',
    icon: 'h-12 w-12 right-1',
    iconSize: 20,
    hover: 'group-hover:right-[calc(100%-52px)]',
    paddingHover: 'hover:ps-16 hover:pe-8',
  },
};

const variantStyles = {
  default: {
    button: '',
    icon: 'bg-background text-foreground',
  },
  outline: {
    button:
      'bg-transparent border border-foreground text-foreground hover:bg-transparent',
    icon: 'bg-foreground text-background',
  },
};

export default function RoundedButton({
  label,
  href,
  variant = 'default',
  size = 'md',
  noAnimation = false,
  className,
  onClick,
}: RoundedButtonProps) {
  const sizes = sizeStyles[size];
  const variants = variantStyles[variant];

  const buttonContent = (
    <Button
      onClick={onClick}
      className={cn(
        'group relative w-fit cursor-pointer overflow-hidden rounded-full p-1 font-medium',
        sizes.base,
        variants.button,
        !noAnimation && 'transition-all duration-500',
        !noAnimation && sizes.paddingHover,
        className
      )}
    >
      <span
        className={cn(
          'relative z-10',
          !noAnimation && 'transition-all duration-500'
        )}
      >
        {label}
      </span>
      <div
        className={cn(
          'absolute flex items-center justify-center rounded-full',
          sizes.icon,
          variants.icon,
          !noAnimation && 'transition-all duration-500',
          !noAnimation && sizes.hover,
          !noAnimation && 'group-hover:rotate-45'
        )}
      >
        <ArrowUpRight size={sizes.iconSize} />
      </div>
    </Button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
}
