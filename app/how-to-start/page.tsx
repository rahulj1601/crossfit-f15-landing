import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";

export default function HowToStart() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">

      {/* HEADER */}
      <header className="bg-black/90 backdrop-blur-xl sticky top-0 z-50 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <a href="https://crossfitf15.com/">
            <Image
              src="https://crossfitf15.com/wp-content/uploads/2024/06/a96482e43b89d93241c81979f0e4551c.png"
              alt="Crossfit F15 Logo"
              width={180}
              height={50}
              className="h-6 sm:h-7 w-auto"
            />
          </a>
          <a
            href="#book"
            className="cta-glow bg-cf-red text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-cf-red-dark transition-colors uppercase tracking-wider"
          >
            Start Now
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* SWAP: Replace with community/friendly people image */}
          <Image
            src="https://crossfitf15.com/wp-content/uploads/2024/07/High-Five-Time-683x1024.webp"
            alt="CrossFit F15 community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center py-16 sm:py-20">
          <ScrollReveal>
            <span className="inline-block bg-cf-red/20 text-white font-bold text-xs sm:text-sm tracking-[0.15em] uppercase px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-5 sm:mb-6 border border-cf-red/30 backdrop-blur-sm">
              Limited to 10 Onboarding Spots Per Month
            </span>
          </ScrollReveal>

          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 text-white">
              The Only Gym in Malta That{" "}
              <span className="text-cf-red">Doesn&apos;t Let You Start Alone</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-white/80 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              A structured coaching system designed to build confidence, technique, and real results before you ever join classes.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <a
              href="#book"
              className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-10 sm:px-14 py-4 sm:py-5 rounded-full transition-all duration-300 text-sm sm:text-lg tracking-wider uppercase hover:scale-105 active:scale-95"
            >
              Book Your Free Consultation
            </a>
            <p className="text-white/70 text-sm sm:text-base font-medium mt-4">
              30 minutes. No pressure. Just a plan.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-white/70 text-sm sm:text-base font-medium">
              {["No experience needed", "Beginner to advanced", "Personal approach from day one"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PAIN POINT ===== */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-[#111111]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-5 leading-tight text-white">
              Most People Don&apos;t Fail the Gym...{" "}
              <span className="text-[#999]">They Just Never Get Properly Started</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-3 max-w-md mx-auto text-left mb-8">
              {["You don't know what you're doing", "You feel behind everyone", "You lose confidence and stop"].map((pain) => (
                <div key={pain} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cf-red rounded-full flex-shrink-0" />
                  <span className="text-[#c0c0c0] text-base sm:text-lg">{pain}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="inline-block bg-cf-red text-white font-extrabold text-lg sm:text-xl px-8 py-3 rounded-full">
              That&apos;s exactly what we fix.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== OUR PROVEN STRONG START PROGRAM ===== */}
      <section className="relative py-14 sm:py-20 px-5 sm:px-6 overflow-hidden bg-gradient-to-br from-[#0a0000] via-[#150505] to-[#0a0000]">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cf-red/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cf-red/40 to-transparent" />
        <div className="absolute top-0 left-0 w-[400px] h-[600px] bg-cf-red/[0.04] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-cf-red text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3 text-center sm:text-left">Your Unique Starting Point</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-5 text-white">
                  Our Proven{" "}
                  <span className="text-cf-red">Strong Start</span> Program
                </h2>

                <div className="space-y-1.5 text-[#c0c0c0] text-base sm:text-lg mb-6">
                  <p>This is not a trial.</p>
                  <p>This is not random classes.</p>
                </div>

                <p className="text-white text-base sm:text-lg font-semibold mb-5">
                  This is a guided onboarding system that takes you from:
                </p>

                <div className="space-y-2 mb-8">
                  <p className="text-[#999] text-base italic">&ldquo;I have no idea what I&apos;m doing&rdquo;</p>
                  <p className="text-[#666] text-sm">to</p>
                  <p className="text-white font-bold text-base sm:text-lg">&ldquo;I actually feel confident here&rdquo;</p>
                </div>

                <div className="space-y-3 mb-8">
                  {["You start with a coach", "You learn before you perform", "You build confidence first", "You progress step by step"].map((p) => (
                    <div key={p} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-[#d0d0d0] text-base sm:text-lg">{p}</span>
                    </div>
                  ))}
                </div>

                <a href="#book" className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wider uppercase hover:scale-105 active:scale-95">
                  Start Your Journey
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              {/* SWAP: Replace with coaching image from client */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://crossfitf15.com/wp-content/uploads/2024/07/explanation-demo.webp"
                  alt="Coach explaining technique"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== HOW TO START (RED BG) ===== */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-cf-red">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Here&apos;s How You Start
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", img: "https://crossfitf15.com/wp-content/uploads/2024/07/warm-up-scaled.webp", title: "Book Your Free Consultation", desc: "We understand your goals, your past struggles, and your starting point." },
              { step: "02", img: "https://crossfitf15.com/wp-content/uploads/2024/07/skill-scaled.webp", title: "Get Your Personal Plan", desc: "We show you exactly how you'll build strength, confidence, and results." },
              { step: "03", img: "https://crossfitf15.com/wp-content/uploads/2024/07/workout-683x1024.webp", title: "Start Your Fully Guided Journey", desc: "You're guided step-by-step until you feel ready, confident, and fully integrated." },
            ].map((card, i) => (
              <ScrollReveal key={card.step} delay={i * 100}>
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full hover:border-white/20 transition-all duration-300">
                  <div className="relative h-44 sm:h-52 overflow-hidden">
                    <Image src={card.img} alt={card.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-11 h-11 bg-white text-cf-red rounded-full flex items-center justify-center text-lg font-extrabold">
                      {card.step}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-2 tracking-tight">{card.title}</h3>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-8 sm:mt-10">
              <a href="#book" className="inline-block bg-white text-cf-red font-bold px-10 sm:px-12 py-3.5 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base tracking-wider uppercase hover:bg-white/90 hover:scale-105 active:scale-95">
                Book Your Free Consultation
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== THIS IS FOR YOU IF ===== */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
                This Is <span className="text-cf-red italic">For You</span> If...
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-5">
                {[
                  { bold: "You've tried gyms before", rest: " and stopped." },
                  { bold: "You feel lost", rest: " in group classes." },
                  { bold: "You want real coaching,", rest: " not guessing." },
                  { bold: "You want to feel confident", rest: " training." },
                  { bold: "You want to get the results", rest: " you never got." },
                ].map((item) => (
                  <div key={item.bold} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-cf-red flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-[#d0d0d0] text-base sm:text-lg">
                      <span className="text-white font-bold">{item.bold}</span>
                      {item.rest}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-10 sm:mt-12 text-center border-t border-white/[0.08] pt-8">
              <p className="text-[#c0c0c0] text-base sm:text-lg mb-1">You don&apos;t need to be fit to start.</p>
              <p className="text-white font-extrabold text-xl sm:text-2xl">You just need to start the right way.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-8 sm:mb-10 text-white">
              Real People. Real Confidence. Real Change.
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "I finally understood what I was doing... and I didn't quit this time.", name: "Marco V." },
              { quote: "The coaching makes all the difference. You're never lost.", name: "Sarah G." },
              { quote: "I came in with zero confidence. Now I feel like I belong.", name: "David P." },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="bg-[#151515] border border-white/[0.08] rounded-2xl p-6 sm:p-8 h-full">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#c0c0c0] text-base sm:text-lg italic leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-cf-red/20 flex items-center justify-center text-cf-red text-sm font-bold">
                      {t.name[0]}
                    </div>
                    <p className="text-white font-semibold text-base">{t.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY THIS WORKS ===== */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
                  Why This Works{" "}
                  <span className="text-[#888]">(When Everything Else Didn&apos;t)</span>
                </h2>
                <p className="text-[#c0c0c0] text-base sm:text-lg mb-8 leading-relaxed">
                  Because you&apos;re not thrown into the deep end. You&apos;re coached, guided, and supported from day one.
                </p>
                <div className="space-y-3">
                  {["You build confidence before intensity", "You learn before being pushed", "You have a coach who knows you", "You follow a clear path"].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#d0d0d0] text-base sm:text-lg">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://crossfitf15.com/wp-content/uploads/2024/07/Cool-Down-545x1024.webp"
                  alt="Cool down and coaching"
                  width={545}
                  height={1024}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== URGENCY (SOLID RED) ===== */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-cf-red">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight text-white uppercase">
              We Don&apos;t Accept Everyone
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 font-medium">
              F15 is a boutique facility. To maintain coaching quality, we limit new intakes to 10 athletes per month. Once spots are gone, the waitlist opens.
            </p>
            <a href="#book" className="inline-block bg-white text-cf-red font-bold px-10 sm:px-12 py-4 rounded-full text-sm tracking-wider uppercase hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95">
              Secure Your Spot Now
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FINAL CTA + BOOKING ===== */}
      <section id="book" className="py-14 sm:py-20 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight text-white">
                This Isn&apos;t a <span className="text-cf-red italic">Gym Trial...</span>
              </h2>
              <p className="text-[#c0c0c0] text-lg sm:text-xl font-medium">
                It&apos;s the first day of your new standard.
              </p>
            </div>
          </ScrollReveal>

          <div className="rounded-2xl overflow-hidden bg-[#0e0e0e] border border-white/10 p-1 sm:p-4 shadow-2xl">
            <iframe
              src="https://book.crossfitf15.com/widget/bookings/f15-first-step-intro"
              style={{ width: "100%", height: "700px", border: "none" }}
              scrolling="no"
              title="Book Your Free Consultation"
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
            <span className="text-[#a0a0a0] text-sm font-medium">Trusted by 600+ athletes in Malta</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-4 sm:px-6 bg-[#060606] border-t border-white/[0.08]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="https://crossfitf15.com/wp-content/uploads/2024/06/a96482e43b89d93241c81979f0e4551c.png"
            alt="Crossfit F15 Logo"
            width={120}
            height={35}
            className="h-4 w-auto opacity-40"
          />
          <div className="flex items-center gap-6 text-[#606060] text-xs">
            {["Privacy", "Terms", "Safety"].map((link) => (
              <a key={link} href="#" className="hover:text-white/60 transition-colors">{link}</a>
            ))}
          </div>
          <p className="text-[#505050] text-xs">
            &copy; {new Date().getFullYear()} CrossFit F15
          </p>
        </div>
      </footer>
    </div>
  );
}
