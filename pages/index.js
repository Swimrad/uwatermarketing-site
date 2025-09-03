import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > window.innerHeight * 0.3);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Underwater Marketing — Elite Youth Sports Ops</title>
        <meta
          name="description"
          content="We answer fast, book families, and keep payments on time. Go live in 72 hours."
        />
      </Head>

      {/* TOP STRIPE */}
      <div
        className="h-2 w-full"
        style={{
          background:
            "repeating-linear-gradient(135deg,#00D4FF 0 14px,#003A70 14px 28px)",
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-bg" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 pt-8 pb-20 text-white">
          {/* NAVBAR */}
          <header className="mb-12 flex items-center justify-between">
            <a href="/" className="nav-glass px-3 py-2 flex items-center gap-3">
              <img src="/logo-text.png" alt="Underwater Marketing" className="h-9 w-auto" />
            </a>
            <nav className="hidden md:flex items-center gap-8 text-white/90 nav-glass px-4 py-2">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/how-it-works" className="hover:text-white">How It Works</a>
              <a href="/case-studies/dorado-swim" className="hover:text-white">Case Study</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </nav>
          </header>

          {/* HERO CONTENT */}
          <div className="text-center">
            <h1 className="font-display text-[42px] leading-[1.05] md:text-[68px] md:leading-[1.05] font-extrabold tracking-tight drop-shadow-sm fade-up">
              We Help Youth Sports Run Smarter.
            </h1>
            <p className="font-heading md:text-xl mt-5 max-w-3xl mx-auto text-white/90 fade-up fade-up-2">
              We answer fast, book families, and keep payments on time. Go live in 72 hours.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4 fade-up fade-up-3">
              <button onClick={() => setOpen(true)} className="btn-primary">Book a Call</button>
              <a href="#how" className="btn-ghost">See How It Works</a>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {["<60s reply", "83% conversion", "98% on-time payments"].map((m,i)=>(
                <div key={m} className={`badge ${i===1 ? 'text-brand-char bg-white' : ''}`}>
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="wave" aria-hidden="true" />
      </section>

      {/* DIRECTOR BAR */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4 grid gap-3 sm:grid-cols-3 text-center">
          <div className="text-brand-char/80 text-sm">Same-day reply • 72-hour setup</div>
          <div className="text-brand-char/80 text-sm">Works with your tools • No new software</div>
          <div className="text-brand-char/80 text-sm">Cancel anytime • 30-day risk-free</div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-heading text-3xl font-semibold text-center text-brand-char">What We Do</h2>
        <p className="text-center mt-2 text-brand-char/70">
          Simple, fast, clear—for busy directors and parents.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t:"Answer Parents Fast", s:"Parents get a quick, kind reply." },
            { t:"Book & Remind", s:"Trials and visits get booked and kept." },
            { t:"On-Time Payments", s:"Billing stays clear and on time." }
          ].map(({t,s})=>(
            <div key={t} className="card">
              <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-4">
                <span className="text-brand-blue font-bold text-lg">✓</span>
              </div>
              <h3 className="font-heading text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-brand-char/70">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl font-semibold text-center text-brand-char">How It Works</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n:1, t:"Say Hello", s:"We set you up in 72 hours." },
              { n:2, t:"Plug In", s:"Connect phone, email, and site." },
              { n:3, t:"We Handle It", s:"We reply, book, and follow up." },
              { n:4, t:"You Grow", s:"More sign-ups. Less stress." }
            ].map(({n,t,s})=>(
              <div key={n} className="rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                <div className="h-10 w-10 rounded-full bg-brand-teal/20 text-brand-blue font-bold flex items-center justify-center mb-3">{n}</div>
                <h3 className="font-heading text-lg font-semibold">{t}</h3>
                <p className="mt-1 text-brand-char/70">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINI CASE */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-3xl border border-gray-100 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-brand-char">Dorado Swim Academy</h2>
              <ul className="mt-4 space-y-2 text-brand-char/80">
                <li>• 71% market share in 4 weeks</li>
                <li>• No-shows down 35% → 8%</li>
                <li>• Owners saved 15 hours/week</li>
              </ul>
              <a href="/case-studies/dorado-swim/" className="inline-block mt-6 btn-outline">
                See the Case Study
              </a>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 p-10 text-center">
              <div className="text-4xl font-display font-extrabold text-brand-blue">83% Conversion</div>
              <div className="mt-2 text-brand-char/70">From inquiry to paid enrollment</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl font-semibold text-center text-brand-char">FAQ</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["How fast do you set this up?","72 hours."],
              ["Do I need new software?","No. We plug into what you have."],
              ["Will parents talk to a real person?","Yes. Friendly, fast replies."],
              ["What if we’re busy season?","We scale up, then down."],
              ["Can I cancel?","Yes. 30-day risk-free."]
            ].map(([q,a])=>(
              <details key={q} className="rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                <summary className="cursor-pointer list-none font-heading font-semibold">{q}</summary>
                <p className="mt-2 text-brand-char/70">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo-text.png" alt="Underwater Marketing" className="h-6 w-auto"/>
            <span className="font-semibold">Underwater Marketing</span>
          </div>
          <div className="text-sm text-brand-char/70">
            © {new Date().getFullYear()} Underwater Marketing. All rights reserved.
          </div>
        </div>
      </footer>

      {/* STICKY CTA */}
      {showSticky && (
        <div className="sticky-bar">
          <span className="font-heading">Need help? Book a call.</span>
          <button onClick={() => setOpen(true)} className="btn-primary">Book a Call</button>
        </div>
      )}

      {/* MODAL CALENDAR */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-3xl rounded-2xl bg-white p-4 shadow-2xl">
            <button aria-label="Close" onClick={() => setOpen(false)} className="absolute right-3 top-3 rounded-full border px-3 py-1 text-sm hover:bg-gray-50">Close</button>
            <div id="ghl-calendar" className="mt-6">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/moLbhpNSHi4Hd4YxkCLP"
                style={{width:"100%",border:"none",overflow:"hidden",height:"700px"}}
                scrolling="no"
                id="moLbhpNSHi4Hd4YxkCLP_1756838233028"
                title="Book a Call"
              />
              <br />
              <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
