// components/Hero.jsx
export default function Hero() {
  const metrics = [
    { stat: "<60s", label: "Avg. response time" },
    { stat: "83%",  label: "Trial → paid" },
    { stat: "98%",  label: "On-time payments" },
    { stat: "15h+", label: "Coach time saved / wk" },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Animated gradient */}
      <div className="hero-bg absolute inset-0 -z-10 opacity-[0.28]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Make the hero fill the first screen but sit a touch closer to the header */}
        <div className="flex min-h-[86vh] flex-col items-center justify-center pt-4 sm:pt-6 pb-16 lg:pb-20">
          {/* Headline */}
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fill Every Roster Automatically
          </h1>

          {/* Subhead */}
          <p className="mt-3 max-w-3xl text-center text-base leading-relaxed text-white/80 sm:text-lg">
            Without chasing missed calls or losing families to slow follow-up.
          </p>

          {/* CTAs */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#start"
              className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/25 transition hover:translate-y-[-1px] hover:bg-emerald-400"
              aria-label="Start Quickstart"
            >
              Start Quickstart
            </a>
            <a
              href="#demo"
              className="rounded-xl border border-teal-400/40 bg-teal-400/10 px-5 py-3 text-sm font-semibold text-teal-200 transition hover:translate-y-[-1px] hover:bg-teal-400/20"
              aria-label="Book a Demo"
            >
              Book a Demo
            </a>
          </div>

          {/* Interactive metric bubbles */}
          <div className="mt-8 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition
                           hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="text-3xl font-extrabold text-white sm:text-4xl transition group-hover:text-white">
                  {m.stat}
                </div>
                <div className="text-xs text-white/70 transition group-hover:text-white/80">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Move the 72h / risk-free note UNDER the bubbles */}
          <div className="mt-4 text-center text-xs text-white/60">
            Go-live in 72h · 30-day risk-free
          </div>
        </div>
      </div>

      {/* Soft wave glow */}
      <div className="wave" />
    </section>
  );
}
