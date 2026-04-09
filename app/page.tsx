import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">

      {/* HEADER */}
      <header className="bg-black/90 backdrop-blur-xl sticky top-0 z-50 border-b border-white/[0.06]">
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
            className="bg-cf-red text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-cf-red-dark transition-colors uppercase tracking-wider"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://crossfitf15.com/wp-content/uploads/2024/07/High-Five-Time-683x1024.webp"
            alt="CrossFit F15 community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center py-16 sm:py-20">
          <div className="flex items-center justify-center gap-1.5 mb-5">
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/80 text-sm ml-1">600+ athletes transformed in Malta</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
            The Only Gym in Malta That{" "}
            <span className="text-cf-red">Doesn&apos;t Let You Start Alone</span>
          </h1>

          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Stop guessing. Stop failing. Join a system engineered for results.
          </p>

          <a
            href="#book"
            className="inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-10 sm:px-14 py-4 sm:py-5 rounded-full transition-all duration-300 text-sm sm:text-base tracking-wider uppercase hover:scale-105 active:scale-95"
          >
            Book Your Free Consultation
          </a>
          <p className="text-white/50 text-sm mt-3">30 minutes. No pressure. Just a plan.</p>
        </div>
      </section>

      {/* PAIN POINT */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-[#060606]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-5 leading-tight">
            Most People Don&apos;t Fail the Gym...{" "}
            <span className="text-white/50">The Gym Fails Them.</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
            Generic programs, crowded floors, and zero accountability are why 80% of people quit within 3 months. You aren&apos;t lazy - you&apos;re just unsupported.
          </p>
          <p className="text-cf-red font-extrabold text-xl sm:text-2xl">
            That&apos;s exactly what we fix.
          </p>
        </div>
      </section>

      {/* THE PROGRAM */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-6 leading-tight">
                The 28-Day{" "}
                <span className="text-cf-red">Strong Start</span>
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  "Elite personalised programming",
                  "Dedicated success coach",
                  "Metabolic assessment & nutrition plan",
                  "24/7 digital accountability group",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80 text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#book"
                className="inline-block bg-white text-black font-bold px-8 py-3.5 rounded-full text-sm tracking-wider uppercase hover:bg-white/90 transition-colors"
              >
                Secure Your Spot Now
              </a>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[450px]">
              <Image
                src="https://crossfitf15.com/wp-content/uploads/2024/07/explanation-demo.webp"
                alt="Coach explaining technique"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-[#060606]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", img: "https://crossfitf15.com/wp-content/uploads/2024/07/warm-up-scaled.webp", title: "The Strategy Call", desc: "15 minutes to define your goals, movement history, and roadblocks. No fluff." },
              { step: "02", img: "https://crossfitf15.com/wp-content/uploads/2024/07/skill-scaled.webp", title: "Precision Onboarding", desc: "Master the fundamentals in 1-on-1 assessments. No crowds, just technique." },
              { step: "03", img: "https://crossfitf15.com/wp-content/uploads/2024/07/workout-683x1024.webp", title: "Launch Phase", desc: "Integrate into the F15 community with a customised 28-day roadmap." },
            ].map((card) => (
              <div key={card.step} className="bg-[#111] border border-white/[0.06] rounded-2xl overflow-hidden">
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <Image src={card.img} alt={card.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-cf-red font-bold text-sm mb-2">{card.step}</p>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-2 tracking-tight">{card.title}</h3>
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THIS IS FOR YOU IF */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                This Is <span className="text-cf-red italic">For You</span> If...
              </h2>
            </div>

            <div className="space-y-5">
              {[
                { bold: "You are tired of wasting time", rest: " on generic gym memberships." },
                { bold: "You demand expert coaching", rest: " and structured growth." },
                { bold: "You want a community", rest: " that pushes your limits daily." },
                { bold: "You value precision", rest: " over participation trophies." },
              ].map((item) => (
                <div key={item.bold} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-cf-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-white/80 text-base sm:text-lg">
                    <span className="text-white font-bold">{item.bold}</span>
                    {item.rest}
                  </p>
                </div>
              ))}

              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-white/50 text-sm italic">
                  If you&apos;re looking for a &ldquo;chill&rdquo; workout, you&apos;re in the wrong place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-[#060606]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-8 sm:mb-10">
            Elite Feedback
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "The only gym in Malta that actually tracks your progress. I've gained 6kg of muscle in 6 months using the Strong Start system.", name: "Marco V." },
              { quote: "No ego. Just work. The coaches at F15 are on another level compared to the commercial gyms in Sliema.", name: "Sarah G." },
              { quote: "I was intimidated by CrossFit until I did the No Sweat Intro. Best decision I've ever made.", name: "David P." },
            ].map((t) => (
              <div key={t.name} className="bg-[#111] border border-white/[0.06] rounded-2xl p-6 sm:p-8">
                <p className="text-cf-red text-3xl font-bold mb-4">&ldquo;</p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-white font-bold text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY */}
      <section className="py-14 sm:py-20 px-5 sm:px-6 bg-cf-red">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight text-white">
            We Don&apos;t Accept Everyone
          </h2>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
            F15 is a boutique facility. To maintain coaching quality, we limit new intakes to 8 athletes per month. Once spots are gone, the waitlist opens.
          </p>
          <a
            href="#book"
            className="inline-block bg-white text-black font-bold px-10 sm:px-12 py-4 rounded-full text-sm tracking-wider uppercase hover:bg-white/90 transition-colors"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>

      {/* FINAL CTA + CALENDAR */}
      <section id="book" className="py-14 sm:py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight">
              This Isn&apos;t a <span className="text-cf-red">Gym Trial...</span>
            </h2>
            <p className="text-white/70 text-lg sm:text-xl">
              It&apos;s the first day of your new standard.
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
                title="Book Your No Sweat Intro"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-4 sm:px-6 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-white/40 text-xs">
            {["Privacy", "Terms", "Safety", "Affiliates"].map((link) => (
              <a key={link} href="#" className="hover:text-white/60 transition-colors">{link}</a>
            ))}
          </div>
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} CrossFit F15. All rights reserved.
          </p>
        </div>
      </footer>

      <script src="https://link.msgsndr.com/js/form_embed.js" async />
    </div>
  );
}
