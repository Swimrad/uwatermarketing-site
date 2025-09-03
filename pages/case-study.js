import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CaseStudy() {
  return (
    <>
      <Head>
        <title>Case Study – Underwater Marketing</title>
        <meta
          name="description"
          content="Discover how Underwater Marketing transformed a youth sports organization by delivering exceptional operational support and elevating their brand."
        />
        <meta property="og:title" content="Case Study – Underwater Marketing" />
        <meta
          property="og:description"
          content="Discover how Underwater Marketing transformed a youth sports organization by delivering exceptional operational support and elevating their brand."
        />
      </Head>
      <Navbar />
      <main className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">Case Study</h1>
          <p className="text-lg text-gray-700">
            When a premier youth basketball club needed to streamline operations and
            scale programming, they turned to Underwater Marketing. Their administrative
            overhead was overwhelming coaches, and registration errors were
            eroding trust.
          </p>
          <h2 className="text-2xl font-semibold text-brand-dark mt-6">Challenges</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Lack of dedicated operational staff causing burnout.</li>
            <li>Outdated systems leading to manual errors in registration and scheduling.</li>
            <li>Limited capacity to handle growth during peak seasons.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-brand-dark mt-6">Our Approach</h2>
          <p className="text-lg text-gray-700">
            Underwater Marketing embedded a virtual operations team within the club. We
            implemented streamlined registration workflows, automated
            communications and real‑time scheduling tools. Our team handled day‑to‑day
            administration, while the club focused on coaching and athlete
            development.
          </p>
          <h2 className="text-2xl font-semibold text-brand-dark mt-6">Results</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>40% reduction in administrative time spent by coaches.</li>
            <li>30% increase in on‑time payments and registrations.</li>
            <li>Enhanced parent satisfaction and improved brand perception.</li>
          </ul>
          <p className="text-lg text-gray-700 mt-4">
            By partnering with Underwater Marketing, the club unlocked new revenue
            opportunities and positioned itself as a leader in youth sports.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
