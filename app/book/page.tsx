import Image from "next/image";
import { CursorGlow } from "../cursor-glow";

export default function BookPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <CursorGlow />

      {/* Nav - minimal */}
      <nav className="bg-black/90 backdrop-blur-xl border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-between">
          <a href="/">
            <div className="relative h-7 sm:h-8 w-24 sm:w-28 overflow-hidden my-2.5 sm:my-3">
              <Image
                src="https://assets.cdn.filesafe.space/PE8avF50BBboGGbRC0bY/media/69cbcbb15472d488619ed18e.jpg"
                alt="CrossFit F15"
                width={300}
                height={300}
                className="absolute inset-0 w-full h-[200%] object-cover object-center -top-[50%]"
              />
            </div>
          </a>
          <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-1.5">
            <span className="w-5 h-5 bg-cf-red rounded-full flex items-center justify-center text-[10px] font-bold text-white">
              2
            </span>
            <span className="text-white/40 text-[10px] sm:text-xs tracking-wider uppercase">
              Step 2 of 2
            </span>
          </div>
        </div>
      </nav>

      {/* Calendar section */}
      <section className="flex-1 pt-8 sm:pt-12 pb-12 sm:pb-16 px-3 sm:px-6 bg-[#040404] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cf-red/[0.06] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <svg
                className="w-5 h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-green-400 text-xs sm:text-sm font-medium">
                Details saved
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Now Pick a <span className="gradient-text">Time</span>
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto font-light mt-2 sm:mt-3">
              Choose a time that works for you. We&apos;ll confirm your booking
              right away.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-cf-red/10 via-transparent to-cf-red/5 rounded-2xl" />
            <div className="relative bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-1 sm:p-6 shadow-2xl">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/4MLW8Kg9AL4vM8CI9L2E"
                style={{ width: "100%", height: "700px", border: "none" }}
                scrolling="no"
                id="msgsndr-calendar"
                title="Book Your First Step Intro"
              />
            </div>
          </div>

          {/* Trust signals */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/30 text-[10px] sm:text-xs tracking-wide">
            {["100% Free", "No Commitment", "30 Minutes"].map((text) => (
              <div key={text} className="flex items-center gap-1.5">
                <svg
                  className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cf-red flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="py-4 px-4 sm:px-6 bg-black border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-700 text-[9px] sm:text-xs tracking-wide">
            &copy; {new Date().getFullYear()} CrossFit F15. All rights reserved.
          </p>
        </div>
      </footer>

      <script src="https://link.msgsndr.com/js/form_embed.js" async />
    </div>
  );
}
