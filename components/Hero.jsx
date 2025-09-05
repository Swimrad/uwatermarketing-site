// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Animated gradient */}
      <div className="hero-bg absolute inset-0 -z-10 opacity-[0.28]" />

      {/* Take up (most of) the viewport so only the hero is visible */}
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            flex min-h-[88vh] flex-col items-center justify-center
            pt-6 sm:pt-8   /* small breathing room below sticky header */
            pb-20 lg:pb-24 /* keep next section below the fold */
          "
        >
          {/* Headline */}
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fill Every Roster Automatically
          </h1>

          {/* Subhead */}
          <p className="mt-4 max-w-3xl text-center text-base leading-relaxed text-white/80 sm:text-lg">
            Without chasing missed calls or losing families to slow follow-up.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#start"
              className="rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-emerald-500/25 hover:bg-emerald-400"
              aria-label="Start Quickstart"
            >
              Start Quickstart
            </a>
            <a
              href="#demo"
              className="rounded-xl border border-teal-400/40 bg-teal-400/10 px-5 py-3 text-sm font-semibold text-teal-200 hover:bg-teal-400/20"
              aria-label="Book a Demo"
            >
              Book a Demo
            </a>
            <span className="text-xs text-white/60">Go-live in 72h · 30-day risk-free</span>
          </div>

          {/* Trust strip */}
          <div className="mt-8 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-3xl font-extrabold text-white sm:text-4xl">&lt;60s</div>
              <div className="text-xs text-white/70">Avg. response time</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-3xl font-extrabold text-white sm:text-4xl">83%</div>
              <div className="text-xs text-white/70">Trial → paid</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-3xl font-extrabold text-white sm:text-4xl">98%</div>
              <div className="text-xs text-white/70">On-time payments</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="text-3xl font-extrabold text-white sm:text-4xl">15h+</div>
              <div className="text-xs text-white/70">Coach time saved / wk</div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft wave glow */}
      <div className="wave" />
    </section>
  );
}
