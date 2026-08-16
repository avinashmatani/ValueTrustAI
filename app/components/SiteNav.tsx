"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav */}
      <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-xs font-mono tracking-widest uppercase text-zinc-400 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="ml-4 border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((o) => !o)}
        className="flex md:hidden items-center justify-center h-9 w-9 text-zinc-400 hover:text-white transition-colors"
      >
        {menuOpen ? (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        )}
      </button>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black border-t border-zinc-800 px-4 pb-4 pt-2 flex flex-col gap-1 md:hidden z-50">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 border border-zinc-700 bg-zinc-900/50 px-3 py-3 text-center font-mono text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
