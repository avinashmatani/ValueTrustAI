import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import SiteNav from "./components/SiteNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valuetrustai.com"),
  title: {
    default: "ValueTrustAI",
    template: "%s | ValueTrustAI",
  },
  description: "Intelligence you can act on.",
  openGraph: {
    title: {
      default: "ValueTrustAI",
      template: "%s | ValueTrustAI",
    },
    description: "Intelligence you can act on.",
    url: "https://valuetrustai.com",
    siteName: "ValueTrustAI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-black text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white">
        <div className="flex min-h-screen flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-black/80 backdrop-blur-md">
            <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <Link
                href="/"
                className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
              >
                ValueTrustAI
              </Link>
              <SiteNav />
            </div>
          </header>

          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-zinc-800 bg-black py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {/* Brand */}
                <div className="sm:col-span-1">
                  <Link href="/" className="text-lg font-bold tracking-tight text-white">
                    ValueTrustAI
                  </Link>
                  <p className="mt-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
                    Intelligence you can act on.
                  </p>
                </div>

                {/* Navigation */}
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-600">Navigation</h3>
                  <nav aria-label="Footer navigation" className="mt-4 flex flex-col gap-2.5">
                    {[
                      { href: "/services", label: "Services" },
                      { href: "/about", label: "About" },
                      { href: "/blog", label: "Blog" },
                      { href: "/contact", label: "Contact" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="font-mono text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
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
      </body>
    </html>
  );
}
