import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "F15 Training Centr | Free No Sweat Intro",
  description:
    "Book your free, no-pressure consultation at F15 Training Centr in Malta. Meet a coach, see the gym, and get a personalised plan to start with confidence.",
  openGraph: {
    title: "F15 Training Centr | Free No Sweat Intro",
    description:
      "Book your free, no-pressure consultation at F15 Training Centr in Malta. Meet a coach and get started.",
    images: [
      "https://crossfitf15.com/wp-content/uploads/2024/07/High-Five-Time-683x1024.webp",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=GT-PHCDVHFF" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-PHCDVHFF');
          `}
        </Script>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1098226248508182');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}} alt="" src="https://www.facebook.com/tr?id=1098226248508182&ev=PageView&noscript=1" />
        </noscript>
      </head>
      <body className="min-h-screen bg-black text-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
