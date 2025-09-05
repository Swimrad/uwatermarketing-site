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
      <div className="hero-bg absolute inset-0 -z-10 opacity-[0.28]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-[86vh] flex-col items-center justify-center pt-4 sm:pt-6 pb-16 lg:pb-20">
          <h1 className="font-display text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fill Every Roster Automatically
          </h1>

          <p className="mt-3 max-w-3xl text-center text-base leading-relaxed text-white/80 sm:text-lg">
            Without chasing missed calls or losing families to slow follow-up.
          </p>

          {/* Electric blue CTAs */}
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

          {/* Interactive bubbles with blue hover */}
          <div className="mt-8 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition
                           hover:-translate-y-0.5 hover:border-brand-electric hover:bg-white/10 hover:shadow-[0_10px_20px_-8px_rgba(0,212,255,0.15)]"
              >
                <div className="text-3xl font-extrabold text-white sm:text-4xl">
                  {m.stat}
                </div>
                <div className="text-xs text-white/70 group-hover:text-white/80">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center text-xs text-white/60">
            Go-live in 72h · 30-day risk-free
          </div>
        </div>
      </div>

      <div className="wave" />
    </section>
  );
}
