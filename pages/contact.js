import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact(){
  return (
    <>
      <Head><title>Contact – Underwater Marketing</title></Head>
      <Header onBook={()=>{}}/>
      {/* Hide sticky-bar on this page via a tiny style in _document if needed */}
      <main className="mx-auto max-w-3xl px-6 pt-28 pb-16">
        <h1 className="font-display text-4xl font-extrabold text-brand-char text-center">Contact</h1>
        <p className="text-center mt-3 text-brand-char/70">We reply the same day.</p>

        <section className="mt-8 card">
          <div id="ghl-contact-form">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/bOg3QMtZ6E519uGw8PTO"
              style={{width:"100%",height:"1055px",border:"none",borderRadius:"12px"}}
              id="inline-bOg3QMtZ6E519uGw8PTO"
              title="Contact Us Form"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js"/>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
