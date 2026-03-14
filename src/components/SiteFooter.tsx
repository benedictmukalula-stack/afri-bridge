import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-lg font-semibold text-slate-950">
            AfriBridge Clearing & Logistics
          </div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
            Enterprise customs clearing, freight forwarding, compliance support,
            corridor execution, and regional trade logistics solutions across Africa.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Company</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-slate-900">Actions</div>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/quote">Request Quote</Link>
            <Link href="/tracking">Track Shipment</Link>
            <Link href="/vehicle-export">Vehicle Export</Link>
            <Link href="/login">Client Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
