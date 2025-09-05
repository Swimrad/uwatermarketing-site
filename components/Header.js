// components/Header.js
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
  const item = "text-sm leading-6 text-white/90 hover:text-white";
  const panel =
    "absolute left-0 mt-2 w-64 rounded-xl border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur";
  const link =
    "block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10";

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
        <div className={panel.replace("w-64", "w-72")}>
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
      <Link
        href="#demo"
        aria-label="Book a Demo"
        className={`${base} border border-teal-400/40 bg-teal-400/10 text-teal-200 hover:bg-teal-400/20`}
      >
        Book a Demo
      </Link>
      <Link
        href="#start"
        aria-label="Start Quickstart"
        className={`${base} bg-emerald-500 text-black shadow-lg shadow-emerald-500/25 hover:bg-emerald-400`}
      >
        Start Quickstart
      </Link>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4">
        {/* Brand: scale SVG inside fixed bar */}
        <Link href="/" className="flex items-center gap-3" aria-label="Underwater Marketing Home">
          <div className="relative h-16 w-16 shrink-0 overflow-visible">
            <Image
              src="/logo.svg"
              alt="Underwater Marketing"
              fill
              className="object-contain scale-[2.6]"   {/* scale factor boosts U size */}
              priority
            />
          </div>
          <span className="select-none text-base font-semibold leading-6 tracking-tight text-white">
            Underwater Marketing
          </span>
        </Link>

        <DesktopNav />
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
                <Link href="#demo" className="flex-1 rounded-xl border border-teal-400/40 bg-teal-400/10 px-4 py-2 text-center text-sm font-semibold text-teal-200 hover:bg-teal-400/20">
                  Book a Demo
                </Link>
                <Link href="#start" className="flex-1 rounded-xl bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-black hover:bg-emerald-400">
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
