import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";
import { LeadForm } from "../lead-form";

export default function HyroxPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">

      {/* HEADER - matches crossfitf15.com */}
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
          <Image
            src="/images/IMG_5410.JPG"
            alt="Hyrox training at CrossFit F15"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center py-16 sm:py-20">
          <ScrollReveal>
            <span className="inline-block bg-cf-red/20 text-white font-bold text-xs sm:text-sm tracking-[0.15em] uppercase px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-5 sm:mb-6 border border-cf-red/30 backdrop-blur-sm">
              Hyrox Training in Malta
            </span>
          </ScrollReveal>

          <ScrollReveal>
            <h1 className="text-[2rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5 text-white uppercase">
              Ready to Start Your{" "}
              <span className="text-cf-red">Hyrox Journey?</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-white/85 text-base sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
              Kick off with our guided coaching system.
            </p>
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Hyrox blends endurance, strength, and functional fitness into one unforgettable race. Whether you are lining up for your first event or chasing your fastest finish, our Hyrox program will get you there.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <a
              href="#consult"
              className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-10 sm:px-14 py-4 sm:py-5 rounded-full transition-all duration-300 text-sm sm:text-lg tracking-wider uppercase hover:scale-105 active:scale-95"
            >
              Book Your Consultation
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHAT IS HYROX ===== */}
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-5 text-white">
                  Built to Get You{" "}
                  <span className="text-cf-red">Race Ready</span>
                </h2>
                <p className="text-[#c0c0c0] text-base sm:text-lg leading-relaxed mb-4">
                  At CrossFit F15, we have designed a Hyrox program that focuses on every part of your journey. Each class is tailored to improve your performance and help you prepare for race day with confidence.
                </p>
                <p className="text-[#c0c0c0] text-base sm:text-lg leading-relaxed mb-6">
                  From your first run to your final sled push, you will train every station, every muscle group, and every mindset you need to race your fastest finish.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Coached by a team that knows Hyrox inside out",
                    "Structured running and conditioning work",
                    "Race strategy, pacing and mindset prep",
                    "Welcoming to beginners, challenging for athletes",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-cf-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#d0d0d0] text-base sm:text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="#consult" className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wider uppercase hover:scale-105 active:scale-95">
                  Get Started
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/Hyrox-Performance-cover.JPEG"
                  alt="Hyrox training at F15"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== OUR HYROX CLASSES (RED) ===== */}
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-cf-red">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-8 sm:mb-10 text-white">
              Our Hyrox Classes
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: "/images/Hyrox-Strength.JPEG", title: "Hyrox Strength", intensity: "Medium", time: "Mon 4:45 PM", duration: "60 min", desc: "Build power and muscular endurance through compound and functional movements." },
              { img: "/images/Hyrox-Stamina.JPEG", title: "Hyrox Stamina", intensity: "Medium to High", time: "Wed 6:30 AM + 5:50 PM, Sat 10:30 AM", duration: "60 min", desc: "High-intensity class to sustain longer periods of work, replicating race-day feel." },
              { img: "/images/Hyrox-Baseline.JPEG", title: "Hyrox Baseline", intensity: "Low to Medium", time: "Thu 4:45 PM", duration: "60 min", desc: "Boost aerobic capacity and endurance through running, rowing, skiing, and technique drills." },
              { img: "/images/Hyrox-Performance.JPEG", title: "Hyrox Performance", intensity: "Medium / High", time: "Sun 9:00 AM", duration: "90 min", desc: "Full-body workout replicating actual Hyrox event demands. Endurance, strength, and stamina." },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 80}>
                <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full hover:border-white/20 transition-all duration-300">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image src={card.img} alt={card.title} fill className="object-cover object-top" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-bold text-base sm:text-lg mb-1 tracking-tight">{card.title}</h3>
                    <p className="text-white/60 text-xs font-medium mb-2">Intensity: {card.intensity} | {card.duration}</p>
                    <p className="text-white/50 text-xs mb-3">{card.time}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-8 sm:mt-10">
              <a href="#consult" className="inline-block bg-white text-cf-red font-bold px-10 sm:px-12 py-3.5 sm:py-4 rounded-full text-sm tracking-wider uppercase hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95">
                Book Your Consultation
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SCHEDULE ===== */}
      <section className="py-10 sm:py-20 px-5 sm:px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-cf-red text-xs sm:text-sm font-bold tracking-[0.3em] uppercase mb-3">Train With Us</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-5 text-white leading-tight">
                  Every Class Brings You{" "}
                  <span className="text-cf-red">One Rep Closer</span>
                </h2>
                <p className="text-[#c0c0c0] text-base sm:text-lg leading-relaxed mb-6">
                  Our Hyrox program is built around you. Whether you train before work, after work, or on the weekend, you will find a session that fits - and a community ready to push alongside you.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { title: "Train around your week", desc: "Mornings, evenings, weekends. Mix Strength, Stamina, Baseline and Performance to match your goals." },
                    { title: "Coached every session", desc: "Our coaches guide every class, watching your form, pacing, and progress so you always know you are moving forward." },
                    { title: "A community that shows up", desc: "You will train next to people who are chasing the same finish line. That is what makes F15 feel like home." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <div className="w-1 bg-cf-red rounded-full flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                        <p className="text-[#b0b0b0] text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="#consult" className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wider uppercase hover:scale-105 active:scale-95">
                  Join a Class
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src="/images/IMG_8316.JPG"
                  alt="Hyrox Schedule at CrossFit F15"
                  width={800}
                  height={1000}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== WHO IT'S FOR ===== */}
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
                  { bold: "You want to line up", rest: " for your first Hyrox race." },
                  { bold: "You want to go faster", rest: " and race smarter than last time." },
                  { bold: "You love endurance and strength", rest: " working together." },
                  { bold: "You want real coaching,", rest: " not random workouts." },
                  { bold: "You train better", rest: " when the community trains with you." },
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
            <div className="text-center mt-10 sm:mt-12">
              <a href="#consult" className="cta-glow inline-block bg-cf-red hover:bg-cf-red-dark text-white font-bold px-10 sm:px-12 py-3.5 sm:py-4 rounded-full transition-all duration-300 text-sm tracking-wider uppercase hover:scale-105 active:scale-95">
                Book Your Consultation
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== LEAD FORM ===== */}
      <section id="consult" className="py-10 sm:py-20 px-4 sm:px-6 bg-[#111111]">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 leading-tight text-white uppercase">
                Start Your{" "}
                <span className="text-cf-red">Hyrox Journey</span>
              </h2>
              <p className="text-[#b0b0b0] text-base sm:text-lg">
                Tell us about your goals and we will get you moving toward race day.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative">
              <div className="absolute -inset-[1px] bg-gradient-to-b from-cf-red/10 via-transparent to-cf-red/5 rounded-2xl" />
              <div className="relative bg-[#0a0a0a] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-2xl">
                <LeadForm source="hyrox" submitText="Book Your Consultation" />
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/50 text-sm">
            {["100% Free", "No Commitment", "Expert Coaching"].map((t) => (
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

      {/* FOOTER - matches crossfitf15.com */}
      <footer className="bg-[#1a1a1a] text-white/60 pt-10 sm:pt-14 pb-6 px-5 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
            <div>
              <Image
                src="https://crossfitf15.com/wp-content/uploads/2024/06/a96482e43b89d93241c81979f0e4551c.png"
                alt="Crossfit F15 Logo"
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

          <div className="border-t border-white/[0.06] pt-6 text-center">
            <p className="text-white/30 text-xs">CrossFit F15 &copy; {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
