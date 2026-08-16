"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/v2/services", label: "Services" },
  { href: "/v2/about", label: "About" },
  { href: "/v2/blog", label: "Blog" },
];

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-black text-zinc-300 selection:bg-zinc-800 selection:text-white">
      {/* V2 Dark Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/v2"
            className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
          >
            ValueTrustAI
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="V2 main navigation" className="hidden md:flex items-center gap-8">
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
              href="/v2/contact"
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
        </div>

        {/* Mobile menu panel */}
        {menuOpen && (
          <nav
            aria-label="V2 mobile navigation"
            className="flex flex-col bg-black border-t border-zinc-800 px-4 pb-4 pt-2 gap-1 md:hidden"
          >
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
              href="/v2/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 border border-zinc-700 bg-zinc-900/50 px-3 py-3 text-center font-mono text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
            >
              Contact
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* V2 Dark Footer */}
      <footer className="border-t border-zinc-800 bg-black py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {/* Brand */}
            <div className="sm:col-span-1">
              <Link href="/v2" className="text-lg font-bold tracking-tight text-white">
                ValueTrustAI
              </Link>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
                Intelligence you can act on.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-600">Navigation</h3>
              <nav className="mt-4 flex flex-col gap-2.5">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/v2/contact"
                  className="font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-600">Contact</h3>
              <div className="mt-4 flex flex-col gap-2.5">
                <a
                  href="mailto:hello@valuetrustai.com"
                  className="font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                >
                  hello@valuetrustai.com
                </a>
                <p className="font-mono text-xs text-zinc-700">
                  Mon–Fri, 9am–6pm AEST
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-mono text-xs text-zinc-700">
              &copy; {new Date().getFullYear()} ValueTrustAI. All rights reserved.
            </p>
            <p className="font-mono text-xs text-zinc-700">
              Built with Next.js &amp; Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
