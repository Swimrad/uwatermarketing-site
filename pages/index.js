// pages/index.js
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/logo-text.png"); // put your wordmark file in /public/logo-text.png

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > window.innerHeight * 0.3);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Underwater Marketing — AI Employees for Youth Sports</title>
        <meta
          name="description"
          content="AI employees that reply in seconds, book every trial, and keep payments on time. Go live in 72 hours."
        />
      </Head>

      {/* ===== HERO (animated gradient, glass nav, full viewport) ===== */}
      <section className="relative overflow-hidden min-h-screen flex">
        <div className="absolute inset-0 hero-bg" aria-hidden="true" />
        <div className="relative z-10 flex-1 mx-auto max-w-6xl px-6 pt-8 pb-10 text-white flex flex-col">
          {/* Nav */}
          <header className="mb-10 flex items-center justify-between">
            <a href="/" className="nav-glass px-3 py-2 flex items-center gap-3">
              {/* tries /logo-text.png -> falls back to /logo.png */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoSrc}
                alt="Underwater Marketing"
                className="h-9 w-auto object-contain"
                onError={() => {
                  if (logoSrc !== "/logo.png") setLogoSrc("/logo.png");
                }}
              />
              <span className="sr-only">Underwater Marketing</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-white/90 nav-glass px-4 py-2">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/how-it-works" className="hover:text-white">How It Works</a>
              <a href="/case-studies/dorado-swim" className="hover:text-white">Case Study</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </nav>
          </header>

          {/* Headline block */}
          <div className="flex-1 grid place-items-center text-center">
            <div>
              <h1 className="font-display text-[38px] md:text-[64px] font-extrabold leading-[1.05] tracking-tight drop-shadow-sm fade-up">
                AI Employees for Youth Sports Teams
              </h1>
              <p className="font-heading md:text-xl mt-4 max-w-3xl mx-auto text-white/90 fade-up fade-up-2">
                Virtual staff that answer every parent fast, book every trial, and keep payments on time —
                so you can focus on coaching and growth.
              </p>

              <div className="mt-8 flex items-center justify-center gap-4 fade-up fade-up-3">
                <button onClick={() => setOpen(true)} className="btn-primary">Book a Call</button>
                <a href="#how" className="btn-ghost">See How It Works</a>
              </div>

              {/* Trust badges */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto fade-up fade-up-3">
                {["Replies in under 60s", "83% of inquiries convert", "98% of payments on time"].map((m, i) => (
                  <div key={m} className={`badge ${i === 1 ? "text-brand-char bg-white" : ""}`}>{m}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="wave absolute bottom-0 left-0 right-0" aria-hidden="true" />
      </section>

      {/* Director reassurance bar */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4 grid gap-3 sm:grid-cols-3 text-center">
          <div className="text-brand-char/80 text-sm">Go live in 72 hours</div>
          <div className="text-brand-char/80 text-sm">Works with your current tools</div>
          <div className="text-brand-char/80 text-sm">Cancel anytime • 30-day risk-free</div>
        </div>
      </section>

      {/* ===== WHAT WE DO (interactive cards) ===== */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-heading text-3xl font-semibold text-center text-brand-char">What We Do</h2>
        <p className="text-center mt-2 text-brand-char/70">Simple, fast, clear — built for busy directors and parents.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              t: "Instant Replies",
              s: "Parents get an answer in seconds — never a missed call again.",
            },
            {
              t: "Book & Remind",
              s: "Every trial, lesson, or practice gets scheduled and reminded — fewer no-shows.",
            },
            {
              t: "On-Time Payments",
              s: "Billing stays clear, collected, and consistent — no chasing checks.",
            },
          ].map(({ t, s }) => (
            <div
              key={t}
              className="card group cursor-default transition-transform will-change-transform hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-4">
                <span className="text-brand-blue font-bold text-lg transition-transform group-hover:scale-110">✓</span>
              </div>
              <h3 className="font-heading text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-brand-char/70">{s}</p>
              <div className="mt-4 h-1 w-0 bg-brand-teal transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROOF & OUTCOMES (bigger section) ===== */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-3xl font-semibold text-center text-brand-char">Proof & Outcomes</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ["<60s", "average reply time"],
              ["83%", "inquiry-to-member conversion"],
              ["98%", "on-time payments"],
            ].map(([n, l]) => (
              <div key={n} className="rounded-3xl bg-white p-8 shadow-soft text-center hover:shadow-xl transition-shadow">
                <div className="font-display text-5xl font-extrabold text-brand-blue">{n}</div>
                <div className="mt-2 text-brand-char/70">{l}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-gray-100 p-8 shadow-soft">
              <h3 className="font-heading text-xl font-semibold text-brand-char">Where AI Employees Help Most</h3>
              <ul className="mt-4 space-y-2 text-brand-char/80">
                <li>• New inquiries and waitlists answered fast</li>
                <li>• Trials, assessments, and tours auto-booked with reminders</li>
                <li>• Payment nudges and failed-card follow-ups</li>
                <li>• Season/camp announcements and parent updates</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-100 p-8 shadow-soft">
              <h3 className="font-heading text-xl font-semibold text-brand-char">Why Directors Choose Us</h3>
              <ul className="mt-4 space-y-2 text-brand-char/80">
                <li>• No new software to learn</li>
                <li>• 72-hour setup, fully managed</li>
                <li>• Scales up for busy seasons, down when quiet</li>
                <li>• 30-day risk-free to prove results</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS (sharper copy) ===== */}
      <section id="how" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-3xl font-semibold text-center text-brand-char">How It Works</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: 1, t: "Say Hello", s: "We set you up in 72 hours." },
              { n: 2, t: "Connect", s: "We plug in with your website, email, and phone." },
              { n: 3, t: "AI Takes Over", s: "Your virtual staff reply, book, follow up, and collect payments." },
              { n: 4, t: "You Grow", s: "More sign-ups, more revenue, less stress." },
            ].map(({ n, t, s }) => (
              <div
                key={n}
                className="rounded-3xl bg-white p-6 shadow-soft border border-gray-100 hover:border-brand-teal/40 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-brand-teal/20 text-brand-blue font-bold flex items-center justify-center mb-3">
                  {n}
                </div>
                <h3 className="font-heading text-lg font-semibold">{t}</h3>
                <p className="mt-1 text-brand-char/70">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MINI CASE: DORADO ===== */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-gray-100 p-8 shadow-soft">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-brand-char">Dorado Swim Academy</h2>
                <ul className="mt-4 space-y-2 text-brand-char/80">
                  <li>• 71% market share in 4 weeks</li>
                  <li>• No-shows cut from 35% → 8%</li>
                  <li>• Owners saved 15 hours/week</li>
                </ul>
                <a href="/case-studies/dorado-swim/" className="inline-block mt-6 btn-outline">See the Case Study</a>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 p-10 text-center">
                <div className="text-3xl md:text-4xl font-display font-extrabold text-brand-blue">
                  83% of inquiries converted to paying members
                </div>
                <div className="mt-2 text-brand-char/70">From first contact to paid enrollment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-heading text-3xl font-semibold text-center text-brand-char">FAQ</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["How fast do you set this up?", "72 hours."],
              ["Do I need new software?", "No. We connect with what you have."],
              ["Will parents talk to a real person?", "Yes — our AI staff sound natural and helpful."],
              ["What if we’re in busy season?", "We scale up, then down."],
              ["Can I cancel?", "Yes, anytime. First 30 days risk-free."],
            ].map(([q, a]) => (
              <details key={q} className="rounded-2xl bg-white p-5 shadow-soft border border-gray-100">
                <summary className="cursor-pointer list-none font-heading font-semibold hover:text-brand-blue">
                  {q}
                </summary>
                <p className="mt-2 text-brand-char/70">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt="Underwater Marketing"
              className="h-6 w-auto object-contain"
              onError={() => {
                if (logoSrc !== "/logo.png") setLogoSrc("/logo.png");
              }}
            />
            <span className="font-semibold">Underwater Marketing</span>
          </div>
          <div className="text-sm text-brand-char/70">
            © {new Date().getFullYear()} Underwater Marketing. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky CTA (adds spacer so nothing is hidden) */}
      {showSticky && (
        <>
          <div style={{ height: 56 }} aria-hidden="true" />
          <div className="sticky-bar">
            <span className="font-heading">Need help? Book a call.</span>
            <button onClick={() => setOpen(true)} className="btn-primary">Book a Call</button>
          </div>
        </>
      )}

      {/* Modal calendar */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-3xl rounded-2xl bg-white p-4 shadow-2xl">
            <button aria-label="Close" onClick={() => setOpen(false)} className="absolute right-3 top-3 rounded-full border px-3 py-1 text-sm hover:bg-gray-50">
              Close
            </button>
            <div id="ghl-calendar" className="mt-6">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/moLbhpNSHi4Hd4YxkCLP"
                style={{ width: "100%", border: "none", overflow: "hidden", height: "700px" }}
                scrolling="no"
                title="Book a Call"
              />
              <br />
              <script src="https://link.msgsndr.com/js/form_embed.js" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
