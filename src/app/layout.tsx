import type { Metadata } from 'next';
import { ITALIANA_FONT, LORA_FONT } from '../../public/fonts/font';
import { Navbar } from '@/components/layout/navbar';
import SiteFooter from '@/components/layout/footer';
import { ThemeProvider } from '@/components/layout/theme-provider';
import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: 'Stella Pizza Cherry Hill New Jersey',
  description: 'Stella Pizza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body
        className={`${ITALIANA_FONT.variable} ${LORA_FONT.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
