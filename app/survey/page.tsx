import Image from "next/image";
import { SurveyEmbed } from "./survey-embed";
import { PixelEvent } from "../_landing/pixel";

export const metadata = {
  title: "F15 Training CENTR | A few quick questions",
  description:
    "Step 2 of your F15 application. A few quick questions so we can see whether F15 is the right fit for your goal.",
};

/**
 * This survey's own layout pins its Next/Back bar to the bottom of its own
 * iframe (not the real browser viewport), because it is designed to be
 * shown full-screen. Any header content placed above the iframe pushes that
 * bar down by the same amount, and inside an iframe that bar cannot "float"
 * back up to the visible screen the way position:fixed would on a normal
 * page. So the iframe is kept close to full viewport height with only a
 * slim top bar above it, which keeps the Next/Back bar on screen without
 * the visitor needing to scroll through blank space to find it.
 */
export default function SurveyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Reaching this page means the lead form was submitted. */}
      <PixelEvent event="Lead" dedupeKey="lead" />

      <nav className="h-11 sm:h-14 bg-black border-b border-white/[0.06] shrink-0 flex items-center">
        <div className="max-w-3xl mx-auto w-full px-3 sm:px-6 flex items-center justify-between gap-3">
          <Image
            src="/images/f15-logo.svg"
            alt="F15 Training CENTR"
            width={1402}
            height={559}
            className="h-5 sm:h-7 w-auto"
            unoptimized
            priority
          />
          <span className="flex items-center gap-2 text-white/45 text-[10px] sm:text-xs tracking-[0.14em] uppercase whitespace-nowrap">
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cf-red flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
            Step 2 of 3 &middot; <span className="text-cf-red">MSIDA</span>
          </span>
        </div>
      </nav>

      {/* Height matches the nav bar above exactly (h-11/h-14), so the survey's
          own internal viewport is essentially the real screen, and its
          fixed-to-iframe-bottom Next/Back bar lands at the real screen
          bottom instead of hundreds of pixels below the visible fold. */}
      <div className="h-[calc(100dvh-44px)] sm:h-[calc(100dvh-56px)] bg-white">
        <SurveyEmbed />
      </div>
    </div>
  );
}
