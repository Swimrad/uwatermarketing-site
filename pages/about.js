import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About – Underwater Marketing</title>
        <meta
          name="description"
          content="Learn about the vision and story behind Underwater Marketing, the trusted partner for youth sports organizations seeking elite operational support."
        />
        <meta property="og:title" content="About – Underwater Marketing" />
        <meta
          property="og:description"
          content="Learn about the vision and story behind Underwater Marketing, the trusted partner for youth sports organizations seeking elite operational support."
        />
      </Head>
      <Navbar />
      <main className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">Our Story</h1>
          <p className="text-lg text-gray-700">
            Born from a passion for youth sports and a frustration with administrative
            bottlenecks, Underwater Marketing was founded to liberate coaches and program
            directors from the paperwork that slows them down. We believe that
            every athlete deserves a world‑class experience and every organization
            should operate like a billion‑dollar brand—regardless of size.
          </p>
          <p className="text-lg text-gray-700">
            Our team combines decades of operations expertise with a love for
            competition. We embed seamlessly into your organization, providing
            reliable staff capacity on demand. Think of us as your secret weapon,
            handling registration, communications, scheduling and more so you can
            focus on mentoring athletes and growing your mission.
          </p>
          <h2 className="text-2xl font-semibold text-brand-dark mt-8">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-medium text-brand-dark">Excellence:</span> We strive for best‑in‑class operations and brand experiences.</li>
            <li><span className="font-medium text-brand-dark">Integrity:</span> We build trust through transparency and doing what’s right.</li>
            <li><span className="font-medium text-brand-dark">Innovation:</span> We embrace technology and creativity to stay ahead.</li>
            <li><span className="font-medium text-brand-dark">Empowerment:</span> We enable organizations to focus on athlete development and community impact.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
