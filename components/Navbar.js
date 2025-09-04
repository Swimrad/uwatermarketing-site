// components/Navbar.js
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/75 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo (make sure /public/logo.png is transparent + large) */}
        <Link href="/" className="flex items-center gap-2" aria-label="Underwater Marketing">
          <span className="relative h-7 w-40">
            <Image src="/logo.png" alt="Underwater Marketing" fill priority className="object-contain" />
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          <Link href="/how-it-works" className="hover:text-white">Solutions</Link>
          <Link href="/case-studies" className="hover:text-white">Case Studies</Link>
          <a href="#outcomes" className="hover:text-white">Outcomes</a>
          <a href="#resources" className="hover:text-white">Resources</a>
        </nav>

        {/* CTA cluster */}
        <div className="flex items-center gap-2">
          <a
            href="#demo"
            className="hidden rounded-lg border border-white/15 px-3.5 py-2 text-xs font-semibold text-white/90 hover:bg-white/10 md:inline-flex"
          >
            Book 15-min
          </a>
          <a
            href="#start"
            className="inline-flex rounded-lg bg-cyan-400 px-3.5 py-2 text-xs font-semibold text-slate-900 shadow shadow-cyan-500/20 hover:bg-cyan-300"
          >
            Start Quickstart
          </a>
        </div>
      </div>
    </header>
  );
}
