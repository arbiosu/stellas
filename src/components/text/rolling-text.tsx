'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export type RollerItem = {
  text: string;
  className?: string;
};

type AnimatedTextRollerProps = {
  items: RollerItem[];
  prefix?: string;
  interval?: number;
  duration?: number;
  /** Line height in rem — must match the h-* class used internally */
  lineHeightRem?: number;
  /** Tailwind text size classes applied to both prefix and rolling items */
  textSize?: string;
  prefixClassName?: string;
  itemClassName?: string;
  className?: string;
  pauseOnHover?: boolean;
};

const AnimatedTextRoller = ({
  items,
  prefix,
  interval = 2000,
  duration = 700,
  lineHeightRem = 2,
  textSize = 'text-xl sm:text-2xl',
  prefixClassName,
  itemClassName,
  className,
  pauseOnHover = false,
}: AnimatedTextRollerProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [items.length, interval, paused]);

  if (items.length === 0) return null;

  return (
    <div
      className={cn('flex flex-wrap items-center gap-2', className)}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      {prefix && (
        <p className={cn('text-foreground', textSize, prefixClassName)}>
          {prefix}
        </p>
      )}
      <div
        className='overflow-hidden text-center'
        style={{ height: `${lineHeightRem}rem` }}
      >
        <div
          className='ease-in-out'
          style={{
            transform: `translateY(-${index * lineHeightRem}rem)`,
            transition: `transform ${duration}ms`,
          }}
        >
          {items.map((item, i) => (
            <p
              key={i}
              className={cn(
                'flex items-center justify-start',
                textSize,
                itemClassName,
                item.className
              )}
              style={{ height: `${lineHeightRem}rem` }}
            >
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedTextRoller;
