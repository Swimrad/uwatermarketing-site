export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-semibold">Underwater Marketing</div>
        <div className="text-sm text-brand-char/70">
          © {new Date().getFullYear()} Underwater Marketing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
