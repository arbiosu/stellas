import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
  { label: 'Order Online', href: '#' },
];

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-border bg-background text-foreground border-t'>
      {/* Main footer content */}
      <div className='container mx-auto max-w-5xl px-4 py-16'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
          {/* Brand column */}
          <div className='md:col-span-1'>
            <h3 className='font-serif text-2xl font-semibold tracking-tight'>
              Stella Pizza
            </h3>
            <p className='text-foreground/60 mt-3 text-sm leading-relaxed'>
              Authentic Italian pizza crafted with love in the heart of Cherry
              Hill since 2005.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className='text-foreground/40 text-xs font-semibold tracking-[0.2em] uppercase'>
              Quick Links
            </h4>
            <nav className='mt-5' aria-label='Footer navigation'>
              <ul className='space-y-3'>
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-foreground/60 hover:text-foreground text-sm transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h4 className='text-foreground/40 text-xs font-semibold tracking-[0.2em] uppercase'>
              Get in Touch
            </h4>
            <ul className='mt-5 space-y-4'>
              <li>
                <Link
                  href='https://maps.app.goo.gl/gEL6CG4fFpFyRLwW6'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group text-foreground/60 hover:text-foreground flex items-start gap-3 text-sm transition-colors'
                >
                  <MapPin className='text-foreground/40 group-hover:text-foreground/70 mt-0.5 h-4 w-4 shrink-0 transition-colors' />
                  <span>
                    219 Haddonfield-Berlin Rd.
                    <br />
                    Cherry Hill, NJ 08034
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href='tel:+18564280055'
                  className='group text-foreground/60 hover:text-foreground flex items-center gap-3 text-sm transition-colors'
                >
                  <Phone className='text-foreground/40 group-hover:text-foreground/70 h-4 w-4 shrink-0 transition-colors' />
                  <span>(856) 428-0055</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <Separator className='bg-primary-foreground/10' />
      <div className='container mx-auto max-w-5xl px-4 py-5'>
        <div className='text-primary-foreground/40 flex flex-col items-center justify-between gap-3 text-xs md:flex-row'>
          <p>&copy; {currentYear} Stella Pizza. All rights reserved.</p>
          <div className='flex items-center gap-4'>
            <Link
              href='#'
              className='hover:text-primary-foreground/60 transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='#'
              className='hover:text-primary-foreground/60 transition-colors'
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
