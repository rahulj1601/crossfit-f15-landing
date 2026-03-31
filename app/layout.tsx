import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrossFit F15 | Book Your First Step Intro",
  description:
    "Your journey at CrossFit F15 starts with a 30-minute First Step Intro. Book your free consultation today.",
  openGraph: {
    title: "CrossFit F15 | Book Your First Step Intro",
    description:
      "Your journey at CrossFit F15 starts with a 30-minute First Step Intro. Book your free consultation today.",
    images: [
      "https://assets.cdn.filesafe.space/PE8avF50BBboGGbRC0bY/media/69cbcaa408fd234632ffd1ee.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-black text-white font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
