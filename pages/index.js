// pages/index.js
import Head from "next/head";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BookingCalendar from "../components/BookingCalendar";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fill Every Roster in 72 Hours | Underwater Marketing</title>
        <meta
          name="description"
          content="24/7 enrollment support for youth sports. We reply instantly, book trials, and keep payments on track—so coaches can coach."
        />
        <meta property="og:title" content="Fill Every Roster in 72 Hours" />
        <meta
          property="og:description"
          content="Go live in 72h. 30-day risk-free. We answer every inquiry and drive enrollments."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-slate-950 text-white">
        {/* Header + AnnouncementBar are rendered globally in _app.js */}
        <Hero />

        {/* Outcomes Section (icons + simpler copy) */}
        <section id="outcomes" className="mx-auto max-w-6xl px-6 py-20 text-slate-200">
          <h2 className="font-heading text-2xl font-semibold text-white">How We Help You Grow</h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Lead Response <60s", body: "Every inquiry answered across SMS, email, and web.", icon: "M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" },
              { title: "Trials → Members", body: "We follow up until they join.", icon: "M5 13l4 4L19 7" },
              { title: "Predictable Cash Flow", body: "Reminders + dunning keep AR near zero.", icon: "M12 8v4l3 3 M12 2a10 10 0 100 20 10 10 0 000-20" },
              { title: "Parent Comms", body: "Clear updates across channels; fewer complaints.", icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" },
              { title: "Coach Time Saved", body: "Admins handled; coaches coach.", icon: "M3 12h18" },
              { title: "Roster Fill", body: "Waitlists auto-fill when spots open.", icon: "M16 17l-4 4-4-4m8-5l-4-4-4 4" },
            ].map((c) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-brand-electric hover:bg-white/10"
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
                    <path d={c.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Start Quickstart CTA (no pricing mentioned, consistent copy) */}
        <section id="start" className="bg-slate-950 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-heading text-2xl font-semibold">Start Quickstart</h2>
            <p className="mt-2 text-sm text-slate-300">
              Our team replies instantly, books trials, and manages parent comms and payments—so your coaches can coach.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex rounded-xl border border-brand-electric/60 bg-brand-electric/10 px-6 py-3 text-sm font-semibold text-brand-electric hover:bg-brand-electric/20"
              >
                Go to Contact Form
              </a>
              <a
                href="#demo"
                className="inline-flex rounded-xl bg-brand-electric px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_20px_-8px_rgba(0,212,255,0.35)] hover:bg-brand-blue"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>

        {/* Booking Calendar Embed */}
        <section id="demo" className="bg-slate-950 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 text-center font-heading text-2xl font-semibold">Book a Demo</h2>
            <BookingCalendar />
          </div>
        </section>

        {/* Contact Form Embed */}
        <section id="contact" className="bg-slate-950 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-6 text-center font-heading text-2xl font-semibold">Contact Us</h2>
            <ContactForm />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
