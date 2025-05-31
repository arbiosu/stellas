import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className='w-full border-t py-6 md:py-0'>
      <div className='container flex flex-col items-center justify-between gap-4 px-4 md:h-16 md:flex-row md:px-6'>
        <p className='text-sm text-gray-500'>
          © 2025 Stella Pizza Cherry Hill. All rights reserved.
        </p>
        <div className='flex items-center gap-4'>
          <Link
            href='tel:8564280055'
            className='text-sm text-gray-500 hover:underline'
          >
            (856) 428-0055
          </Link>
          <Link
            href='https://stellapizzacherryhillnj.pdqonlineordering.com/'
            className='text-sm text-gray-500 hover:underline'
          >
            Order Online
          </Link>
        </div>
      </div>
    </footer>
  );
}
