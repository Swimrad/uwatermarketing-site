// pages/about.js
import Head from "next/head";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About | Underwater Marketing</title>
        <meta name="description" content="Who we are and what we do." />
      </Head>

      <main className="bg-black text-white">
        {/* No AnnouncementBar / Header here */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <h1 className="text-3xl font-bold">About</h1>
          <p className="mt-4 text-white/80">
            We install a 24/7 AI enrollment team for youth sports programs—capturing inquiries,
            booking trials, nurturing parents, and keeping payments on time.
          </p>
        </section>

        <Footer />
      </main>
    </>
  );
}
