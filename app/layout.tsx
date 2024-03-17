import type { Metadata } from 'next';
import { Outfit, Roboto_Mono } from 'next/font/google';
import './globals.css';

import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Toaster } from 'sonner';

const quickSand = Outfit({
  subsets: ['latin-ext'],
});

const roboto = Roboto_Mono({
  subsets: ['cyrillic-ext'],
  variable: '--year-font',
});

export const metadata: Metadata = {
  title: 'Sho Coffee & Bar',
  description: 'The new home of coffee and cocktails in Winnipeg, Manitoba.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${quickSand.className}`}>
      <body>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
