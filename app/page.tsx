import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">

      {/* HEADER */}
      <header className="bg-black sticky top-0 z-50 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-center">
          <a href="https://crossfitf15.com/">
            <Image
              src="https://crossfitf15.com/wp-content/uploads/2024/06/a96482e43b89d93241c81979f0e4551c.png"
              alt="Crossfit F15 Logo"
              width={180}
              height={50}
              className="h-6 sm:h-7 w-auto"
            />
          </a>
        </div>
      </header>

      <main className="flex-1 py-10 sm:py-16 px-5 sm:px-6">
        <div className="max-w-3xl mx-auto">

          {/* VIDEO PLACEHOLDER */}
          <div className="mb-10 sm:mb-14">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#111] border border-white/10 flex items-center justify-center">
              {/* Replace this div with your video embed */}
              <div className="text-center p-8">
                <svg className="w-16 h-16 text-white/20 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="text-white/30 text-sm">Video embed goes here</p>
              </div>
            </div>
          </div>

          {/* MAIN TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center leading-tight mb-6 sm:mb-8 text-white">
            Your Free No Sweat Intro
          </h1>

          {/* EXPLANATION TEXT */}
          <div className="max-w-2xl mx-auto mb-12 sm:mb-16 space-y-5">
            <p className="text-[#c0c0c0] text-base sm:text-lg leading-relaxed text-center">
              A No Sweat Intro is a free, no-pressure consultation with one of our coaches. It is designed to understand where you are right now, what your goals are, and how we can help you get there.
            </p>
            <p className="text-[#c0c0c0] text-base sm:text-lg leading-relaxed text-center">
              During this 30-minute session, you will sit down with a coach who will listen to your story, answer your questions, and walk you through exactly how CrossFit F15 works. No workout required, no commitment, just a conversation.
            </p>
            <p className="text-[#c0c0c0] text-base sm:text-lg leading-relaxed text-center">
              Whether you have never set foot in a gym or you have been training for years, this intro is your starting point. Pick a time below that works for you and we will take it from there.
            </p>
          </div>

          {/* CALENDAR PLACEHOLDER */}
          <div id="book">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-6 sm:mb-8 text-white">
              Book Your Free Intro
            </h2>

            <div className="rounded-2xl overflow-hidden bg-[#111] border border-white/10 p-1 sm:p-4">
              {/* Replace this div with your GHL calendar embed */}
              <div className="flex items-center justify-center py-20 sm:py-28">
                <div className="text-center">
                  <svg className="w-12 h-12 text-white/20 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-white/30 text-sm">GHL calendar embed goes here</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-6 px-4 sm:px-6 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} CrossFit F15. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
