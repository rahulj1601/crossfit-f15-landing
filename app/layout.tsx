import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrossFit F15 | Free No Sweat Intro",
  description:
    "Book your free, no-pressure consultation at CrossFit F15 Malta. Meet a coach, see the gym, and get a personalised plan to start with confidence.",
  openGraph: {
    title: "CrossFit F15 | Free No Sweat Intro",
    description:
      "Book your free, no-pressure consultation at CrossFit F15 Malta. Meet a coach and get started.",
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
      <body className="min-h-screen bg-black text-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
