import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrossFit F15 | The 28-Day Strong Start",
  description:
    "The only gym in Malta that doesn't let you start alone. A structured 28-day coaching system designed to build confidence, technique, and real results.",
  openGraph: {
    title: "CrossFit F15 | The 28-Day Strong Start",
    description:
      "The only gym in Malta that doesn't let you start alone. Book your free consultation today.",
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
