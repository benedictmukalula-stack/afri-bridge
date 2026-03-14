import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/vehicle-export", label: "Vehicle Export" },
  { href: "/tracking", label: "Tracking" },
  { href: "/quote", label: "Request Quote" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-sm font-bold text-slate-950">
            AB
          </div>
          <div>
            <div className="text-sm font-semibold tracking-wide text-slate-900">
              AfriBridge
            </div>
            <div className="text-xs text-slate-500">
              Clearing & Logistics
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 sm:inline-flex"
          >
            Contact
          </Link>
          <Link
            href="/quote"
            className="inline-flex rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Request Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-100 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-6 py-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-slate-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
