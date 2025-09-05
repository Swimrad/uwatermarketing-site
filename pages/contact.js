// pages/contact.js
import Head from "next/head";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Underwater Marketing</title>
        <meta name="description" content="We reply the same day." />
      </Head>

      <main className="bg-black text-white">
        {/* Do NOT render AnnouncementBar / Header here. They are global in _app.js */}
        <section className="mx-auto max-w-4xl px-6 py-20">
          <h1 className="text-3xl font-bold text-center">Contact</h1>
          <p className="mt-2 text-center text-white/70">We reply the same day.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
