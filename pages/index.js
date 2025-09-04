// pages/index.js
import Head from "next/head";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fill Every Class & Roster Automatically | Underwater Marketing</title>
        <meta
          name="description"
          content="24/7 AI enrollment for youth sports. Capture inquiries, book trials, automate parent comms & payments — so your coaches can coach."
        />
        <meta property="og:title" content="Fill Every Class & Roster Automatically" />
        <meta property="og:description" content="24/7 AI enrollment for youth sports. Go live in 72h. 30-day risk-free." />
        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-slate-950 text-white">
        <AnnouncementBar />
        <Navbar />
        <Hero />

        {/* Outcomes anchor (quick stub so nav links work) */}
        <section id="outcomes" className="mx-auto max-w-6xl px-6 py-20 text-slate-200">
          <h2 className="text-2xl font-semibold text-white">Outcomes We Deliver</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Lead Response <60s", "Instant SMS/email replies, even during practice."],
              ["Trial → Enrollment Lift", "Multi-touch nurture turns trials into members."],
              ["Predictable Cash Flow", "Dues reminders + dunning keep AR near zero."],
              ["Parent Comms", "Fewer complaints; clear updates across channels."],
              ["Coach Time Saved", "15+ hours/week back to coaching."],
              ["Roster Fill", "Waitlist → auto-fill when spots open."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Start Quickstart */}
        <section id="start" className="bg-slate-950 py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-semibold">Start Quickstart</h2>
            <p className="mt-2 text-sm text-slate-300">
              Connect this button to your GoHighLevel checkout or form.
            </p>
            <a
              href="https://YOUR-GHL-CHECKOUT-OR-FORM"
              className="mt-6 inline-flex rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-cyan-300"
            >
              Proceed
            </a>
          </div>
        </section>

        {/* Book Demo */}
        <section id="demo" className="bg-slate-950 pb-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-2xl font-semibold">Book a 15-min Demo</h2>
            <p className="mt-2 text-sm text-slate-300">Point this to your GHL calendar or Calendly.</p>
            <a
              href="https://YOUR-CALENDAR-LINK"
              className="mt-6 inline-flex rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
            >
              Open Calendar
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
