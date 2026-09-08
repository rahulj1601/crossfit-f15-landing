import Image from "next/image";
import { SurveyEmbed } from "./survey-embed";
import { PixelEvent } from "../_landing/pixel";

export const metadata = {
  title: "F15 Training CENTR | A few quick questions",
  description:
    "Step 2 of your F15 application. A few quick questions so we can see whether F15 is the right fit for your goal.",
};

export default function SurveyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Reaching this page means the lead form was submitted. */}
      <PixelEvent event="Lead" dedupeKey="lead" />
      {/* Logo only. Nothing here should compete with finishing the questions. */}
      <nav className="bg-black/90 backdrop-blur-xl border-b border-white/[0.05] sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <Image
            src="/images/f15-logo.svg"
            alt="F15 Training CENTR"
            width={1402}
            height={559}
            className="h-7 sm:h-9 w-auto"
            unoptimized
            priority
          />
          <span className="text-white/45 text-[10px] sm:text-xs tracking-[0.18em] uppercase whitespace-nowrap">
            Step 2 of 3 · A few questions
          </span>
        </div>
      </nav>

      <section className="flex-1 pt-8 sm:pt-12 pb-12 sm:pb-16 px-3 sm:px-6 bg-[#040404] relative overflow-x-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cf-red/[0.06] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-7 sm:mb-9 px-2">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              ALMOST THERE. A FEW QUICK QUESTIONS.
            </h1>
            <p className="text-[#b8b8b8] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              This helps us understand where you are now and what you want to achieve, so your
              consultation is about you rather than about us.
            </p>

            <p className="inline-flex items-center gap-2 mt-5 rounded-full border border-cf-red/30
                          bg-cf-red/[0.08] px-4 py-2 text-white text-xs sm:text-sm font-semibold">
              <svg className="w-4 h-4 text-cf-red flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
              <span>
                We train in <span className="text-cf-red">MSIDA</span>, Malta
              </span>
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-cf-red/10 via-transparent to-cf-red/5 rounded-2xl" />
            <div className="relative bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-1 sm:p-6 shadow-2xl">
              <SurveyEmbed />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-5 px-4 sm:px-6 bg-black border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white/30 text-[10px] sm:text-xs tracking-wide">
            F15 Training CENTR · 58 Triq L-Universita, Msida · +356 9979 1664
          </p>
        </div>
      </footer>
    </div>
  );
}
