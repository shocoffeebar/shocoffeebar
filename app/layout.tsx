import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';

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
      <body className={quickSand.className}>{children}</body>
    </html>
  );
}
