'use client';
import { useRef, useEffect, useCallback, useState } from 'react';

export function useStackedGrid(length: number) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const rafId = useRef<number | null>(null);
  const scrollEndTimer = useRef<number | null>(null);

  // activeIndex is still useful for things OUTSIDE the scroll (dots, prev/next button state)
  // but it does NOT drive card visuals
  const [activeIndex, setActiveIndex] = useState(0);

  const updateCards = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const scrollMid = el.scrollLeft + el.clientWidth / 2;
    let closestIdx = 0;
    let minDist = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardMid = card.offsetLeft + card.offsetWidth / 2;
      const offset = cardMid - scrollMid; // signed distance from center, in px
      const absOffset = Math.abs(offset);

      // Active = the card closest to center
      // Use a threshold so there's a clear "active zone"
      const isActive = absOffset < card.offsetWidth / 2;

      const scale = isActive ? 1 : 0.92 - Math.min(absOffset * 0.001, 0.16);
      const translateY = isActive ? 0 : Math.min(absOffset * 0.04, 32);
      const opacity = isActive ? 1 : 0.5 + Math.max(0, 0.3 - absOffset * 0.002);

      // Direct DOM write — no React, no reflow (transform/opacity are composited)
      card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      card.style.opacity = String(opacity);
      card.style.zIndex = String(20 - Math.round(absOffset / 50));

      if (absOffset < minDist) {
        minDist = absOffset;
        closestIdx = i;
      }
    });

    // Update React state ONLY when the closest card changes,
    // and only for things that don't visually affect the cards
    setActiveIndex((prev) => (prev !== closestIdx ? closestIdx : prev));
  }, []);

  const tick = useCallback(() => {
    updateCards();
    rafId.current = requestAnimationFrame(tick);
  }, [updateCards]);

  const onScroll = useCallback(() => {
    if (rafId.current === null) {
      rafId.current = requestAnimationFrame(tick);
    }
    if (scrollEndTimer.current) window.clearTimeout(scrollEndTimer.current);
    scrollEndTimer.current = window.setTimeout(() => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
      updateCards(); // one final update to ensure everything settles
    }, 120);
  }, [tick, updateCards]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener('scroll', onScroll, { passive: true });

    // Initial paint
    updateCards();

    return () => {
      el.removeEventListener('scroll', onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      if (scrollEndTimer.current) window.clearTimeout(scrollEndTimer.current);
    };
  }, [onScroll, updateCards]);

  // Re-run on length change so new cards get styled immediately
  useEffect(() => {
    updateCards();
  }, [length, updateCards]);

  const registerCard = useCallback((index: number, el: HTMLElement | null) => {
    cardRefs.current[index] = el;
  }, []);

  const scrollTo = (index: number) => {
    const el = scrollerRef.current;
    const card = cardRefs.current[index];
    if (!el || !card) return;
    el.scrollTo({
      left: card.offsetLeft + card.offsetWidth / 2 - el.clientWidth / 2,
      behavior: 'smooth',
    });
  };

  return {
    scrollerRef,
    activeIndex,
    scrollTo,
    registerCard,
    isFirst: activeIndex === 0,
    isLast: activeIndex === length - 1,
  };
}
