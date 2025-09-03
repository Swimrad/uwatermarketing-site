import Head from 'next/head';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <Head>
        <title>Underwater Marketing – Elevating Youth Sports</title>
        <meta
          name="description"
          content="Underwater Marketing partners with youth sports organizations to provide unparalleled staff capacity on‑demand. We elevate operations so you can focus on the game."
        />
        {/* Open Graph tags */}
        <meta property="og:title" content="Underwater Marketing – Elevating Youth Sports" />
        <meta
          property="og:description"
          content="Underwater Marketing partners with youth sports organizations to provide unparalleled staff capacity on‑demand."
        />
        {/* Schema.org Organization markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Underwater Marketing',
              url: 'https://www.example.com',
              logo: '/logo.png',
              sameAs: [],
            }),
          }}
        />
      </Head>
      <Navbar />
      <main className="flex flex-col justify-center items-center text-center pt-20 pb-10 px-4">
        <section className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark mb-6 leading-tight">
            Empowering Youth Sports with Elite Staff Capacity
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            We provide on‑demand operations support so you can focus on developing athletes and growing your organization.
          </p>
          <button
            onClick={() => setShowCalendar(true)}
            className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-dark transition-colors"
          >
            Schedule a Call
          </button>
        </section>
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Elite Operations</h2>
              <p className="text-gray-700">
                Our dedicated team handles the administrative load—registrations, schedules and communications—so you don’t have to.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">On‑Demand Support</h2>
              <p className="text-gray-700">
                Flexible staffing scaled to your needs. Ramp up quickly for busy seasons and scale back when you don’t.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-brand-dark mb-2">Premium Experience</h2>
              <p className="text-gray-700">
                A refined brand presence and seamless operations create trust and loyalty among athletes, parents and partners.
              </p>
            </div>
          </div>
        </section>
        {/* Calendar modal */}
        {showCalendar && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
            onClick={() => setShowCalendar(false)}
          >
            <div
              className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowCalendar(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-2xl font-semibold text-brand-dark mb-4">Book a Time</h3>
              <div id="ghl-calendar" className="h-80 overflow-hidden border border-gray-200 rounded">
                {/* GoHighLevel calendar embed */}
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <iframe src="https://api.leadconnectorhq.com/widget/booking/moLbhpNSHi4Hd4YxkCLP" style={{ width: '100%', border: 'none', overflow: 'hidden' }} scrolling="no" id="moLbhpNSHi4Hd4YxkCLP_1756838233028"></iframe>
                <br />
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript"></script>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
