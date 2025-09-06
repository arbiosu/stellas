import type { Metadata } from 'next';
import { ITALIANA_FONT, LORA_FONT } from '../../public/fonts/font';
import './globals.css';

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
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${ITALIANA_FONT.variable} ${LORA_FONT.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
