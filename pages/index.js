// pages/index.js
import Head from "next/head";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import BookingCalendar from "@/components/BookingCalendar";
import ContactForm from "@/components/ContactForm";

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
        <meta
          property="og:description"
          content="24/7 AI enrollment for youth sports. Go live in 72h. 30-day risk-free."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="bg-slate-950 text-white">
        {/* Top header */}
        <AnnouncementBar />
        <Navbar />
        <Hero />

        {/* Outcomes section */}
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

        {/* Booking Calendar */}
        <section id="demo" className="bg-slate-950 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Book a 15-min Demo</h2>
            <BookingCalendar />
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="bg-slate-950 py-20">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
