import { Lora } from 'next/font/google';
import { Italiana } from 'next/font/google';

export const LORA_FONT = Lora({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

export const ITALIANA_FONT = Italiana({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-italiana',
});
