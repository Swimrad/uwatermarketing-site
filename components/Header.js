// components/Header.js
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/**
 * White (light) sticky header
 * - Works on white background; no white-on-white text
 * - Buttons adapted for light theme
 * - Clean dropdowns; accessible; mobile sheet uses white
 * - Logo box blends on white header (put your logo at /public/logo.png)
 */
const nav = {
  solutions: [
    { label: "Clubs & Leagues", href: "/solutions/clubs" },
    { label: "Studios (Gym/Swim/MA/Dance)", href: "/solutions/studios" },
  ],
  outcomes: [
    { label: "Lead Generation", href: "/outcomes/lead-generation" },
    { label: "Retention & Payments", href: "/outcomes/retention" },
  ],
  resources: [
    { label: "Case Study: Dorado Swim", href: "/case-studies/dorado" },
    { label: "Guides & Templates", href: "/resources" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

function DesktopNav() {
  const item = "text-sm leading-6 text-slate-800 hover:text-black";
  const panel =
    "absolute left-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-2xl";
  const link =
    "block rounded-lg px-3 py-2 text-sm text-slate-800 hover:bg-slate-100";
  return (
    <nav className="hidden items-center gap-6 lg:flex">
      <details className="group relative">
        <summary className={`${item} cursor-pointer list-none`}>Solutions</summary>
        <div className={panel}>
          {nav.solutions.map((i) => (
            <Link key={i.href} href={i.href} className={link}>
              {i.label}
            </Link>
          ))}
        </div>
      </details>

      <details className="group relative">
        <summary className={`${item} cursor-pointer list-none`}>Outcomes</summary>
        <div className={panel}>
          {nav.outcomes.map((i) => (
            <Link key={i.href} href={i.href} className={link}>
              {i.label}
            </Link>
          ))}
        </div>
      </details>

      <Link href="/pricing" className={item}>Pricing</Link>

      <details className="group relative">
        <summary className={`${item} cursor-pointer list-none`}>Resources</summary>
        <div className="absolute left-0 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-2xl">
          {nav.resources.map((i) => (
            <Link key={i.href} href={i.href} className={link}>
              {i.label}
            </Link>
          ))}
        </div>
      </details>

      <details className="group relative">
        <summary className={`${item} cursor-pointer list-none`}>Company</summary>
        <div className={panel.replace("w-64", "w-56")}>
          {nav.company.map((i) => (
            <Link key={i.href} href={i.href} className={link}>
              {i.label}
            </Link>
          ))}
        </div>
      </details>

      <Link href="/login" className={item}>Login</Link>
    </nav>
  );
}

function CTAs() {
  const base = "text-sm leading-6 font-semibold px-4 py-2 rounded-xl transition";
  return (
    <div className="hidden items-center gap-3 lg:flex">
      {/* Secondary on white: teal outline / light fill on hover */}
      <Link
        href="#demo"
        aria-label="Book a Demo"
        className={`${base} border border-teal-500/40 text-teal-700 hover:bg-teal-50`}
      >
        Book a Demo
      </Link>
      {/* Primary on white: emerald solid */}
      <Link
        href="#start"
        aria-label="Start Quickstart"
        className={`${base} bg-emerald-500 text-white shadow-lg shadow-emerald-200/40 hover:bg-emerald-600`}
      >
        Start Quickstart
      </Link>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/logo.png"); // white-box logo blends on white header

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3" aria-label="Underwater Marketing Home">
          <div className="relative h-12 w-12 shrink-0">
            <Image
              src={logoSrc}
              alt="Underwater Marketing"
              fill
              sizes="48px"
              priority
              onError={() => setLogoSrc("/logo.png")}
            />
          </div>
          <span className="select-none text-base font-semibold leading-6 tracking-tight text-slate-900">
            Underwater Marketing
          </span>
        </Link>

        <DesktopNav />
        <CTAs />

        {/* Mobile toggle */}
        <button
          className="lg:hidden rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>

      {/* Mobile sheet (white) */}
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="grid gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500">Solutions</div>
                {nav.solutions.map((i) => (
                  <Link key={i.href} href={i.href} className="block rounded-lg px-2 py-2 text-sm text-slate-800 hover:bg-slate-100">
                    {i.label}
                  </Link>
                ))}
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500">Outcomes</div>
                {nav.outcomes.map((i) => (
                  <Link key={i.href} href={i.href} className="block rounded-lg px-2 py-2 text-sm text-slate-800 hover:bg-slate-100">
                    {i.label}
                  </Link>
                ))}
              </div>

              <Link href="/pricing" className="rounded-lg px-2 py-2 text-sm text-slate-800 hover:bg-slate-100">
                Pricing
              </Link>

              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500">Resources</div>
                {nav.resources.map((i) => (
                  <Link key={i.href} href={i.href} className="block rounded-lg px-2 py-2 text-sm text-slate-800 hover:bg-slate-100">
                    {i.label}
                  </Link>
                ))}
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500">Company</div>
                {nav.company.map((i) => (
                  <Link key={i.href} href={i.href} className="block rounded-lg px-2 py-2 text-sm text-slate-800 hover:bg-slate-100">
                    {i.label}
                  </Link>
                ))}
              </div>

              <Link href="/login" className="rounded-lg px-2 py-2 text-sm text-slate-800 hover:bg-slate-100">
                Login
              </Link>

              <div className="mt-2 flex gap-3">
                <Link href="#demo" className="flex-1 rounded-xl border border-teal-500/40 px-4 py-2 text-center text-sm font-semibold text-teal-700 hover:bg-teal-50">
                  Book a Demo
                </Link>
                <Link href="#start" className="flex-1 rounded-xl bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-600">
                  Start Quickstart
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
