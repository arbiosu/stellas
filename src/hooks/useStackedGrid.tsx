'use client';
import { useRef, useCallback, useEffect, useState } from 'react';

/**
 * Stacked Grid Scroll Logic
 */
export function useStackedGrid(length: number) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const scrollMid = el.scrollLeft + el.clientWidth / 2;
    let closest = 0,
      minDist = Infinity;
    children.forEach((child, i) => {
      const dist = Math.abs(
        child.offsetLeft + child.offsetWidth / 2 - scrollMid
      );
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex((prev) => (prev !== closest ? closest : prev));
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const scrollTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (!card) return;
    el.scrollTo({
      left: card.offsetLeft + card.offsetWidth / 2 - el.clientWidth / 2,
      behavior: 'smooth',
    });
  };

  return {
    scrollerRef,
    activeIndex,
    scrollTo,
    isFirst: activeIndex === 0,
    isLast: activeIndex === length - 1,
  };
}
