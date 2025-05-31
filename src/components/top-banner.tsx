export default function Banner() {
  return (
    <div className='relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'>
      <div
        className='absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl'
        aria-hidden='true'
      >
        <div className='aspect-577/310 w-144.25 bg-linear-to-r from-red-700 to-slate-700 opacity-30'></div>
      </div>
      <div
        className='absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl'
        aria-hidden='true'
      >
        <div className='aspect-577/310 w-144.25 bg-linear-to-r from-red-700 to-slate-700 opacity-30'></div>
      </div>
      <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
        <p className='text-sm/6 text-gray-900'>
          <strong className='font-semibold'>Order Online</strong>
          <svg
            viewBox='0 0 2 2'
            className='mx-2 inline size-0.5 fill-current'
            aria-hidden='true'
          >
            <circle cx='1' cy='1' r='1' />
          </svg>
          Register and receive 10% off your first order!
        </p>
        <a
          href='https://stellapizzacherryhillnj.pdqonlineordering.com/'
          target='_blank'
          className='flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'
        >
          Register now <span aria-hidden='true'>&rarr;</span>
        </a>
      </div>
      <div className='flex flex-1 justify-end'>
        <button
          type='button'
          className='-m-3 p-3 focus-visible:-outline-offset-4'
        >
          <span className='sr-only'>Dismiss</span>
          <svg
            className='size-5 text-gray-900'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
            data-slot='icon'
          >
            <path d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z' />
          </svg>
        </button>
      </div>
    </div>
  );
}
