"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-2 rounded-xl">🏢</div>

          <span className="text-2xl font-bold italic">
            IQAMATI
            <span className="text-blue-600">.com</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/search"
            className="hidden md:block text-slate-600 font-bold hover:text-blue-600 transition"
          >
            البحث
          </Link>

          <Link
            href="/auth"
            className="hidden md:block text-slate-600 font-bold hover:text-blue-600 transition"
          >
            دخول
          </Link>

          <Link
            href="/publish"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-blue-700 transition"
          >
            انشر عرضك 🚀
          </Link>
        </div>
      </div>
    </nav>
  );
}
