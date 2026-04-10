import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";
import { LeadForm } from "../lead-form";
import { SiteHeader } from "../site-header";
import { SiteFooter } from "../site-footer";

export default function PTPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <SiteHeader />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_5410.JPG"
            alt="Personal training at F15 Training Centr"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center py-16 sm:py-20">
          <div className="animate-fade-up">
            <span className="inline-block bg-cf-red/20 text-white font-bold text-xs sm:text-sm tracking-[0.15em] uppercase px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-5 sm:mb-6 border border-cf-red/30 backdrop-blur-sm">
              1-on-1 Personal Training
            </span>
          </div>

          <h1 className="animate-fade-up-delay text-[2rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 text-white uppercase">
            Your Coach.{" "}
            <span className="text-cf-red">Your Plan.</span>{" "}
            Your Progress.
          </h1>

          <p className="animate-fade-up-delay-2 text-white/85 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Dedicated 1-on-1 coaching, tailored to your body, your goals, and your schedule. Every rep brings you closer.
          </p>

          <div className="animate-fade-up-delay-3">
            <a href="#consult" className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-10 sm:px-14 py-4 sm:py-5 rounded-full transition-all duration-300 text-sm sm:text-lg tracking-wider uppercase hover:scale-105 active:scale-95">
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHY PT ===== */}
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-cf-red text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3">Why Personal Training</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-5 text-white leading-tight">
                  Built Around{" "}
                  <span className="text-cf-red">You</span>
                </h2>
                <p className="text-[#c0c0c0] text-base sm:text-lg leading-relaxed mb-4">
                  Classes are powerful. But sometimes you need something built just for you. Personal training at F15 Training Centr is for anyone who wants a plan that fits their body, their schedule, and their goals.
                </p>
                <p className="text-[#c0c0c0] text-base sm:text-lg leading-relaxed mb-6">
                  Whether you are coming back from an injury, preparing for a competition, or want to fast-track results, your coach will guide every session.
                </p>
                <a href="#consult" className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wider uppercase hover:scale-105 active:scale-95">
                  Get Started
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/images/final-64.JPG" alt="1-on-1 coaching at F15" width={600} height={800} className="w-full h-auto rounded-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== WHO IT IS FOR (RED) ===== */}
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-cf-red">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-8 sm:mb-10 text-white uppercase">
              Who Personal Training Is For
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Returning from injury", desc: "Rebuild strength safely with programming that works around your body and respects your recovery." },
              { title: "Chasing a specific goal", desc: "Race prep, a competition, a lifetime PR - we build a plan that gets you there rep by rep." },
              { title: "New to training", desc: "Learn the fundamentals in a calm, private setting so you feel confident walking into any class." },
              { title: "Short on time", desc: "Sessions tailored to the time you have, designed to get the most out of every minute you train." },
              { title: "Prefer 1-on-1", desc: "If group classes are not your thing, we have a coach ready to train with you alone." },
              { title: "Complement your classes", desc: "Add PT alongside your regular classes to fix weaknesses and push your limits further." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 h-full">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-white/85 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-8 sm:mt-10">
              <a href="#consult" className="inline-block bg-white text-cf-red font-bold px-10 sm:px-12 py-3.5 sm:py-4 rounded-full text-sm tracking-wider uppercase hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95">
                Book Your Free Consultation
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                How It Works
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Free consultation", desc: "Sit down with a coach, share your goals and history. No pressure, no commitment." },
              { step: "02", title: "Your plan", desc: "We build a program around your body, schedule, and goals. You will know exactly what every session is for." },
              { step: "03", title: "Train and progress", desc: "Work 1-on-1 with your coach. Every session you get feedback, support, and one rep closer." },
            ].map((item) => (
              <ScrollReveal key={item.step}>
                <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-6 sm:p-8 h-full">
                  <p className="text-cf-red font-bold text-sm mb-2">{item.step}</p>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-[#b0b0b0] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MEET THE COACHES ===== */}
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-cf-red text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3">Your Coaches</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Meet the Team You&apos;ll{" "}
                <span className="text-cf-red">Train With</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-12 sm:space-y-16">
            {/* GERI */}
            <ScrollReveal direction="left">
              <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[600px]">
                  <Image
                    src="/images/coach-geri.jpg"
                    alt="Coach Geri"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-cf-red text-xs font-bold tracking-[0.3em] uppercase mb-2">Coach</p>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">Geri</h3>
                  <div className="space-y-4 text-[#c0c0c0] text-sm sm:text-base leading-relaxed mb-5">
                    <p>
                      Geri has spent his life mastering movement. With over a decade of Capoeira, MMA background, and Brazilian Jiu-Jitsu, he brings a deep understanding of how the body moves, performs, and adapts.
                    </p>
                    <p>
                      A few years ago, he found his passion in coaching and helping people transform. Since then, his focus has been clear: helping people improve their fitness, build confidence, and create lasting lifestyle changes through structured, intelligent training.
                    </p>
                    <p>
                      Geri combines high-level knowledge with genuine care for every person he works with. He takes the time to understand your starting point, your goals, and what you need to progress, then guides you with purpose every step of the way.
                    </p>
                    <p>
                      At the same time, training with him is anything but boring. His energy is contagious, his sessions are engaging, and he knows how to push you while keeping the experience enjoyable.
                    </p>
                    <p className="text-white font-semibold italic">
                      Serious coaching. Real results. And an environment that makes you want to keep showing up.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 w-fit">
                    <svg className="w-4 h-4 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <span className="text-white text-xs font-medium">English, Hungarian</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* LAZAR */}
            <ScrollReveal direction="right">
              <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-cf-red text-xs font-bold tracking-[0.3em] uppercase mb-2">Coach</p>
                  <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">Lazar</h3>
                  <div className="space-y-4 text-[#c0c0c0] text-sm sm:text-base leading-relaxed mb-5">
                    <p>
                      Lazar is one of the most experienced and knowledgeable coaches you&apos;ll find. Starting his journey at F15, he quickly stood out for his ability to master movements and understand training at a deep level.
                    </p>
                    <p>
                      He went on to coach internationally in Greece, expanding his experience and developing programming for athletes of all levels from beginners to advanced. Today, even entire gyms trust his programming, a reflection of the results and consistency he delivers.
                    </p>
                    <p>
                      Lazar combines sharp technical expertise with a real passion for coaching. He pays attention to every detail, ensuring you move well, train safely, and keep progressing.
                    </p>
                    <p>
                      At the same time, his sessions are energetic, engaging, and built to challenge you so you not only improve, but enjoy the process.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 w-fit">
                    <svg className="w-4 h-4 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <span className="text-white text-xs font-medium">Maltese, English, Serbian, Greek</span>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[600px]">
                  <Image
                    src="/images/coach-lazar.jpg"
                    alt="Coach Lazar"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center mt-10 sm:mt-14">
              <a href="#consult" className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-10 sm:px-12 py-3.5 sm:py-4 rounded-full transition-all duration-300 text-sm tracking-wider uppercase hover:scale-105 active:scale-95">
                Book Your Free Consultation
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== LEAD FORM ===== */}
      <section id="consult" className="py-10 sm:py-20 px-4 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight text-white uppercase">
                Book Your{" "}
                <span className="text-cf-red">Free Consultation</span>
              </h2>
              <p className="text-[#b0b0b0] text-base sm:text-lg">
                Tell us about your goals and we will match you with the right coach.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative">
              <div className="absolute -inset-[1px] bg-gradient-to-b from-cf-red/10 via-transparent to-cf-red/5 rounded-2xl" />
              <div className="relative bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-2xl">
                <LeadForm source="pt" submitText="Book Your Free Consultation" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
