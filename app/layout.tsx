import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';

import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const quickSand = Quicksand({
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: 'Sho Coffee & Bar',
  description: 'The new home of coffee and cocktails in Winnipeg, Manitoba.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quickSand.className}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
