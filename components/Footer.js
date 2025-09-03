export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-text.svg"
          onError={(e)=>{ e.currentTarget.src="/logo-text.png"; }}
          alt="Underwater Marketing"
          className="h-7 w-auto object-contain"
        />
        <div className="text-sm text-brand-char/70">
          © {new Date().getFullYear()} Underwater Marketing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
