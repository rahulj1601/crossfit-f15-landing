import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";
import { CursorGlow } from "./cursor-glow";
import { LeadForm } from "./lead-form";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <CursorGlow />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-between">
          <a href="#">
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
          <a
            href="#book"
            className="group relative bg-cf-red hover:bg-cf-red-dark text-white font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-md transition-all duration-300 text-[10px] sm:text-xs tracking-wider uppercase active:scale-95 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Book Free Consultation</span>
          </a>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://assets.cdn.filesafe.space/PE8avF50BBboGGbRC0bY/media/69cbcaa408fd234632ffd1ee.jpg"
            alt="CrossFit F15 gym"
            fill
            className="object-cover hero-bg-zoom"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-cf-red/[0.07] rounded-full blur-[100px] glow-orb pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center pt-16 sm:pt-24 pb-8">
          <div className="animate-fade-up">
            <span className="inline-block bg-white/[0.06] text-cf-red font-semibold text-[9px] sm:text-xs tracking-[0.15em] sm:tracking-[0.25em] uppercase px-3 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-cf-red/20 backdrop-blur-sm">
              Limited to 10 Onboarding Spots Per Month
            </span>
          </div>

          <h1 className="animate-fade-up-delay text-[2rem] leading-[1.1] sm:text-5xl md:text-7xl font-extrabold tracking-tight sm:leading-[1.05] mb-4 sm:mb-5">
            The Only Gym in Malta That
            <br />
            <span className="gradient-text">Doesn&apos;t Let You Start Alone</span>
          </h1>

          <p className="animate-fade-up-delay-2 text-sm sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-light">
            A structured 28-day coaching system designed to build confidence,
            technique, and real results before you ever join classes.
          </p>

          {/* Social proof */}
          <div className="animate-fade-up-delay-2 flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/50 text-xs sm:text-sm">600+ 5-Star Reviews</span>
          </div>

          {/* CTA */}
          <div className="animate-fade-up-delay-3">
            <a
              href="#book"
              className="group relative inline-block pulse-glow bg-gradient-to-r from-cf-red to-[#e83030] text-white font-bold px-8 sm:px-14 py-3.5 sm:py-5 rounded-xl transition-all duration-300 text-sm sm:text-lg tracking-wider uppercase active:scale-95 hover:scale-105 overflow-hidden w-full sm:w-auto max-w-sm sm:max-w-none mx-auto"
            >
              <span className="relative z-10">Book Your Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
            <p className="text-white/25 text-[10px] sm:text-xs mt-3 tracking-wide">
              30 minutes. No pressure. Just a plan.
            </p>
          </div>

          {/* Micro trust */}
          <div className="animate-fade-up-delay-3 mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/40 text-[11px] sm:text-sm">
            {["No experience needed", "Beginner to advanced", "Personal approach from day one"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. THE PAIN */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-[#060606] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cf-red/[0.03] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-6 sm:mb-8 leading-tight">
              Most People Don&apos;t Fail the Gym...
              <br />
              <span className="text-white/40">They Just Never Get Properly Started</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-white/50 text-base sm:text-lg mb-6 sm:mb-8 font-light">You walk in...</p>

            <div className="space-y-3 sm:space-y-4 max-w-md mx-auto text-left mb-8 sm:mb-10">
              {[
                "You don't know what you're doing",
                "You feel behind everyone",
                "You lose confidence",
              ].map((pain) => (
                <div key={pain} className="flex items-center gap-3 text-white/60 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 bg-cf-red rounded-full flex-shrink-0" />
                  <span>{pain}</span>
                </div>
              ))}
            </div>

            <p className="text-white/50 text-base sm:text-lg font-light mb-10 sm:mb-12">
              So you stop.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative">
              <div className="w-16 h-[1px] bg-cf-red/30 mx-auto mb-8 sm:mb-10" />
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text">
                That&apos;s exactly what we fix.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. THE BIG IDEA - 28 Day Strong Start */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-black relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cf-red/[0.04] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <p className="text-cf-red text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3 sm:mb-4">Your Unique Starting Point</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-6 sm:mb-8">
              The 28-Day Strong Start
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-1 text-white/50 text-base sm:text-lg font-light mb-8 sm:mb-10">
              <p>This is not a trial.</p>
              <p>This is not random classes.</p>
            </div>

            <p className="text-white/80 text-base sm:text-xl font-medium mb-2 max-w-xl mx-auto">
              This is a guided onboarding system that takes you from:
            </p>

            <div className="my-6 sm:my-8 space-y-3 sm:space-y-4">
              <p className="text-white/40 text-sm sm:text-base italic">&ldquo;I have no idea what I&apos;m doing&rdquo;</p>
              <p className="text-white/20 text-xs">to</p>
              <p className="text-white font-bold text-base sm:text-lg">&ldquo;I actually feel confident here&rdquo;</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto mt-8 sm:mt-10 text-left">
              {[
                "You start with a coach",
                "You learn before you perform",
                "You build confidence first",
                "You progress step by step",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-3 sm:py-3.5">
                  <svg className="w-4 h-4 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-white/70 text-xs sm:text-sm">{point}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <a
              href="#book"
              className="group relative inline-block mt-10 sm:mt-12 bg-gradient-to-r from-cf-red to-[#e83030] text-white font-bold px-10 sm:px-12 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-sm sm:text-base tracking-wider uppercase active:scale-95 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-[#060606] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-cf-red text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">Simple Process</p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight">
                Here&apos;s How You Start
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                step: "1", delay: 0,
                title: "Book Your Free Consultation",
                desc: "We understand your goals, your past struggles, and your starting point.",
              },
              {
                step: "2", delay: 100,
                title: "Get Your Personal Plan",
                desc: "We show you exactly how you'll build strength, confidence, and results.",
              },
              {
                step: "3", delay: 200,
                title: "Start Your 28-Day Coaching System",
                desc: "You're guided step-by-step until you feel ready, confident, and fully integrated.",
              },
            ].map((card) => (
              <ScrollReveal key={card.step} delay={card.delay}>
                <div className="group relative bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/[0.04] rounded-2xl p-6 sm:p-8 hover:border-cf-red/20 transition-all duration-500 text-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-cf-red to-cf-red-dark text-white rounded-full flex items-center justify-center mb-5 mx-auto text-lg font-bold group-hover:shadow-lg group-hover:shadow-cf-red/20 transition-all duration-500">
                    {card.step}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 tracking-tight">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-xs sm:text-sm">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10 sm:mt-12">
              <a
                href="#book"
                className="group relative inline-block bg-gradient-to-r from-cf-red to-[#e83030] text-white font-bold px-10 sm:px-12 py-3.5 sm:py-4 rounded-xl transition-all duration-300 text-sm sm:text-base tracking-wider uppercase active:scale-95 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Book Your Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. FOR WHO */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cf-red/[0.03] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <p className="text-cf-red text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">Is This For You?</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-8 sm:mb-10">
              This Is For You If...
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-3 sm:space-y-4 max-w-lg mx-auto text-left mb-10 sm:mb-12">
              {[
                "You've tried gyms before and stopped",
                "You feel lost in group classes",
                "You want real coaching, not guessing",
                "You want to feel confident training",
                "You want to get the results you never got",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 sm:gap-4">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-sm sm:text-base">{point}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-white/[0.06] pt-8 sm:pt-10">
              <p className="text-white/40 text-base sm:text-lg font-light mb-2">You don&apos;t need to be fit to start.</p>
              <p className="text-white font-bold text-lg sm:text-2xl">You just need to start the right way.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. SOCIAL PROOF */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-[#060606] relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-cf-red text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">Testimonials</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Real People. Real Confidence. Real Change.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { quote: "I finally understood what I was doing... and I didn't quit this time.", delay: 0 },
              { quote: "The coaching makes all the difference. You're never lost.", delay: 100 },
              { quote: "I came in with zero confidence. Now I feel like I belong.", delay: 200 },
            ].map((t) => (
              <ScrollReveal key={t.quote} delay={t.delay}>
                <div className="bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/[0.04] rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/60 text-sm sm:text-base italic leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DIFFERENTIATION */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cf-red/[0.04] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
              Why This Works
              <br />
              <span className="text-white/40">(When Everything Else Didn&apos;t)</span>
            </h2>

            <p className="text-white/50 text-base sm:text-lg font-light mb-8 sm:mb-10 max-w-xl mx-auto">
              Because you&apos;re not thrown into the deep end. You&apos;re coached,
              guided, and supported from day one.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto text-left">
              {[
                "You build confidence before intensity",
                "You learn before being pushed",
                "You have a coach who knows you",
                "You follow a clear path",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-3 sm:py-3.5">
                  <svg className="w-4 h-4 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/70 text-xs sm:text-sm">{point}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. URGENCY + FILTER */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-[#060606] relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <p className="text-cf-red text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-3">Limited Availability</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 sm:mb-6">
              We Don&apos;t Accept Everyone
            </h2>
            <p className="text-white/50 text-sm sm:text-base font-light mb-2 max-w-md mx-auto">
              This is a coached onboarding system.
            </p>
            <p className="text-white/50 text-sm sm:text-base font-light mb-6 sm:mb-8 max-w-md mx-auto">
              We limit spots to maintain quality and attention.
            </p>
            <p className="text-white font-bold text-base sm:text-lg mb-8 sm:mb-10">
              If you&apos;re serious about changing, apply.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <a
              href="#book"
              className="group relative inline-block pulse-glow bg-gradient-to-r from-cf-red to-[#e83030] text-white font-bold px-10 sm:px-12 py-4 sm:py-5 rounded-xl transition-all duration-300 text-sm sm:text-base tracking-wider uppercase active:scale-95 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Apply for Your Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. FINAL CLOSE + FORM */}
      <section id="book" className="py-16 sm:py-24 px-4 sm:px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cf-red/[0.06] rounded-full blur-[180px] pointer-events-none glow-orb" />

        <div className="max-w-lg mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3 sm:mb-4">
                This Isn&apos;t a Gym Trial.
                <br />
                <span className="gradient-text">It&apos;s Your Starting Point.</span>
              </h2>
              <div className="text-white/50 text-sm sm:text-base font-light space-y-1 mb-6 sm:mb-8">
                <p>In 28 days, you&apos;ll either:</p>
                <p className="text-white font-medium">Feel confident, strong, and in control</p>
                <p className="text-white/30">Or...</p>
                <p className="text-white/40">Be exactly where you are now.</p>
              </div>

              <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-1.5 mb-6">
                <span className="w-5 h-5 bg-cf-red rounded-full flex items-center justify-center text-[10px] font-bold text-white">1</span>
                <span className="text-white/40 text-[10px] sm:text-xs tracking-wider uppercase">Step 1 of 2</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative">
              <div className="absolute -inset-[1px] bg-gradient-to-b from-cf-red/10 via-transparent to-cf-red/5 rounded-2xl" />
              <div className="relative bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-6 sm:p-8 shadow-2xl">
                <LeadForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 sm:py-5 px-4 sm:px-6 bg-black border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-700 text-[9px] sm:text-xs tracking-wide">
            &copy; {new Date().getFullYear()} CrossFit F15. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-700 text-[9px] sm:text-xs tracking-wide">
            <span>58 Triq l-Universita, Msida, Malta</span>
            <a href="tel:+35699400838" className="hover:text-white transition-colors">+356 9940 0838</a>
          </div>
        </div>
      </footer>

      <script src="https://link.msgsndr.com/js/form_embed.js" async />
    </div>
  );
}
