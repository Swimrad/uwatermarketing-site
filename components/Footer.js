// components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-16 sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
        <div>
          <h3 className="text-sm font-semibold text-white">Offers</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#contact" className="hover:text-white">Quickstart ($720/mo)</a>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:text-white">Ops Bundle</Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-white">Case Studies</Link>
            </li>
            <li>
              <a href="#demo" className="hover:text-white">Book 15-min Demo</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">By Sport</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/solutions/swim" className="hover:text-white">Swim</Link></li>
            <li><Link href="/solutions/martial-arts" className="hover:text-white">Martial Arts</Link></li>
            <li><Link href="/solutions/gymnastics" className="hover:text-white">Gymnastics</Link></li>
            <li><Link href="/solutions/dance-cheer" className="hover:text-white">Dance & Cheer</Link></li>
            <li><Link href="/solutions/team-sports" className="hover:text-white">Team Sports</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">By Role</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#resources" className="hover:text-white">Directors</a></li>
            <li><a href="#resources" className="hover:text-white">Registrars</a></li>
            <li><a href="#resources" className="hover:text-white">Coaches</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Resources</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#resources" className="hover:text-white">Playbooks & Templates</a></li>
            <li><a href="#resources" className="hover:text-white">Webinars</a></li>
            <li><a href="#resources" className="hover:text-white">ROI Calculator</a></li>
            <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><a href="#" className="hover:text-white">Trust & Safety</a></li>
            <li><a href="#" className="hover:text-white">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Legal</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Data Use</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-slate-400 lg:px-8">
          <p>© {new Date().getFullYear()} Underwater Marketing. All rights reserved.</p>
          <p>Built for youth sports — fast, reliable, and parent-friendly.</p>
        </div>
      </div>
    </footer>
  );
}
