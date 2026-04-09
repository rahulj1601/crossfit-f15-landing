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

      {/* ===== 1. HERO + VSL (BLACK) ===== */}
      <section className="relative py-10 sm:py-16 px-5 sm:px-6 bg-black overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cf-red/[0.04] rounded-full blur-[150px] pointer-events-none" />

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
              <a href="#book" className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-10 sm:px-14 py-3.5 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base tracking-wider uppercase hover:scale-105 active:scale-95">
                Book Your Free Intro Now
              </a>
              <p className="text-white/50 text-sm mt-3">30 minutes. No pressure. Just a plan.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 2. PAIN POINT (RED) ===== */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 bg-cf-red">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-5 leading-tight text-white">
              Most People Don&apos;t Fail the Gym...{" "}
              The Gym Fails Them.
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 font-medium">
              Generic programs, crowded floors, and zero accountability are why 80% of people quit within 3 months. You aren&apos;t lazy - you&apos;re just unsupported.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <a href="#book" className="inline-block bg-white text-cf-red font-bold px-10 sm:px-12 py-3.5 sm:py-4 rounded-full text-sm tracking-wider uppercase hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95">
              That&apos;s Exactly What We Fix
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 3. WHAT IS IT + HOW IT WORKS (BLACK) ===== */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 text-white">
                  What Is a No Sweat Intro?
                </h2>
                <p className="text-[#c0c0c0] text-base sm:text-lg leading-relaxed mb-4">
                  A free, no-pressure consultation with one of our coaches. We sit down with you, understand your goals, and show you exactly how CrossFit F15 can help you get there.
                </p>
                <p className="text-[#c0c0c0] text-base sm:text-lg leading-relaxed mb-6">
                  Whether you have never set foot in a gym or you have been training for years, this is your personalised starting point.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["30 Minutes", "No Pressure", "100% Free"].map((label) => (
                    <div key={label} className="flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-2">
                      <svg className="w-4 h-4 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white text-sm font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 text-white">
                  Here&apos;s How It Works
                </h2>
                <div className="space-y-5">
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
                        <h3 className="text-white font-bold text-base sm:text-lg mb-0.5">{item.title}</h3>
                        <p className="text-[#b0b0b0] text-sm sm:text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center mt-10 sm:mt-12">
              <a href="#book" className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-10 sm:px-12 py-3.5 sm:py-4 rounded-full transition-all duration-300 text-sm tracking-wider uppercase hover:scale-105 active:scale-95">
                Book Your Free Intro
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 4. TESTIMONIALS (BLACK) ===== */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 bg-[#060606]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-8 sm:mb-10 text-white">
              What Our Members Say
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "The No Sweat Intro made everything so easy. No pressure at all, and I left feeling excited to start.", name: "Sarah M." },
              { quote: "The coaches at F15 are on another level. I finally feel like I know what I'm doing in the gym.", name: "Marco V." },
              { quote: "I was intimidated by CrossFit until I did the intro. Best decision I've ever made.", name: "David P." },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="bg-[#0e0e0e] border border-white/[0.06] rounded-2xl p-6 sm:p-8 h-full">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#c0c0c0] text-sm sm:text-base italic leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cf-red/20 flex items-center justify-center text-cf-red text-xs font-bold">
                      {t.name[0]}
                    </div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-8 sm:mt-10">
              <a href="#book" className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-10 sm:px-12 py-3.5 sm:py-4 rounded-full transition-all duration-300 text-sm tracking-wider uppercase hover:scale-105 active:scale-95">
                Book Your Free Intro
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 5. URGENCY (RED) ===== */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 bg-cf-red">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight text-white uppercase">
              We Don&apos;t Accept Everyone
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 font-medium">
              F15 is a boutique facility. To maintain coaching quality, we limit new intakes each month. Once spots are gone, the waitlist opens.
            </p>
            <a href="#book" className="inline-block bg-white text-cf-red font-bold px-10 sm:px-12 py-3.5 sm:py-4 rounded-full text-sm tracking-wider uppercase hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95">
              Secure Your Spot Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== 6. CALENDAR (BLACK) ===== */}
      <section id="book" className="py-12 sm:py-16 px-2 sm:px-[10%] bg-black">
        <div className="w-full mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight text-white">
                Ready to Start?
              </h2>
              <p className="text-[#b0b0b0] text-base sm:text-lg">
                Pick a time below and we&apos;ll take it from there.
              </p>
            </div>
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
          <p className="text-[#404040] text-[10px] leading-relaxed max-w-lg mx-auto">
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
