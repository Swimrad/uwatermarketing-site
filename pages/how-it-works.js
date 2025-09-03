import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function How(){
  return (
    <>
      <Head><title>How It Works – Underwater Marketing</title></Head>
      <Header onBook={()=>{}}/>
      <main className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <h1 className="font-display text-4xl font-extrabold text-brand-char text-center">How It Works</h1>
        <p className="text-center mt-3 text-brand-char/70">72-hour setup. We run the busy work. You coach.</p>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["Discover","We learn your program and goals."],
            ["Connect","Website, email, phone — no new tools to learn."],
            ["Run","We reply, book, remind, and follow up."]
          ].map(([t,s])=>(
            <div key={t} className="card">
              <h3 className="font-heading text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-brand-char/70">{s}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 p-8 text-center">
          <h2 className="font-heading text-2xl font-semibold text-brand-char">72-Hour Setup</h2>
          <p className="mt-2 text-brand-char/70">Day 0 intake → Day 1 build → Day 2 test → Day 3 live.</p>
        </section>
      </main>
      <Footer/>
    </>
  );
}
