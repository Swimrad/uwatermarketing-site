import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Poppins:wght@600&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#003A70" />
        <meta property="og:title" content="Underwater Marketing" />
        <meta
          property="og:description"
          content="We help youth sports run smarter—fast replies, booked trials, on-time payments."
        />
        <meta property="og:type" content="website" />
      </Head>
      <body className="bg-white text-brand-char font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
