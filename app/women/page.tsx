import type { Metadata } from "next";
import { LandingPage } from "../_landing/landing-page";
import { WOMEN } from "../_landing/copy";

export const metadata: Metadata = {
  title: WOMEN.meta.title,
  description: WOMEN.meta.description,
  openGraph: { title: WOMEN.meta.title, description: WOMEN.meta.description },
};

export default function WomenPage() {
  return <LandingPage copy={WOMEN} />;
}
