'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetHeader,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/layout/theme-toggle';

const navLinks = [{ href: '/gallery', label: 'Gallery' }];

/**
 * Standard Navbar
 * Brand - Nav Links - CTA Button + Theme Toggle
 * Mobile: Brand - Hamburger Menu with same above
 * Uses Shadcn Sheet - animation kind of slow and buggy - speed up?
 * Come back to this - hate navbars
 */
export function Navbar() {
  /**
   * Use this combined with cn utility to simulate hover state in mobile
   */
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className='bg-background font-lora fixed z-50 w-full border-b'>
      <div className='container mx-auto flex h-16 items-center justify-between'>
        <Link href='/' className='px-1 text-xl font-bold tracking-tight'>
          Stella Pizza Cherry Hill
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden items-center justify-between gap-6 md:flex'>
          {navLinks.map(({ href, label }) => (
            <Link
              key={label + href}
              href={href}
              className={cn(
                'hover:text-foreground/80 text-sm font-medium transition-colors',
                pathname === href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className='hidden items-center gap-2 md:flex'>
          <Button asChild size={'lg'} className='max-w-lg'>
            <Link
              href='https://stellapizzacherryhillnj.pdqonlineordering.com/'
              target='_blank'
            >
              <FileText />
              Order Online
            </Link>
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile Hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' size='icon'>
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='font-main w-70 sm:w-87.5'>
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className='font-lora flex flex-col gap-6 p-2 pt-6'>
              <Link
                href='/'
                className='text-xl font-bold'
                onClick={() => setOpen(false)}
              >
                Stella Pizza Cherry Hill
              </Link>
              <nav className='flex flex-col gap-4'>
                {navLinks.map(({ href, label }) => (
                  <SheetClose asChild key={href + label}>
                    <Link
                      href={href}
                      className={cn(
                        'hover:text-foreground text-base font-medium transition-colors',
                        pathname === href
                          ? 'text-foreground'
                          : 'text-foreground/60'
                      )}
                    >
                      {label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className='mt-4 flex flex-col gap-2'>
                <Button asChild size={'lg'} className='max-w-lg'>
                  <Link
                    href='https://stellapizzacherryhillnj.pdqonlineordering.com/'
                    target='_blank'
                  >
                    <FileText />
                    Order Online
                  </Link>
                </Button>
                <ModeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
