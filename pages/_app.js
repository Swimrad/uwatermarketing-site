import "../styles/globals.css";
import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnnouncementBar />
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
