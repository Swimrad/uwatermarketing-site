import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – Underwater Marketing</title>
        <meta
          name="description"
          content="We reply the same day. Contact Underwater Marketing about youth sports operations support, partnerships, or questions."
        />
        <meta property="og:title" content="Contact – Underwater Marketing" />
        <meta
          property="og:description"
          content="We reply the same day. Contact Underwater Marketing about youth sports operations support, partnerships, or questions."
        />
        {/* Organization + Contact schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Underwater Marketing",
              url: "https://yourdomain.com",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  areaServed: "US",
                  availableLanguage: ["English"],
                },
              ],
            }),
          }}
        />
      </Head>

      <Navbar />

      {/* Hide sticky CTA on this page so it doesn't cover the form */}
      <style jsx global>{`
        .sticky-bar {
          display: none !important;
        }
      `}</style>

      <main className="pt-20 pb-12 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-brand-char">Contact Us</h1>
          <p className="text-lg text-brand-char/80">
            We reply the same day. Have a question or want to explore a partnership? Send a message
            or book a quick call.
          </p>

          {/* Quick info / alternatives */}
          <div className="rounded-lg border border-gray-200 p-4 bg-white">
            <p className="text-sm text-brand-char/80">
              Prefer email?{" "}
              <a
                href="mailto:hello@uwatermarketing.com"
                className="font-semibold text-brand-blue underline-offset-2 hover:underline"
              >
                hello@uwatermarketing.com
              </a>
            </p>
          </div>

          {/* Message form (GHL) */}
          <section className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-brand-char mb-4">Send a Message</h2>
            <div id="ghl-contact-form">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/bOg3QMtZ6E519uGw8PTO"
                // fixed height so layout is stable; GHL script manages internal sizing
                style={{ width: "100%", height: "1055px", border: "none", borderRadius: "12px" }}
                id="inline-bOg3QMtZ6E519uGw8PTO"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-activation-type="alwaysActivated"
                data-deactivation-type="neverDeactivate"
                data-form-name="Contact Us Form"
                data-height="1055"
                data-layout-iframe-id="inline-bOg3QMtZ6E519uGw8PTO"
                data-form-id="bOg3QMtZ6E519uGw8PTO"
                title="Contact Us Form"
                loading="lazy"
              />
              <script src="https://link.msgsndr.com/js/form_embed.js" />
            </div>
          </section>

          {/* Optional: on-page scheduling (uses your existing calendar) */}
          <section className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-2xl font-semibold text-brand-char mb-4">Schedule a Call</h2>
            <p className="text-brand-char/80 mb-4">
              Want to talk now? Pick a time that works for you.
            </p>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/moLbhpNSHi4Hd4YxkCLP"
                style={{ width: "100%", height: "700px", border: "none" }}
                scrolling="no"
                title="Book a Call"
                loading="lazy"
              />
              <script src="https://link.msgsndr.com/js/form_embed.js" />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
