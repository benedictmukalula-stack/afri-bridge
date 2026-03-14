"use client";

import Link from "next/link";
import { useState } from "react";

type NavGroup = {
  label: string;
  href?: string;
  items?: { label: string; href: string; desc?: string }[];
};

const navGroups: NavGroup[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "Customs Clearing", href: "/services#customs", desc: "Import and export clearance support" },
      { label: "Freight Forwarding", href: "/services#freight", desc: "Road, air, sea and multimodal coordination" },
      { label: "Cross-Border Logistics", href: "/services#cross-border", desc: "Regional corridor cargo execution" },
      { label: "Trade Compliance", href: "/services#compliance", desc: "Documents, permits and process readiness" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    items: [
      { label: "Mining & Industrial", href: "/industries#mining" },
      { label: "Retail & FMCG", href: "/industries#retail" },
      { label: "Automotive", href: "/industries#automotive" },
      { label: "Project Cargo", href: "/industries#project-cargo" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Certificates", href: "/resources#certificates" },
      { label: "Documents", href: "/resources#documents" },
      { label: "Compliance", href: "/resources#compliance" },
      { label: "Trade Corridors", href: "/resources#corridors" },
    ],
  },
  { label: "Tracking", href: "/tracking" },
  { label: "Vehicle Export", href: "/vehicle-export" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-base font-bold text-slate-950 shadow-sm">
        AB
      </div>
      <div className="leading-tight">
        <div className="text-base font-semibold tracking-wide text-slate-950">
          AfriBridge
        </div>
        <div className="text-xs uppercase tracking-[0.18em] text-slate-500">
          Clearing & Logistics
        </div>
      </div>
    </Link>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-2 xl:flex">
          {navGroups.map((group) => {
            const hasItems = !!group.items?.length;

            if (!hasItems) {
              return (
                <Link
                  key={group.label}
                  href={group.href || "#"}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {group.label}
                </Link>
              );
            }

            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(group.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={group.href || "#"}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {group.label}
                  <span className="text-xs">▾</span>
                </Link>

                {openMenu === group.label && (
                  <div className="absolute left-0 top-full mt-2 w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                    <div className="grid gap-1">
                      {group.items?.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-xl px-4 py-3 transition hover:bg-slate-50"
                        >
                          <div className="text-sm font-semibold text-slate-900">
                            {item.label}
                          </div>
                          {item.desc ? (
                            <div className="mt-1 text-xs leading-5 text-slate-500">
                              {item.desc}
                            </div>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href="/login"
            className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Login
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 xl:hidden"
        >
          Menu
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="grid gap-3">
              {navGroups.map((group) => (
                <div key={group.label} className="rounded-2xl border border-slate-200 p-4">
                  <Link href={group.href || "#"} className="text-sm font-semibold text-slate-950">
                    {group.label}
                  </Link>
                  {group.items?.length ? (
                    <div className="mt-3 grid gap-2">
                      {group.items.map((item) => (
                        <Link key={item.href} href={item.href} className="text-sm text-slate-600">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              <div className="mt-2 flex gap-3">
                <Link
                  href="/login"
                  className="inline-flex items-center rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800"
                >
                  Login
                </Link>
                <Link
                  href="/quote"
                  className="inline-flex items-center rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
