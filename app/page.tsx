import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            src="https://assets.cdn.filesafe.space/PE8avF50BBboGGbRC0bY/media/69cbcbb15472d488619ed18e.jpg"
            alt="CrossFit F15"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
          />
          <a
            href="#book"
            className="bg-cf-red hover:bg-cf-red-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 text-sm tracking-wide uppercase"
          >
            Book Intro
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://assets.cdn.filesafe.space/PE8avF50BBboGGbRC0bY/media/69cbcaa408fd234632ffd1ee.jpg"
            alt="CrossFit F15 gym"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
          <div className="animate-fade-up">
            <span className="inline-block bg-cf-red/20 text-cf-red font-semibold text-sm tracking-widest uppercase px-4 py-2 rounded-full mb-8 border border-cf-red/30">
              Free 30-Minute Consultation
            </span>
          </div>

          <h1 className="animate-fade-up-delay text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Your First Step
            <br />
            <span className="text-cf-red">Starts Here</span>
          </h1>

          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            There&apos;s no &lsquo;one size fits all&rsquo; when it comes to training. Your
            goals, needs, and lifestyle are unique — and that&apos;s why your
            journey at CrossFit F15 starts with a First Step Intro.
          </p>

          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="pulse-glow bg-cf-red hover:bg-cf-red-dark text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 text-lg tracking-wide uppercase"
            >
              Book Your Intro
            </a>
            <a
              href="#video"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300 text-lg backdrop-blur-sm"
            >
              Watch Video
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 px-6 bg-cf-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What to Expect
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              In this 30-minute conversation, we&apos;ll find the right path for
              your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                ),
                title: "Talk About Your Goals",
                desc: "We\u2019ll discuss what you want to achieve, your current fitness level, and any challenges you face.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                ),
                title: "Personalised Plan",
                desc: "Together, we\u2019ll map out a plan that fits your everyday life, schedule, and fitness goals.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "See If We\u2019re The Right Fit",
                desc: "No pressure, no commitment. Just a coffee and a chat to see if CrossFit F15 is the right place for you.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group bg-cf-gray border border-white/5 rounded-2xl p-8 hover:border-cf-red/30 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-cf-red/10 text-cf-red rounded-xl flex items-center justify-center mb-6 group-hover:bg-cf-red/20 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              See What We&apos;re About
            </h2>
            <p className="text-gray-400 text-lg">
              Get a glimpse of the CrossFit F15 community and what makes us
              different.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cf-red/5">
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
      </section>

      {/* Booking Section */}
      <section id="book" className="py-24 px-6 bg-cf-dark relative">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cf-red/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Book Your <span className="text-cf-red">First Step Intro</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Choose a time that works for you — we&apos;ll have a coffee and a
              chat. We look forward to meeting you.
            </p>
          </div>

          <div className="bg-cf-gray border border-white/10 rounded-2xl p-2 md:p-4 shadow-2xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/4MLW8Kg9AL4vM8CI9L2E"
              style={{ width: "100%", height: "700px", border: "none" }}
              scrolling="no"
              id="msgsndr-calendar"
              title="Book Your First Step Intro"
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Us
              </h2>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cf-red/10 text-cf-red rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p>58 Triq l-Universita, Msida</p>
                    <p>MSD1016 Msida, Malta</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cf-red/10 text-cf-red rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a
                      href="tel:+35699400838"
                      className="hover:text-cf-red transition-colors"
                    >
                      +356 9940 0838
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cf-red/10 text-cf-red rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a
                      href="mailto:contact@crossfitf15.com"
                      className="hover:text-cf-red transition-colors"
                    >
                      contact@crossfitf15.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.4!2d14.4855!3d35.8997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e452d3081f865%3A0x3a1234567890!2sCrossFit+F15!5e0!3m2!1sen!2smt!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CrossFit F15 Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 bg-cf-red">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Take the first step today. Book your free 30-minute intro and let&apos;s
            find the right path for you.
          </p>
          <a
            href="#book"
            className="inline-block bg-white text-cf-red font-bold px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg tracking-wide uppercase"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CrossFit F15. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a
              href="tel:+35699400838"
              className="hover:text-white transition-colors"
            >
              +356 9940 0838
            </a>
            <a
              href="mailto:contact@crossfitf15.com"
              className="hover:text-white transition-colors"
            >
              contact@crossfitf15.com
            </a>
          </div>
        </div>
      </footer>

      {/* GHL Form Embed Script */}
      <script
        src="https://link.msgsndr.com/js/form_embed.js"
        async
      />
    </div>
  );
}
