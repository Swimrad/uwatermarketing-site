// pages/index.js
import Head from "next/head";
import Hero from "../components/Hero";
import Outcomes from "../components/Outcomes";
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
        {/* Header + AnnouncementBar rendered globally in _app.js */}
        <Hero />

        {/* Outcomes (interactive cards with expand-on-click) */}
        <Outcomes />

        {/* Start Quickstart CTA */}
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
