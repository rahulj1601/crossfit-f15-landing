import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";
import { getSocialProof } from "../lib/reviews";
import {
  ApplicationModal,
  QualifyButton,
  StickyQualifyBar,
} from "./qualify-cta";
import {
  ProofItemCard,
  ProofVideo,
  SlotText,
  TransformationShot,
} from "./media";
import {
  CTA_FINAL_DETAIL,
  CTA_SUBLINE,
  CTA_SUBLINE_DETAIL,
  SCARCITY,
  type LandingCopy,
} from "./copy";

const HERO_CTA_ID = "hero-qualify";

function Stars() {
  return (
    <span className="text-cf-red tracking-[0.15em]" aria-hidden="true">
      &#9733;&#9733;&#9733;&#9733;&#9733;
    </span>
  );
}

async function SocialProofLine({ className = "" }: { className?: string }) {
  const { reviews, rating, members } = await getSocialProof();
  return (
    <p className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm sm:text-base ${className}`}>
      <Stars />
      <span className="text-white/80 font-semibold">
        {reviews}+ Google Reviews
      </span>
      <span className="text-white/25" aria-hidden="true">|</span>
      <span className="text-white/80 font-semibold">{members}+ F15 Members</span>
      <span className="sr-only">Rated {rating} out of 5</span>
    </p>
  );
}

function Tick() {
  return (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6 text-cf-red flex-shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function LandingPage({ copy }: { copy: LandingCopy }) {
  const { hero, proof, tangible, different, close } = copy;

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* F15 logo only. No navigation on purpose: there is one action on this page. */}
      <header className="bg-black/90 backdrop-blur-xl sticky top-0 z-30 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center">
          <Image
            src="/images/f15-logo.svg"
            alt="F15 Training Centr"
            width={1402}
            height={559}
            className="h-8 sm:h-10 w-auto"
            unoptimized
            priority
          />
        </div>
      </header>

      {/* ============ 1. HERO: the dream outcome ============ */}
      <section className="relative px-5 sm:px-6 pt-8 sm:pt-14 pb-10 sm:pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cf-red/[0.07] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Copy. On mobile the eyebrow and headline come first, then the
              transformation, so she sees the outcome before anything else. */}
          <div className="order-1 flex flex-col">
            <p className="animate-fade-up text-cf-red text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase leading-relaxed mb-4">
              {hero.eyebrow}
            </p>

            <h1 className="animate-fade-up-delay text-[2rem] sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.05] text-white">
              {hero.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>

          {/* Transformation. Second on mobile, right hand side on desktop. */}
          <div className="order-2 lg:order-2 lg:row-span-2">
            <ScrollReveal>
              <TransformationShot image={hero.image} aspect="aspect-[4/5]" priority />
            </ScrollReveal>
          </div>

          {/* Sub, effort reduction, CTA, proof. */}
          <div className="order-3 lg:order-3 flex flex-col lg:-mt-6">
            <p className="animate-fade-up-delay-2 text-[#c4c4c4] text-base sm:text-lg leading-relaxed mb-4">
              {hero.subheadline}
            </p>

            <p className="animate-fade-up-delay-2 text-white/70 text-sm sm:text-base italic mb-7">
              {hero.effortReduction}
            </p>

            <div className="animate-fade-up-delay-3">
              <QualifyButton source="hero" id={HERO_CTA_ID} />

              <p className="text-white/50 text-xs sm:text-sm mt-4 font-medium">{CTA_SUBLINE}</p>
              <p className="text-white/40 text-xs sm:text-sm mt-1.5 max-w-md leading-relaxed">
                {CTA_SUBLINE_DETAIL}
              </p>

              <div className="mt-6 pt-5 border-t border-white/[0.07]">
                <SocialProofLine className="justify-start" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. PROOF: can someone like me actually do this ============ */}
      <section className="px-5 sm:px-6 py-12 sm:py-20 bg-[#080808] border-y border-white/[0.05]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white text-center mb-10 sm:mb-14 leading-[1.1]">
              {proof.headline.map((line, index) => (
                <span key={line} className={index === 1 ? "block text-cf-red" : "block"}>
                  {line}
                </span>
              ))}
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
            <ScrollReveal>
              <ProofVideo
                src={proof.feature.video.src}
                poster={proof.feature.video.poster}
                slotNote={proof.feature.video.slotNote}
              />
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex flex-col gap-3">
                <p className="text-white font-extrabold text-xl sm:text-2xl tracking-tight">
                  {proof.feature.name ?? <SlotText>Client name</SlotText>}
                </p>
                <p className="text-cf-red font-extrabold text-lg sm:text-xl tracking-[0.06em] uppercase">
                  {proof.feature.result ?? <SlotText>Verified result</SlotText>}
                </p>
                {proof.feature.secondaryResult !== undefined && (
                  <p className="text-white/70 font-bold text-sm sm:text-base tracking-[0.06em] uppercase">
                    {proof.feature.secondaryResult ?? <SlotText>Verified performance result</SlotText>}
                  </p>
                )}

                {proof.feature.story && (
                  <p className="text-[#b8b8b8] text-sm sm:text-base leading-relaxed mt-1">
                    {proof.feature.story}
                  </p>
                )}

                <blockquote className="text-white text-base sm:text-lg leading-relaxed border-l-2 border-cf-red pl-4 mt-2">
                  {proof.feature.quote ? (
                    `“${proof.feature.quote}”`
                  ) : (
                    <SlotText>Their strongest real quote, one or two sentences</SlotText>
                  )}
                </blockquote>
              </div>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-10 sm:mb-14">
            {proof.cards.map((item) => (
              <ScrollReveal key={item.name}>
                <ProofItemCard item={item} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <QualifyButton source="proof" />
            <p className="text-white/45 text-xs sm:text-sm mt-4">{proof.ctaMicrocopy}</p>
          </div>
        </div>
      </section>

      {/* ============ 3. MAKE THE OUTCOME TANGIBLE ============ */}
      <section className="px-5 sm:px-6 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white text-center mb-9 sm:mb-12 leading-[1.1]">
              {tangible.headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <ul className="flex flex-col gap-4 sm:gap-5 mb-10 sm:mb-14">
              {tangible.ticks.map((tick) => (
                <li key={tick} className="flex items-start gap-3.5">
                  <Tick />
                  <span className="text-white text-base sm:text-xl leading-snug">{tick}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center border-t border-white/[0.07] pt-9 sm:pt-12">
              <p className="text-cf-red text-xl sm:text-3xl font-extrabold tracking-tight leading-[1.15] mb-4">
                {tangible.punchline}
              </p>
              <p className="text-[#b8b8b8] text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
                {tangible.support}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ 4. WHY THIS TIME COULD BE DIFFERENT ============ */}
      <section className="px-5 sm:px-6 py-12 sm:py-20 bg-[#080808] border-y border-white/[0.05]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white text-center mb-9 sm:mb-14 leading-[1.1]">
              {different.headline.map((line, index) => (
                <span key={line} className={index === 1 ? "block text-white/55" : "block"}>
                  {line}
                </span>
              ))}
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-6 sm:gap-8 mb-10 sm:mb-12">
            {different.rows.map((row) => (
              <ScrollReveal key={row.title}>
                <div className="flex items-start gap-3.5">
                  <Tick />
                  <div>
                    <p className="text-white font-extrabold text-sm sm:text-lg tracking-[0.06em] uppercase mb-1.5">
                      {row.title}
                    </p>
                    <p className="text-[#b0b0b0] text-sm sm:text-base leading-relaxed">{row.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-[#c4c4c4] text-base sm:text-lg leading-relaxed text-center mb-10 sm:mb-12">
              {different.bridge}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-center text-white text-xl sm:text-3xl font-extrabold tracking-tight leading-[1.2]">
              {different.closing.map((line, index) => (
                <span key={line} className={index === 1 ? "block text-cf-red" : "block"}>
                  {line}
                </span>
              ))}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ 5. FINAL CLOSE ============ */}
      <section className="relative px-5 sm:px-6 py-12 sm:py-20 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cf-red/[0.07] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-9 lg:gap-14 items-center">
          <ScrollReveal>
            <TransformationShot image={close.image} aspect="aspect-[4/5]" />
          </ScrollReveal>

          <div className="text-center lg:text-left">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
                {close.headline}
              </h2>
              <p className="text-[#b8b8b8] text-base sm:text-lg leading-relaxed mb-5">
                {close.subheadline}
              </p>
              <p className="text-white text-base sm:text-lg leading-relaxed mb-8 font-medium">
                {close.lead}
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <QualifyButton source="final" />

              <p className="text-white/50 text-xs sm:text-sm mt-4 font-medium">{CTA_SUBLINE}</p>
              <p className="text-white/40 text-xs sm:text-sm mt-1.5 leading-relaxed max-w-md mx-auto lg:mx-0">
                {CTA_FINAL_DETAIL}
              </p>

              <p className="text-white/55 text-xs sm:text-sm mt-6 pt-5 border-t border-white/[0.07] leading-relaxed max-w-md mx-auto lg:mx-0">
                {SCARCITY}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Minimal footer. No site navigation by design. */}
      <footer className="py-6 px-5 sm:px-6 bg-black border-t border-white/[0.05] pb-24 sm:pb-6">
        <div className="max-w-5xl mx-auto text-center space-y-1.5">
          <p className="text-white/35 text-[11px] sm:text-xs">
            F15 Training Centr · 58 Triq L-Universita, Msida · +356 9979 1664
          </p>
          <p className="text-white/20 text-[10px] sm:text-xs">
            &copy; {new Date().getFullYear()} F15 Training Centr ·{" "}
            <a href="https://crossfitf15.com/privacy-policy" className="hover:text-white/40 transition-colors">
              Privacy
            </a>
          </p>
        </div>
      </footer>

      <StickyQualifyBar heroButtonId={HERO_CTA_ID} />
      <ApplicationModal />
    </div>
  );
}
