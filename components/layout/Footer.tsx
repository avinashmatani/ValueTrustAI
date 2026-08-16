import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div className="sm:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              <span className="text-indigo-600">Value</span>TrustAI
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
              Intelligent solutions built on a foundation of trust, transparency, and results.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Navigation
            </h3>
            <nav aria-label="Footer navigation" className="mt-4 flex flex-col gap-2.5">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-gray-600">
              <li>
                <a
                  href="mailto:hello@valuetrustai.com"
                  className="hover:text-indigo-600 transition-colors"
                >
                  hello@valuetrustai.com
                </a>
              </li>
              <li className="text-gray-500">
                Available Mon–Fri, 9am–6pm AEST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            &copy; {year} ValueTrustAI. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
