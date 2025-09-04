import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Dorado(){
  return (
    <>
      <Head><title>Dorado Swim Academy – Case Study</title></Head>
      <Header onBook={()=>{}}/>
      <main className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <h1 className="font-display text-4xl font-extrabold text-brand-char text-center">Dorado Swim Academy</h1>
        <p className="text-center mt-3 text-brand-char/70">From missed calls → market leader in 4 weeks.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["71%","market share"],
            ["83%","inquiry-to-member conversion"],
            ["98%","on-time payments"]
          ].map(([n,l])=>(
            <div key={n} className="card text-center">
              <div className="font-display text-4xl font-extrabold text-brand-blue">{n}</div>
              <div className="text-brand-char/70">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="font-heading text-xl font-semibold">Before</h3>
            <ul className="mt-3 space-y-2 text-brand-char/80">
              <li>• Missed inquiries, slow replies</li>
              <li>• Trial no-shows at 35%</li>
              <li>• Owner buried in admin</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-heading text-xl font-semibold">After</h3>
            <ul className="mt-3 space-y-2 text-brand-char/80">
              <li>• Replies under 60 seconds</li>
              <li>• No-shows down to 8%</li>
              <li>• 15 hours/week saved</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/pricing#quickstart" className="btn-primary">Start Quickstart</a>
        </div>
      </main>
      <Footer/>
    </>
  );
}
