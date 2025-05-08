// app/layout.tsx (server component — no 'use client' here)
import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Job Board',
  description: 'Find and post tech jobs easily',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="p-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
