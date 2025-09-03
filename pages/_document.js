import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Poppins:wght@600&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#003A70" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body className="bg-white text-brand-char font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
