// components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% -10%, rgba(56,189,248,0.25), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(59,130,246,0.18), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:pt-32 lg:px-8 lg:pb-24">
        {/* Micro-announcement (optional) */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="font-medium">Proof-led growth for youth sports</span>
            <span aria-hidden>•</span>
            <span>Case study: 83% trial→enroll</span>
          </div>
        </div>

        {/* Headline */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            How to Fill Every Class and Roster Automatically
          </h1>
          <p className="mt-6 text-pretty text-base/7 text-slate-300 sm:text-lg/8">
            <span className="font-medium text-slate-100">Without chasing missed calls</span> or losing families to slow follow-up.
            Our 24/7 AI enrollment system captures inquiries, books trials, nurtures parents, and follows through on payments —
            so your coaches can coach.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:translate-y-0.5 hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
            >
              Start Quickstart
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:translate-y-0.5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Book a 15-min Demo
            </a>
          </div>

          {/* Proof row */}
          <dl className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <dt className="text-xs text-slate-400">Avg. Lead Response</dt>
              <dd className="mt-1 text-lg font-semibold text-white">&lt; 60s</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <dt className="text-xs text-slate-400">Trial → Enrollment</dt>
              <dd className="mt-1 text-lg font-semibold text-white">Up to 83%</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <dt className="text-xs text-slate-400">On-Time Payments</dt>
              <dd className="mt-1 text-lg font-semibold text-white">98%+</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <dt className="text-xs text-slate-400">Coach Time Saved</dt>
              <dd className="mt-1 text-lg font-semibold text-white">15+ hrs/wk</dd>
            </div>
          </dl>
        </div>

        {/* Trust strip */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-slate-400">Trusted by youth sports clubs & academies</p>
          <div className="mt-4 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-4 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-8 rounded-md bg-white/5 ring-1 ring-white/10" aria-label="Partner logo placeholder" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
