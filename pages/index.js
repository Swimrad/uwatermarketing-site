// pages/index.js
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.3;
      setShowSticky(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Underwater Marketing — Elite Staff Capacity for Youth Sports</title>
        <meta
          name="description"
          content="We help youth sports run smarter—fast replies, booked families, on-time payments. Go live in 72 hours."
        />
      </Head>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #003A70 0%, #00D4FF 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-28 text-center text-white">
          {/* Logo */}
          <div className="flex items-center justify-center mb-10">
            <Image
              src="/logo-with-text.png"
              alt="Underwater Marketing"
              width={280}
              height={150}
              priority
            />
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight">
            Empowering Youth Sports with Elite Staff Capacity
          </h1>
          <p className="font-heading mt-6 md:text-xl max-w-3xl mx-auto">
            We answer fast, book families, and keep payments on time — so you
            can focus on developing athletes and growing your program.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="rounded-2xl bg-brand-green px-6 py-3 text-white font-semibold shadow-lg hover:opacity-90"
            >
              Book a Call
            </button>
            <a
              href="#how"
              className="rounded-2xl border border-white px-6 py-3 text-white font-semibold hover:bg-white hover:text-brand-blue transition"
            >
              See How It Works
            </a>
          </div>

          {/* Trust band */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["<60s reply", "83% conversion", "98% on-time payments"].map((m) => (
              <div
                key={m}
                className="rounded-2xl bg-white/10 backdrop-blur px-4 py-3 font-semibold"
              >
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-heading text-3xl font-semibold text-center text-brand-char">
          What We Do
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Answer Parents Fast", text: "Parents get a quick, kind reply." },
            { title: "Book & Remind", text: "Trials and visits get booked and kept." },
            { title: "On-Time Payments", text: "Billing stays clear and on time." },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-gray-100 p-6 shadow-lg hover:-translate-y-0.5 transition-transform"
            >
              <Image
                src="/logo.png"
                alt="Underwater Marketing icon"
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="font-heading text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-brand-char/70">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl font-semibold text-center">How It Works</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: 1, t: "Say Hello", s: "We set you up in 72 hours." },
              { n: 2, t: "Plug In", s: "Connect phone, email, and site." },
              { n: 3, t: "We Handle It", s: "We reply, book, and follow up." },
              { n: 4, t: "You Grow", s: "More sign-ups. Less stress." },
            ].map((step) => (
              <div key={step.n} className="rounded-3xl bg-white p-6 shadow-lg">
                <div className="h-10 w-10 rounded-full bg-brand-teal/20 text-brand-blue font-bold flex items-center justify-center mb-3">
                  {step.n}
                </div>
                <h3 className="font-heading text-lg font-semibold">{step.t}</h3>
                <p className="mt-1 text-brand-char/70">{step.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-gray-100 p-8 shadow-lg">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="font-heading text-2xl font-semibold">
                Dorado Swim Academy
              </h2>
              <ul className="mt-4 space-y-2 text-brand-char/80">
                <li>• 71% market share in 4 weeks</li>
                <li>• No-shows down 35% → 8%</li>
                <li>• Owners saved 15 hours/week</li>
              </ul>
              <a
                href="/case-studies/dorado-swim"
                className="inline-block mt-6 rounded-2xl border border-brand-blue px-5 py-3 text-brand-blue font-semibold hover:bg-brand-blue hover:text-white transition"
              >
                See the Case Study
              </a>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 p-10 text-center">
              <div className="text-4xl font-display font-extrabold text-brand-blue">
                83% Conversion
              </div>
              <div className="mt-2 text-brand-char/70">
                From inquiry to paid enrollment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-3xl font-semibold text-center">FAQ</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              ["How fast do you set this up?", "72 hours."],
              ["Do I need new software?", "No. We plug into what you have."],
              ["Will parents talk to a real person?", "Yes. Friendly, fast replies."],
              ["What if we’re busy season?", "We scale up, then down."],
              ["Can I cancel?", "Yes. 30-day risk-free."],
            ].map(([q, a]) => (
              <details
                key={q}
                className="rounded-2xl bg-white p-5 shadow-lg open:shadow-md"
              >
                <summary className="cursor-pointer list-none font-heading font-semibold">
                  {q}
                </summary>
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
            <Image
              src="/logo.png"
              alt="Underwater Marketing"
              width={36}
              height={36}
            />
            <span className="font-semibold">Underwater Marketing</span>
          </div>
          <div className="text-sm text-brand-char/70">
            © {new Date().getFullYear()} Underwater Marketing. All rights reserved.
          </div>
        </div>
      </footer>

      {/* STICKY CTA */}
      {showSticky && (
        <div className="fixed inset-x-0 bottom-0 z-40">
          <div className="mx-auto max-w-3xl rounded-t-2xl bg-brand-blue px-6 py-4 text-white shadow-2xl flex items-center justify-between">
            <span className="font-heading">Need help? Book a call.</span>
            <button
              onClick={() => setOpen(true)}
              className="rounded-xl bg-brand-green px-5 py-2 font-semibold text-white hover:opacity-90"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}

      {/* MODAL CALENDAR */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl rounded-2xl bg-white p-4 shadow-2xl">
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full border px-3 py-1 text-sm hover:bg-gray-50"
            >
              Close
            </button>
            <div id="ghl-calendar" className="mt-6">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/moLbhpNSHi4Hd4YxkCLP"
                style={{ width: "100%", border: "none", overflow: "hidden", height: "700px" }}
                scrolling="no"
                id="moLbhpNSHi4Hd4YxkCLP_1756838233028"
              />
              <br />
              <script
                src="https://link.msgsndr.com/js/form_embed.js"
                type="text/javascript"
              ></script>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
