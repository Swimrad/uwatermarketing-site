/* components/Header.js
   Sticky white header with larger logo + readable nav + permanent Book CTA */

export default function Header({ onBook }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-18 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 py-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-text.svg"
            onError={(e) => { e.currentTarget.src = "/logo-text.png"; }}
            alt="Underwater Marketing"
            className="h-14 w-auto object-contain"
          />
          <span className="sr-only">Underwater Marketing</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-brand-char font-semibold">
          <a href="/" className="hover:text-brand-blue">Home</a>
          <a href="/how-it-works" className="hover:text-brand-blue">How It Works</a>
          <a href="/pricing" className="hover:text-brand-blue">Pricing</a>
          <a href="/case-studies/dorado-swim" className="hover:text-brand-blue">Case Study</a>
          <a href="/resources" className="hover:text-brand-blue">Resources</a>
          <button onClick={onBook} className="btn-header btn-header-solid">Book a Call</button>
        </nav>
      </div>
    </header>
  );
}
