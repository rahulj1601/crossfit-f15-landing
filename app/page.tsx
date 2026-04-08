import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">

      {/* HEADER */}
      <header className="bg-black sticky top-0 z-50 border-b border-white/[0.06]">
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
            className="bg-white text-black text-xs font-semibold px-5 py-2 rounded-full hover:bg-white/90 transition-colors"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-5">
            Your Free No Sweat Intro
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Book a free, no-pressure consultation with one of our coaches. We will sit down with you, understand your goals, and show you exactly how CrossFit F15 can help you get there.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="pb-10 sm:pb-14 px-5 sm:px-6 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#111] border border-white/[0.06]">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID_HERE"
              title="CrossFit F15 - No Sweat Intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-10 sm:py-14 px-5 sm:px-6 bg-[#060606]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-center mb-6 sm:mb-8">
            What to Expect
          </h2>

          <div className="space-y-4 max-w-xl mx-auto">
            {[
              { step: "1", title: "We chat about your goals", desc: "Tell us where you are now and where you want to be. No fitness experience required." },
              { step: "2", title: "We show you around", desc: "See the gym, meet the coaches, and get a feel for the community." },
              { step: "3", title: "We build your plan", desc: "You will leave with a clear, personalised plan to get started with confidence." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-9 h-9 bg-cf-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/50 text-sm">
            {["100% Free", "No Commitment", "30 Minutes"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDAR BOOKING */}
      <section id="book" className="py-10 sm:py-14 px-4 sm:px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-2 sm:mb-3">
              Pick a Time That Works for You
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Choose a slot below and we will confirm your booking right away.
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
          <a href="https://crossfitf15.com/">
            <Image
              src="https://crossfitf15.com/wp-content/uploads/2024/06/a96482e43b89d93241c81979f0e4551c.png"
              alt="Crossfit F15 Logo"
              width={120}
              height={35}
              className="h-5 w-auto opacity-50"
            />
          </a>
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} CrossFit F15. All rights reserved.
          </p>
        </div>
      </footer>

      <script src="https://link.msgsndr.com/js/form_embed.js" async />
    </div>
  );
}
