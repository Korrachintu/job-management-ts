// src/components/Header.tsx
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          J
        </div>
        <h1 className="text-xl font-semibold text-gray-800">JobBoard</h1>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
        <Link href="/" className="hover:text-purple-600">Home</Link>
        <Link href="/jobs" className="hover:text-purple-600">Find Jobs</Link>
        <Link href="/talent" className="hover:text-purple-600">Find Talents</Link>
        <Link href="/about" className="hover:text-purple-600">About us</Link>
        <Link href="/testimonials" className="hover:text-purple-600">Testimonials</Link>
      </nav>

      <Link
        href="/create"
        className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-purple-700 transition"
      >
        Create Jobs
      </Link>
    </header>
  );
}
