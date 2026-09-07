import type { Metadata } from "next";
import { LandingPage } from "../_landing/landing-page";
import { MEN } from "../_landing/copy";

export const metadata: Metadata = {
  title: MEN.meta.title,
  description: MEN.meta.description,
  openGraph: { title: MEN.meta.title, description: MEN.meta.description },
};

export default function MenPage() {
  return <LandingPage copy={MEN} />;
}
