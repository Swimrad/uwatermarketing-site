export default function Navbar() {
  return (
    <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
      <div className="text-xl font-semibold">Underwater Marketing</div>
      <nav className="hidden md:flex gap-8 text-brand-char/80">
        <a href="/" className="hover:text-brand-char">Home</a>
        <a href="/how-it-works" className="hover:text-brand-char">How It Works</a>
        <a href="/case-studies/dorado-swim" className="hover:text-brand-char">Case Study</a>
        <a href="/contact" className="hover:text-brand-char">Contact</a>
      </nav>
    </header>
  );
}
