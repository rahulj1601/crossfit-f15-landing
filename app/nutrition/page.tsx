import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";
import { LeadForm } from "../lead-form";
import { SiteHeader } from "../site-header";
import { SiteFooter } from "../site-footer";

export default function NutritionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      <SiteHeader />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_6936-2.jpg"
            alt="Nutrition at F15 Training Centr"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/85" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center py-16 sm:py-20">
          <div className="animate-fade-up">
            <span className="inline-block bg-cf-red/20 text-white font-bold text-xs sm:text-sm tracking-[0.15em] uppercase px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-5 sm:mb-6 border border-cf-red/30 backdrop-blur-sm">
              F15 Nutrition Challenge
            </span>
          </div>

          <h1 className="animate-fade-up-delay text-[2rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 text-white uppercase">
            Eat Better.{" "}
            <span className="text-cf-red">Train Harder.</span>{" "}
            Feel Amazing.
          </h1>

          <p className="animate-fade-up-delay-2 text-white/85 text-base sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Training is only half the story. Fuel your progress with the F15 Nutrition Challenge and see what is really possible.
          </p>

          <div className="animate-fade-up-delay-3">
            <a href="#consult" className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-10 sm:px-14 py-4 sm:py-5 rounded-full transition-all duration-300 text-sm sm:text-lg tracking-wider uppercase hover:scale-105 active:scale-95">
              Join the Challenge
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHY NUTRITION ===== */}
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-cf-red text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3">Why It Matters</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-5 text-white leading-tight">
                  You Cannot Out-Train{" "}
                  <span className="text-cf-red">a Bad Diet</span>
                </h2>
                <p className="text-[#c0c0c0] text-base sm:text-lg leading-relaxed mb-4">
                  You already work hard in the gym. But if your nutrition is not dialled in, you are leaving results on the table.
                </p>
                <p className="text-[#c0c0c0] text-base sm:text-lg leading-relaxed mb-6">
                  The F15 Nutrition Challenge is a structured, community-driven program that teaches you how to eat for energy, recovery, and real, lasting change.
                </p>
                <a href="#consult" className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wider uppercase hover:scale-105 active:scale-95">
                  Join the Challenge
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/images/final-64.JPG" alt="F15 Community" width={600} height={800} className="w-full h-auto rounded-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET (RED) ===== */}
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-cf-red">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-8 sm:mb-10 text-white uppercase">
              What You Get
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "A clear plan", desc: "No confusion, no guesswork. A structured nutrition plan you can actually follow." },
              { title: "Expert guidance", desc: "Check-ins and support from our team so you stay on track from day one to the finish line." },
              { title: "Community accountability", desc: "Take on the challenge alongside other F15 members. You are never doing this alone." },
              { title: "Real habits", desc: "Learn the habits that stick long after the challenge ends - not quick fixes or crash diets." },
              { title: "Measurable progress", desc: "Track how you look, how you train, and how you feel. See the changes happen." },
              { title: "Recipes and tools", desc: "Meal ideas, shopping lists, and simple tools to make the whole thing easy to stick with." },
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
                Join the Challenge
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHO IS IT FOR ===== */}
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-[#0a0a0a]">
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
                  { bold: "You train hard", rest: " but the results have plateaued." },
                  { bold: "You want energy", rest: " in the gym and in your day." },
                  { bold: "You are tired", rest: " of fad diets that never stick." },
                  { bold: "You want to look and feel better,", rest: " not just weigh less." },
                  { bold: "You love a challenge", rest: " and thrive with a community behind you." },
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
        </div>
      </section>

      {/* ===== LEAD FORM ===== */}
      <section id="consult" className="py-10 sm:py-20 px-4 sm:px-6 bg-[#111111]">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight text-white uppercase">
                Join the{" "}
                <span className="text-cf-red">Challenge</span>
              </h2>
              <p className="text-[#b0b0b0] text-base sm:text-lg">
                Drop your details and we will send you everything you need to get started.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative">
              <div className="absolute -inset-[1px] bg-gradient-to-b from-cf-red/10 via-transparent to-cf-red/5 rounded-2xl" />
              <div className="relative bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-2xl">
                <LeadForm source="nutrition" submitText="Join the Challenge" calendarUrl="https://book.crossfitf15.com/widget/bookings/f15-first-intro-nutrition" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
