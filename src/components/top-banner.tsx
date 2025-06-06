'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className='relative isolate flex items-center gap-x-6 overflow-hidden border-b border-gray-200 bg-gradient-to-r from-red-50 via-white to-green-50 px-6 py-3 shadow-sm sm:px-3.5'>
      {/* Animated background elements */}
      <div
        className='absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu animate-pulse blur-2xl'
        aria-hidden='true'
      >
        <div className='aspect-square w-36 rounded-full bg-gradient-to-r from-red-400 to-red-600 opacity-20'></div>
      </div>
      <div
        className='absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu animate-pulse blur-2xl'
        aria-hidden='true'
        style={{ animationDelay: '1s' }}
      >
        <div className='aspect-square w-36 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 opacity-20'></div>
      </div>

      <div className='flex flex-1 flex-wrap items-center gap-x-4 gap-y-2'>
        <div className='flex items-center gap-2'>
          <div className='h-2 w-2 animate-bounce rounded-full bg-red-500'></div>
          <p className='text-sm font-medium text-gray-900'>
            <strong className='font-bold text-red-700'>🍕 Order Online</strong>
            <span className='mx-2 text-gray-400'>•</span>
            <span className='text-gray-700'>Register and receive </span>
            <span className='rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700'>
              10% OFF
            </span>
            <span className='text-gray-700'> your first order!</span>
          </p>
        </div>
      </div>

      <a
        href='https://stellapizzacherryhillnj.pdqonlineordering.com/'
        target='_blank'
        rel='noopener noreferrer'
        className='group flex-none transform rounded-full bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-red-700 hover:to-red-800 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
      >
        <span className='flex items-center gap-2'>
          Register Now
          <span
            className='transition-transform duration-200 group-hover:translate-x-1'
            aria-hidden='true'
          >
            →
          </span>
        </span>
      </a>

      <button
        type='button'
        onClick={() => setIsVisible(false)}
        className='group -m-3 rounded-full p-3 transition-colors duration-200 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400'
        aria-label='Dismiss banner'
      >
        <X
          className='h-5 w-5 text-gray-500 transition-colors duration-200 group-hover:text-gray-700'
          aria-hidden='true'
        />
      </button>
    </div>
  );
}
