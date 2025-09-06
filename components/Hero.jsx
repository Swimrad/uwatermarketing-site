// components/Hero.jsx
export default function Hero() {
  const metrics = [
    { stat: "<60s", label: "Avg. response time", anchor: "lead-response" },
    { stat: "83%", label: "Trial → paid", anchor: "trials-to-members" },
    { stat: "98%", label: "On-time payments", anchor: "predictable-cashflow" },
    { stat: "15h+", label: "Coach time saved / wk", anchor: "coach-time-saved" },
  ];

  const goToOutcome = (anchor, index) => (e) => {
    e.preventDefault();
    // Set hash to trigger Outcomes auto-open (works via useEffect listener there)
    const hash = anchor ? `#outcome-${anchor}` : `#outcome-${index}`;
    history.pushState(null, "", hash);
    // Smooth scroll (Outcomes also scrolls, this is a quick UX feedback)
    const el =
      document.querySelector(hash) ||
      document.getElementById("outcomes");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="hero-bg absolute inset-0 -z-10 opacity-[0.28]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-[86vh] flex-col items-center justify-center pt-4 sm:pt-6 pb-16 lg:pb-20">
          <h1 className="font-display text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fill Every Roster in 72 Hours
          </h1>

          <p className="mt-3 max-w-3xl text-center text-base leading-relaxed text-white/80 sm:text-lg">
            Stop losing families to slow follow-up. Our team replies instantly, books trials, and keeps payments on track.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#start"
              className="rounded-xl bg-brand-electric px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_20px_-8px_rgba(0,212,255,0.35)] transition hover:bg-brand-blue"
              aria-label="Start Quickstart"
            >
              Start Quickstart
            </a>
            <a
              href="#demo"
              className="rounded-xl border border-brand-electric/60 bg-brand-electric/10 px-5 py-3 text-sm font-semibold text-brand-electric transition hover:bg-brand-electric/20"
              aria-label="Book a Demo"
            >
              Book a Demo
            </a>
          </div>

          <div className="mt-8 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((m, idx) => (
              <button
                key={m.label}
                onClick={goToOutcome(m.anchor, idx)}
                className="group rounded-2xl border border-white/10 bg-white/10 p-5 text-center transition hover:-translate-y-0.5 hover:border-brand-electric hover:shadow-[0_10px_20px_-8px_rgba(0,212,255,0.15)] focus:outline-none"
              >
                <div className="text-4xl font-extrabold text-white sm:text-5xl">{m.stat}</div>
                <div className="mt-1 text-xs text-white/80">{m.label}</div>
              </button>
            ))}
          </div>

          <div className="mt-5 text-center text-xs text-white/70">
            Go-live in 72h · 30-day risk-free
          </div>
        </div>
      </div>

      <div className="wave" />
    </section>
  );
}
