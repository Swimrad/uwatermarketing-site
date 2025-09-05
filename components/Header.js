// components/Header.js
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/**
 * One sticky header. No second nav. Even spacing. Baseline aligned.
 * Buttons: Primary = green, Secondary = teal (brand).
 * Logo height = 48px.
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
  return (
    <nav className="hidden items-center gap-6 lg:flex">
      <details className="group relative">
        <summary className="cursor-pointer list-none text-sm leading-6 text-white/90 hover:text-white">
          Solutions
        </summary>
        <div className="absolute left-0 mt-2 w-64 rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur">
          {nav.solutions.map((i) => (
            <Link key={i.href} href={i.href} className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">
              {i.label}
            </Link>
          ))}
        </div>
      </details>

      <details className="group relative">
        <summary className="cursor-pointer list-none text-sm leading-6 text-white/90 hover:text-white">
          Outcomes
        </summary>
        <div className="absolute left-0 mt-2 w-64 rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur">
          {nav.outcomes.map((i) => (
            <Link key={i.href} href={i.href} className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">
              {i.label}
            </Link>
          ))}
        </div>
      </details>

      <Link href="/pricing" className="text-sm leading-6 text-white/90 hover:text-white">Pricing</Link>

      <details className="group relative">
        <summary className="cursor-pointer list-none text-sm leading-6 text-white/90 hover:text-white">
          Resources
        </summary>
        <div className="absolute left-0 mt-2 w-72 rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur">
          {nav.resources.map((i) => (
            <Link key={i.href} href={i.href} className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">
              {i.label}
            </Link>
          ))}
        </div>
      </details>

      <details className="group relative">
        <summary className="cursor-pointer list-none text-sm leading-6 text-white/90 hover:text-white">
          Company
        </summary>
        <div className="absolute left-0 mt-2 w-56 rounded-xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur">
          {nav.company.map((i) => (
            <Link key={i.href} href={i.href} className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">
              {i.label}
            </Link>
          ))}
        </div>
      </details>

      <Link href="/login" className="text-sm leading-6 text-white/90 hover:text-white">Login</Link>
    </nav>
  );
}

function CTAs() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      {/* Secondary (teal) */}
      <Link
        href="#book-demo"
        className="rounded-xl border border-teal-400/40 bg-teal-400/10 px-4 py-2 text-sm font-semibold text-teal-200 hover:bg-teal-400/20"
        aria-label="Book a 15-min Demo"
      >
        Book a 15-min Demo
      </Link>
      {/* Primary (green) */}
      <Link
        href="#start-quickstart"
        className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-emerald-500/25 hover:bg-emerald-400"
        aria-label="Start Quickstart"
      >
        Start Quickstart
      </Link>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/logo.png"); // place your logo in /public/logo.png

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
        {/* Left: Logo + brand */}
        <Link href="/" className="flex items-center gap-3" aria-label="Underwater Marketing Home">
          <div className="relative h-12 w-12 shrink-0"> {/* 48px */}
            <Image
              src={logoSrc}
              alt="Underwater Marketing"
              fill
              sizes="48px"
              priority
              onError={() => setLogoSrc("/logo.png")}
            />
          </div>
          <span className="select-none text-base font-semibold leading-6 tracking-tight text-white">
            Underwater Marketing
          </span>
        </Link>

        {/* Middle: Desktop nav */}
        <DesktopNav />

        {/* Right: CTAs */}
        <CTAs />

        {/* Mobile toggle */}
        <button
          className="lg:hidden rounded-lg border border-white/15 bg-white/5 p-2 text-white/90"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-black/95 lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="grid gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">Solutions</div>
                {nav.solutions.map((i) => (
                  <Link key={i.href} href={i.href} className="block rounded-lg px-2 py-2 text-sm text-white/90 hover:bg-white/10">
                    {i.label}
                  </Link>
                ))}
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">Outcomes</div>
                {nav.outcomes.map((i) => (
                  <Link key={i.href} href={i.href} className="block rounded-lg px-2 py-2 text-sm text-white/90 hover:bg-white/10">
                    {i.label}
                  </Link>
                ))}
              </div>
              <Link href="/pricing" className="rounded-lg px-2 py-2 text-sm text-white/90 hover:bg-white/10">Pricing</Link>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">Resources</div>
                {nav.resources.map((i) => (
                  <Link key={i.href} href={i.href} className="block rounded-lg px-2 py-2 text-sm text-white/90 hover:bg-white/10">
                    {i.label}
                  </Link>
                ))}
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">Company</div>
                {nav.company.map((i) => (
                  <Link key={i.href} href={i.href} className="block rounded-lg px-2 py-2 text-sm text-white/90 hover:bg-white/10">
                    {i.label}
                  </Link>
                ))}
              </div>
              <Link href="/login" className="rounded-lg px-2 py-2 text-sm text-white/90 hover:bg-white/10">Login</Link>

              <div className="mt-2 flex gap-3">
                <Link href="#book-demo" className="flex-1 rounded-xl border border-teal-400/40 bg-teal-400/10 px-4 py-2 text-center text-sm font-semibold text-teal-200 hover:bg-teal-400/20">
                  Book a 15-min Demo
                </Link>
                <Link href="#start-quickstart" className="flex-1 rounded-xl bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-black hover:bg-emerald-400">
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
