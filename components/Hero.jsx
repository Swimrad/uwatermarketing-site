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
    const hash = anchor ? `#outcome-${anchor}` : `#outcome-${index}`;
    history.pushState(null, "", hash);
    const el =
      document.querySelector(hash) ||
      document.getElementById("outcomes");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Gradient backdrop */}
      <div className="hero-bg absolute inset-0 -z-10 opacity-[0.28]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-[86vh] flex-col items-center justify-center pt-4 sm:pt-6 pb-16 lg:pb-20">
          {/* Option B — big headline + subhead */}
          <h1 className="font-display text-center text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Fill Every Roster Automatically
          </h1>
          <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-white/80 sm:text-lg">
            Without admin overload, missed leads, or late payments.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
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

          {/* Metrics */}
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

          {/* Go-live badge (pill, constant electric outline, slightly larger) */}
          <div className="mt-6 flex justify-center">
            <span className="inline-block rounded-full border-2 border-brand-electric px-4 py-1 text-sm md:text-base font-semibold text-brand-electric">
              Go-live in 72h · 30-day risk-free
            </span>
          </div>
        </div>
      </div>

      <div className="wave" />
    </section>
  );
}
