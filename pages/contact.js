import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – Underwater Marketing</title>
        <meta
          name="description"
          content="Get in touch with Underwater Marketing for questions, partnerships or support. Our team is ready to help your youth sports organization thrive."
        />
        <meta property="og:title" content="Contact – Underwater Marketing" />
        <meta
          property="og:description"
          content="Get in touch with Underwater Marketing for questions, partnerships or support. Our team is ready to help your youth sports organization thrive."
        />
      </Head>
      <Navbar />
      <main className="pt-20 pb-12 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700">
            We’d love to hear from you. Whether you have questions about our services or want to explore a partnership, please drop us a line.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">Send a Message</h2>
            <div id="ghl-contact-form" className="space-y-4">
              {/* GoHighLevel contact form embed */}
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/bOg3QMtZ6E519uGw8PTO"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                id="inline-bOg3QMtZ6E519uGw8PTO"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Contact Us Form"
                data-height="1055"
                data-layout-iframe-id="inline-bOg3QMtZ6E519uGw8PTO"
                data-form-id="bOg3QMtZ6E519uGw8PTO"
                title="Contact Us Form"
              ></iframe>
              <script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
