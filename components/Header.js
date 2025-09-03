/* components/Header.js
   Solid-white skinny header, wider-looking logo, readable nav, permanent CTA */

export default function Header({ onBook }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      {/* h-14 = skinny (56px). Adjust px as needed. */}
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            /* Prefer /logo-text.svg (transparent). Falls back to PNG if needed. */
            src="/logo-text.svg"
            onError={(e) => { e.currentTarget.src = "/logo-text.png"; }}
            alt="Underwater Marketing"
            /* h-10 keeps the bar skinny; scale-x-110 makes the wordmark feel wider without adding height */
            className="h-10 w-auto object-contain transform scale-x-110"
          />
          <span className="sr-only">Underwater Marketing</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-brand-char font-semibold">
          <a href="/" className="hover:text-brand-blue">Home</a>
          <a href="/how-it-works" className="hover:text-brand-blue">How It Works</a>
          <a href="/pricing" className="hover:text-brand-blue">Pricing</a>
          <a href="/case-studies/dorado-swim" className="hover:text-brand-blue">Case Study</a>
          <a href="/contact" className="hover:text-brand-blue">Contact</a>
          <button onClick={onBook} className="btn-header btn-header-solid">Book a Call</button>
        </nav>
      </div>
    </header>
  );
}
