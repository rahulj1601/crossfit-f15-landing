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
          <div className="relative h-7 sm:h-8 w-24 sm:w-28 overflow-hidden my-2.5 sm:my-3">
            <Image
              src="https://assets.cdn.filesafe.space/PE8avF50BBboGGbRC0bY/media/69cbcbb15472d488619ed18e.jpg"
              alt="CrossFit F15"
              width={300}
              height={300}
              className="absolute inset-0 w-full h-[200%] object-cover object-center -top-[50%]"
            />
          </div>
          <a
            href="#book"
            className="group relative bg-cf-red hover:bg-cf-red-dark text-white font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-md transition-all duration-300 text-[10px] sm:text-xs tracking-wider uppercase active:scale-95 hover:scale-105 hover:shadow-lg hover:shadow-cf-red/25 overflow-hidden"
          >
            <span className="relative z-10">Book Free Intro</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://assets.cdn.filesafe.space/PE8avF50BBboGGbRC0bY/media/69cbcaa408fd234632ffd1ee.jpg"
            alt="CrossFit F15 gym"
            fill
            className="object-cover hero-bg-zoom"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-cf-red/[0.07] rounded-full blur-[100px] glow-orb pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center pt-16 sm:pt-24 pb-8">
          <div className="animate-fade-up">
            <span className="inline-block bg-white/[0.06] text-cf-red font-semibold text-[9px] sm:text-xs tracking-[0.15em] sm:tracking-[0.25em] uppercase px-3 sm:px-5 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 border border-cf-red/20 backdrop-blur-sm">
              Free 30-Min Intro - Limited Spots
            </span>
          </div>

          <h1 className="animate-fade-up-delay text-[2.25rem] leading-[1.1] sm:text-5xl md:text-7xl font-extrabold tracking-tight sm:leading-[1.05] mb-3 sm:mb-5">
            Get Fitter, Stronger
            <br />
            <span className="gradient-text">Start Today</span>
          </h1>

          <p className="animate-fade-up-delay-2 text-sm sm:text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed font-light">
            Book your free First Step Intro at CrossFit F15. No commitment, no
            pressure, just a chat about your goals.
          </p>

          {/* CTA */}
          <div className="animate-fade-up-delay-3">
            <a
              href="#book"
              className="group relative inline-block pulse-glow bg-gradient-to-r from-cf-red to-[#e83030] text-white font-bold px-8 sm:px-14 py-3.5 sm:py-5 rounded-xl transition-all duration-300 text-sm sm:text-lg tracking-wider uppercase active:scale-95 hover:scale-105 overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
            >
              <span className="relative z-10">Book Your Free Intro</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
            <p className="text-white/25 text-[10px] sm:text-xs mt-3 tracking-wide">
              Takes 30 seconds. Pick a time that suits you.
            </p>
          </div>

          {/* Social proof */}
          <div className="animate-fade-up-delay-3 mt-8 sm:mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-10 text-white/40 text-[11px] sm:text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>5.0 (600+ reviews)</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-10">
              <span>Msida, Malta</span>
              <span className="hidden sm:inline text-white/10">|</span>
              <span>Est. 2018</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video + How It Works - Split */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 bg-[#060606] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cf-red/[0.03] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Video */}
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-cf-red/15 via-cf-red/5 to-cf-red/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/50 bg-black">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/1ip8K4gais0?autoplay=0&rel=0&controls=1"
                      width="100%"
                      height="100%"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      title="CrossFit F15 Introduction"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Steps */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-tight mb-5 sm:mb-8">
                  Here&apos;s How It Works
                </h2>

                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      step: "1",
                      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                      title: "Pick a Time",
                      desc: "Choose a slot from the calendar below.",
                    },
                    {
                      step: "2",
                      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                      title: "We Chat",
                      desc: "30-min conversation about your goals and fitness level.",
                    },
                    {
                      step: "3",
                      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                      title: "Get Your Plan",
                      desc: "Walk away with a personalised plan, whether you join or not.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3 sm:gap-4 group">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-cf-red/20 to-cf-red/5 text-cf-red rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-cf-red group-hover:to-cf-red-dark group-hover:text-white transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cf-red/20">
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-cf-red text-[9px] sm:text-[10px] font-bold tracking-widest uppercase">Step {item.step}</span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold tracking-tight">{item.title}</h3>
                        <p className="text-gray-500 text-[11px] sm:text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#book"
                  className="group relative inline-block mt-6 sm:mt-8 bg-gradient-to-r from-cf-red to-[#e83030] text-white font-bold px-8 sm:px-10 py-3 sm:py-3.5 rounded-xl transition-all duration-300 text-xs sm:text-sm tracking-wider uppercase active:scale-95 hover:scale-105 overflow-hidden w-full sm:w-auto text-center"
                >
                  <span className="relative z-10">Book Your Free Intro</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE FORM */}
      <section id="book" className="pt-10 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 bg-[#040404] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cf-red/[0.06] rounded-full blur-[180px] pointer-events-none glow-orb" />

        <div className="max-w-lg mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-1.5 mb-4 sm:mb-5">
                <span className="w-5 h-5 bg-cf-red rounded-full flex items-center justify-center text-[10px] font-bold">1</span>
                <span className="text-white/40 text-[10px] sm:text-xs tracking-wider uppercase">Step 1 of 2</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Get Your <span className="gradient-text">Free Intro</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm max-w-sm mx-auto font-light mt-2 sm:mt-3">
                Enter your details below and we&apos;ll take you to pick a time.
              </p>
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

          {/* Trust signals */}
          <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-8 text-white/30 text-[10px] sm:text-xs tracking-wide">
            {[
              "100% Free",
              "No Commitment",
              "30 Minutes",
              "Personalised Plan",
            ].map((text) => (
              <div key={text} className="flex items-center gap-1.5 justify-center">
                <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location strip */}
      <section className="py-6 sm:py-10 px-4 sm:px-6 bg-[#060606] border-t border-white/[0.03]">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 text-gray-500 text-[11px] sm:text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>58 Triq l-Universita, Msida, Malta</span>
            </div>
            <div className="flex items-center gap-6 sm:gap-12">
              <a href="tel:+35699400838" className="flex items-center gap-1.5 sm:gap-2 hover:text-white transition-colors active:text-cf-red">
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+356 9940 0838</span>
              </a>
              <a href="mailto:contact@crossfitf15.com" className="flex items-center gap-1.5 sm:gap-2 hover:text-white transition-colors active:text-cf-red">
                <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@crossfitf15.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 sm:py-5 px-4 sm:px-6 bg-black border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-700 text-[9px] sm:text-xs tracking-wide">
            &copy; {new Date().getFullYear()} CrossFit F15. All rights reserved.
          </p>
        </div>
      </footer>

      {/* GHL Form Embed Script */}
      <script src="https://link.msgsndr.com/js/form_embed.js" async />
    </div>
  );
}
