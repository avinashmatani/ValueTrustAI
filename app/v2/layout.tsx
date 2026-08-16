import Link from "next/link";

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-zinc-300 selection:bg-zinc-800 selection:text-white">
      {/* V2 Dark Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/v2"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
          >
            VALUETRUST_AI
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Services", href: "/v2/services" },
              { label: "About", href: "/v2/about" },
              { label: "Blog", href: "/v2/blog" },
            ].map((item) => (
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
        </div>
      </header>
      
      <main className="flex-1">{children}</main>

      {/* V2 Dark Footer */}
      <footer className="border-t border-zinc-800/50 bg-black py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link
              href="/v2"
              className="text-lg font-bold tracking-tight text-white"
            >
              VALUETRUST_AI
            </Link>
            <p className="mt-2 font-mono text-xs text-zinc-500 uppercase tracking-widest">
              Built for production.
            </p>
          </div>
          <div className="font-mono text-xs text-zinc-600 uppercase tracking-widest flex items-end">
            &copy; {new Date().getFullYear()} ValueTrustAI.
          </div>
        </div>
      </footer>
    </div>
  );
}
