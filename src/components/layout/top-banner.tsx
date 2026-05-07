// source: https://flowbite.com/docs/components/banner/

'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      id='sticky-banner'
      tabIndex={-1}
      className='fixed start-0 top-0 z-50 flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4'
    >
      <div className='mx-auto flex items-center'>
        <p className='font-lora flex items-center text-gray-500'>
          <span className='me-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 p-1'>
            <svg
              className='h-3 w-3 text-gray-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 18 19'
            >
              <path d='M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z' />
            </svg>
            <span className='sr-only'>Light bulb</span>
          </span>
          <span>
            Join our online ordering and enjoy 10% off your first order!{' '}
            <Link
              href='https://stellapizzacherryhillnj.pdqonlineordering.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block rounded-xl bg-gradient-to-r from-black to-red-800 p-2 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl'
              prefetch={false}
            >
              Register Now
            </Link>
          </span>
        </p>
      </div>
      <div className='flex items-center'>
        <button
          data-dismiss-target='#sticky-banner'
          type='button'
          onClick={() => setIsVisible(false)}
          className='inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900'
        >
          <svg
            className='h-3 w-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
            />
          </svg>
          <span className='sr-only'>Close banner</span>
        </button>
      </div>
    </div>
  );
}
