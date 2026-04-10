import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";
import { LeadForm } from "../lead-form";

export default function HowToStart() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">

      {/* HEADER - matches crossfitf15.com */}
      <header className="bg-black sticky top-0 z-50 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
          <a href="https://crossfitf15.com/">
            <Image
              src="/images/f15-logo.png"
              alt="F15 Training Centr Logo"
              width={180}
              height={50}
              className="h-6 sm:h-7 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {[
              { label: "Home", href: "https://crossfitf15.com/" },
              { label: "New to F15?", href: "https://crossfitf15.com/new-to-f15" },
              { label: "Book a class", href: "https://crossfitf15.com/schedule" },
              { label: "Hyrox", href: "https://crossfitf15.com/hyrox-classes-malta" },
              { label: "F15 Experience", href: "https://crossfitf15.com/f15-experience" },
              { label: "Contact", href: "https://crossfitf15.com/contact" },
            ].map((link) => (
              <a key={link.label} href={link.href} className="text-white/60 text-xs font-medium hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="https://momence.com/sign-in?hostId=36119" className="text-white/60 text-xs font-medium hover:text-white transition-colors">
              my account
            </a>
            <a href="https://momence.com/sign-up/member?hostId=36119" className="bg-white text-black text-xs font-semibold px-5 py-2 rounded-full hover:bg-white/90 transition-colors">
              join us
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-white/60 p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Community photo */}
          <Image
            src="/images/IMG_6936-2.jpg"
            alt="F15 Training Centr community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center py-16 sm:py-20">
          <ScrollReveal>
            <span className="inline-block bg-cf-red/20 text-white font-bold text-xs sm:text-sm tracking-[0.15em] uppercase px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-5 sm:mb-6 border border-cf-red/30 backdrop-blur-sm">
              Limited to 10 Onboarding Spots Per Month
            </span>
          </ScrollReveal>

          <ScrollReveal>
            <h1 className="text-[2rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 text-white">
              The Only Gym in Malta That{" "}
              <span className="text-cf-red">Doesn&apos;t Let You Start Alone</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-white/85 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              A coaching system designed to build your confidence, your technique, and real results - so every rep brings you closer to your goals.
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
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-[#111111]">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-5 leading-tight text-white">
              Most People Don&apos;t Fail at the Gym...{" "}
              <span className="text-[#999]">They Just Never Get Properly Started</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-3 max-w-md mx-auto text-left mb-8">
              {["You walk in not knowing where to start", "You feel behind the people around you", "You lose confidence and walk back out"].map((pain) => (
                <div key={pain} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-cf-red rounded-full flex-shrink-0" />
                  <span className="text-[#c0c0c0] text-base sm:text-lg">{pain}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <a href="#book" className="inline-block bg-cf-red hover:bg-cf-red-dark text-white font-extrabold text-lg sm:text-xl px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
              That&apos;s exactly what we fix.
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== OUR PROVEN STRONG START PROGRAM ===== */}
      <section className="relative py-10 sm:py-20 px-5 sm:px-6 overflow-hidden bg-black">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cf-red/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cf-red/30 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <p className="text-cf-red text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3">Your Unique Starting Point</p>
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
                  <p>This is not a sink-or-swim group class.</p>
                </div>

                <p className="text-white text-base sm:text-lg font-semibold mb-5">
                  This is a guided onboarding that takes you from:
                </p>

                <div className="space-y-2 mb-8">
                  <p className="text-[#999] text-base italic">&ldquo;I have no idea what I am doing&rdquo;</p>
                  <p className="text-[#666] text-sm">to</p>
                  <p className="text-white font-bold text-base sm:text-lg">&ldquo;I feel at home here&rdquo;</p>
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
              {/* Coaching photo */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/final-64.JPG"
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
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-cf-red">
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
              { step: "01", img: "/images/IMG_6936-2.jpg", title: "Book Your Free Consultation", desc: "We understand your goals, your past struggles, and your starting point." },
              { step: "02", img: "/images/final-64.JPG", title: "Get Your Personal Plan", desc: "We show you exactly how you'll build strength, confidence, and results." },
              { step: "03", img: "/images/IMG_5410.JPG", title: "Start Your Fully Guided Journey", desc: "You're guided step-by-step until you feel ready, confident, and fully integrated." },
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
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-[#111111]">
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
                  { bold: "You have tried gyms before", rest: " and stopped." },
                  { bold: "You feel lost", rest: " in big group classes." },
                  { bold: "You want real coaching,", rest: " not guesswork." },
                  { bold: "You want to feel confident", rest: " every time you train." },
                  { bold: "You want the results", rest: " you never got before." },
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
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-[#0a0a0a]">
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
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-[#111111]">
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
                  src="/images/IMG_5410.JPG"
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
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-cf-red">
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

      {/* ===== FINAL CTA + LEAD FORM ===== */}
      <section id="book" className="py-10 sm:py-20 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-xl mx-auto">
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

          <ScrollReveal>
            <div className="relative">
              <div className="absolute -inset-[1px] bg-gradient-to-b from-cf-red/10 via-transparent to-cf-red/5 rounded-2xl" />
              <div className="relative bg-[#0e0e0e] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
                <LeadForm source="how-to-start" submitText="Book Your Free Consultation" />
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-6 flex items-center justify-center gap-2">
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

      {/* FOOTER - matches crossfitf15.com */}
      <footer className="bg-[#1a1a1a] text-white/60 pt-10 sm:pt-14 pb-6 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top row: logo + tagline + socials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
            <div>
              <Image
                src="/images/f15-logo.png"
                alt="F15 Training Centr Logo"
                width={160}
                height={45}
                className="h-6 w-auto mb-2"
              />
              <p className="text-white/40 text-sm italic">One rep closer, One community stronger</p>
            </div>
            <div className="flex items-center gap-4">
              {[
                { href: "https://www.facebook.com/crossfitf15/", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { href: "https://www.youtube.com/@crossfitf15malta90", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                { href: "https://www.instagram.com/crossfitf15/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/[0.06] rounded-full flex items-center justify-center hover:bg-cf-red/20 transition-colors">
                  <svg className="w-3.5 h-3.5 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Menu</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Home", href: "https://crossfitf15.com/" },
                  { label: "Schedule", href: "https://crossfitf15.com/schedule" },
                  { label: "Free Classes", href: "https://crossfitf15.com/schedule" },
                  { label: "New to F15?", href: "https://crossfitf15.com/new-to-f15" },
                ].map((l) => (
                  <li key={l.label}><a href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-4">F15 Experience</h4>
              <ul className="space-y-2.5">
                {["Our Story", "Our Classes", "Our Team", "The Gym", "Our Service"].map((l) => (
                  <li key={l}><a href="https://crossfitf15.com/f15-experience" className="text-white/50 text-sm hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Links</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Blog", href: "https://crossfitf15.com/blog" },
                  { label: "Terms and Conditions", href: "https://crossfitf15.com/terms-and-conditions" },
                  { label: "Contact", href: "https://crossfitf15.com/contact" },
                  { label: "Privacy Policy", href: "https://crossfitf15.com/privacy-policy" },
                ].map((l) => (
                  <li key={l.label}><a href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-sm mb-4">Open Hours</h4>
              <div className="text-white/50 text-sm space-y-1.5">
                <p>Monday to Friday</p>
                <p className="text-white/70 font-medium">7 am - 9 pm</p>
                <p className="mt-3">Saturday</p>
                <p className="text-white/70 font-medium">10 am - 2 pm</p>
                <p className="mt-3">Sunday</p>
                <p className="text-white/70 font-medium">9 am - 11 am</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/[0.06] pt-6 text-center">
            <p className="text-white/30 text-xs">F15 Training Centr &copy; {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
