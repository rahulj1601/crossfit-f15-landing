import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">

      {/* HEADER */}
      <header className="bg-black/90 backdrop-blur-xl sticky top-0 z-50 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-center">
          <Image
            src="https://crossfitf15.com/wp-content/uploads/2024/06/a96482e43b89d93241c81979f0e4551c.png"
            alt="Crossfit F15 Logo"
            width={180}
            height={50}
            className="h-6 sm:h-7 w-auto"
          />
        </div>
      </header>

      {/* ============ SECTION 1: VSL ============ */}
      <section className="relative py-10 sm:py-16 px-5 sm:px-6 bg-black overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cf-red/[0.05] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center leading-tight mb-3 text-white">
              Your Free <span className="text-cf-red">No Sweat Intro</span>
            </h1>
            <p className="text-[#b0b0b0] text-base sm:text-lg text-center mb-8 sm:mb-10">
              See what makes CrossFit F15 different. No commitment, just clarity.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            {/* VIDEO PLACEHOLDER */}
            <div className="rounded-2xl overflow-hidden aspect-video bg-[#111] border border-white/10 flex items-center justify-center shadow-2xl shadow-black/50">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-cf-red/20 flex items-center justify-center mx-auto mb-4 pulse-glow">
                  <svg className="w-8 h-8 text-cf-red ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/30 text-sm">Video embed goes here</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-6 sm:mt-8">
              <a
                href="#book"
                className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-10 sm:px-14 py-3.5 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base tracking-wider uppercase hover:scale-105 active:scale-95"
              >
                Book Your Free Intro Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ SECTION 2: INFO (RED GRADIENT) ============ */}
      <section className="relative py-12 sm:py-16 px-5 sm:px-6 overflow-hidden bg-[#080808]">
        {/* Subtle red glow accents */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[500px] bg-cf-red/[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[200px] h-[400px] bg-cf-red/[0.02] rounded-full blur-[120px] pointer-events-none" />

        {/* Top border glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cf-red/40 to-transparent" />
        {/* Bottom border glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cf-red/40 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

            {/* Left - What it is */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 text-white">
                  What Is a No Sweat Intro?
                </h2>
                <p className="text-[#d0d0d0] text-base sm:text-lg leading-relaxed mb-4">
                  A free, no-pressure consultation with one of our coaches. We sit down with you, understand your goals, and show you exactly how CrossFit F15 can help you get there.
                </p>
                <p className="text-[#d0d0d0] text-base sm:text-lg leading-relaxed mb-6">
                  Whether you have never set foot in a gym or you have been training for years, this is your personalised starting point.
                </p>

                <div className="flex flex-wrap gap-3">
                  {["30 Minutes", "No Pressure", "100% Free"].map((label) => (
                    <div key={label} className="flex items-center gap-2 bg-white/[0.06] border border-cf-red/20 rounded-full px-4 py-2">
                      <svg className="w-4 h-4 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right - How it works */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 text-white">
                  Here&apos;s How It Works
                </h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Book your free intro below", desc: "Pick a time that suits you. Takes 30 seconds." },
                    { step: "2", title: "Chat with a coach", desc: "We learn about your goals and what hasn't worked before." },
                    { step: "3", title: "Get your personalised plan", desc: "Leave with a clear roadmap to start with confidence." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <div className="w-9 h-9 bg-cf-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-base mb-0.5">{item.title}</h3>
                        <p className="text-[#c0c0c0] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Testimonial + CTA row */}
          <ScrollReveal>
            <div className="mt-10 sm:mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-black/40 backdrop-blur-sm border border-cf-red/10 rounded-2xl p-6 sm:p-8">
              <div className="flex-1">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#d0d0d0] text-sm sm:text-base italic leading-relaxed">
                  &ldquo;The No Sweat Intro made everything so easy. No pressure at all, and I left feeling excited to start.&rdquo;
                </p>
                <p className="text-white font-semibold text-sm mt-2">Sarah M. <span className="text-[#909090] font-normal">- F15 Member</span></p>
              </div>

              <a
                href="#book"
                className="cta-glow flex-shrink-0 bg-cf-red hover:bg-cf-red-dark text-white font-bold px-8 sm:px-10 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wider uppercase hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Book Your Free Intro
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ SECTION 3: CALENDAR ============ */}
      <section id="book" className="py-10 sm:py-14 px-2 sm:px-[10%] bg-black">
        <div className="w-full mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-2 text-white">
              Pick a Time That Works for You
            </h2>
            <p className="text-[#b0b0b0] text-base sm:text-lg text-center mb-6 sm:mb-8">
              Choose a slot below and we will confirm your booking right away.
            </p>
          </ScrollReveal>

          <div className="rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 p-1 sm:p-4 shadow-2xl shadow-black/50">
            <iframe
              src="https://book.crossfitf15.com/widget/bookings/f15-first-step-intro"
              style={{ width: "100%", height: "700px", border: "none" }}
              scrolling="no"
              title="Book Your No Sweat Intro"
            />
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[#a0a0a0] text-sm">Trusted by 600+ athletes in Malta</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-4 sm:px-6 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <Image
            src="https://crossfitf15.com/wp-content/uploads/2024/06/a96482e43b89d93241c81979f0e4551c.png"
            alt="Crossfit F15 Logo"
            width={120}
            height={35}
            className="h-4 w-auto mx-auto opacity-40 mb-3"
          />
          <p className="text-[#707070] text-xs leading-relaxed max-w-lg mx-auto">
            This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is not endorsed by Facebook in any way. Facebook is a trademark of Facebook, Inc.
          </p>
          <p className="text-[#505050] text-xs">
            &copy; {new Date().getFullYear()} CrossFit F15. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
