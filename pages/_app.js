// pages/_app.js
import "../styles/globals.css";
import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ONE announcement bar */}
      <AnnouncementBar />
      {/* ONE header */}
      <Header />

      {/* Page content */}
      <Component {...pageProps} />
    </div>
  );
}
