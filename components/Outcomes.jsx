// components/Outcomes.jsx
import { useEffect, useState } from "react";

export default function Outcomes() {
  const [open, setOpen] = useState(null);

  const outcomes = [
    {
      slug: "lead-response",
      title: "Lead Response <60s",
      body: "Every inquiry answered across SMS, email, and web.",
      how:
        "We connect your website forms, phone, and email so no message is missed. AI replies instantly 24/7 and a human steps in for edge cases. Parents get fast, helpful answers; you capture leads even at midnight.",
    },
    {
      slug: "trials-to-members",
      title: "Trials → Members",
      body: "We follow up until they join.",
      how:
        "Multi-touch nurture (texts + emails) keeps families engaged. We send reminders, handle FAQs, and remove friction to enroll. No-shows drop and more trials convert to members.",
    },
    {
      slug: "predictable-cashflow",
      title: "Predictable Cash Flow",
      body: "Reminders + dunning keep AR near zero.",
      how:
        "Automated payment nudges, smart retries on failed cards, and proactive messages before due dates create steady, predictable revenue—without awkward back-and-forth.",
    },
    {
      slug: "parent-comms",
      title: "Parent Comms",
      body: "Clear updates across channels; fewer complaints.",
      how:
        "We centralize outbound texts/emails and time them around real events (trial tomorrow, class changes, seasonal notes). Families feel informed; support tickets and churn drop.",
    },
    {
      slug: "coach-time-saved",
      title: "Coach Time Saved",
      body: "Admins handled; coaches coach.",
      how:
        "Missed-call text-back, self-serve scheduling, and instant FAQs remove constant interruptions—freeing ~15 hours/week so coaches can focus on athletes.",
    },
    {
      slug: "roster-fill",
      title: "Roster Fill",
      body: "Waitlists auto-fill when spots open.",
      how:
        "When a slot opens, we message the waitlist in order, confirm, and update the roster automatically—keeping classes full without manual outreach.",
    },
  ];

  // Open the matching card when the URL hash is #outcome-<index> or #outcome-<slug>
  useEffect(() => {
    const getIndexFromHash = () => {
      const h = (window.location.hash || "").replace("#", "");
      if (!h) return null;
      if (h.startsWith("outcome-")) {
        const key = h.replace("outcome-", "");
        const byIndex = Number.isInteger(+key) ? +key : null;
        if (byIndex !== null && outcomes[byIndex]) return byIndex;
        const bySlug = outcomes.findIndex((o) => o.slug === key);
        return bySlug >= 0 ? bySlug : null;
      }
      return null;
    };
    const apply = () => {
      const idx = getIndexFromHash();
      if (idx !== null) {
        setOpen(idx);
        const el = document.getElementById(`outcome-${idx}`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  return (
    <section id="outcomes" className="mx-auto max-w-6xl px-6 py-20 text-slate-200">
      <h2 className="font-heading text-2xl font-semibold text-white">How We Help You Grow</h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((o, idx) => (
          <button
            key={o.title}
            id={`outcome-${idx}`}
            onClick={() => setOpen(open === idx ? null : idx)}
            className="text-left group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-brand-electric hover:bg-white/10 focus:outline-none"
          >
            <div className="mb-3 h-6 w-6">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-brand-electric"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* simple glyph changes by index for subtle variety */}
                {idx === 0 && <path d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />}
                {idx === 1 && <path d="M5 13l4 4L19 7" />}
                {idx === 2 && <path d="M12 8v4l3 3M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />}
                {idx === 3 && <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />}
                {idx === 4 && <path d="M3 12h18" />}
                {idx === 5 && <path d="M16 17l-4 4-4-4m8-5l-4-4-4 4" />}
              </svg>
            </div>

            <h3 className="text-sm font-semibold text-white">{o.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{o.body}</p>

            {open === idx && (
              <p className="mt-3 text-sm text-white/80">{o.how}</p>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
