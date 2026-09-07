import type { FeatureClient, ProofItem, TransformationImage } from "./media";

/**
 * All copy and assets for the men and women landing pages.
 *
 * Content balance to preserve on every future edit:
 *   outcome and future state ~45%, transformation proof ~30%,
 *   removing failure points ~15%, F15 mechanism ~10%.
 *
 * If an edit starts explaining classes, programming, nutrition plans,
 * onboarding sessions, equipment, coaches or facilities, the page has drifted
 * back to selling the vehicle. Those details belong in the consultation.
 *
 * TO GO LIVE: replace every `null` below with the verified client name, the
 * verified result and the real photo path. Nothing here may be invented.
 */

export type LandingCopy = {
  audience: "women" | "men";
  meta: { title: string; description: string };

  hero: {
    eyebrow: string;
    headline: string[];
    /** Rendered large and white: this is the promise, not body copy. */
    imagineLead: string;
    subheadline: string;
    effortReduction: string;
    image: TransformationImage;
  };

  proof: {
    headline: string[];
    feature: FeatureClient;
    cards: ProofItem[];
    ctaMicrocopy: string;
  };

  tangible: {
    headline: string;
    ticks: [string, string, string, string];
    punchline: string;
    support: string;
    /** Optional transformation shown alongside the outcome list. */
    image?: TransformationImage;
  };

  different: {
    headline: string[];
    rows: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ];
    bridge: string;
    closing: string[];
  };

  close: {
    headline: string;
    subheadline: string;
    lead: string;
    image: TransformationImage;
  };
};

const CTA_SUB = "60-second application · No obligation";

export const CTA_SUBLINE = CTA_SUB;
export const CTA_SUBLINE_DETAIL =
  "If you're a good fit, you'll be able to book your free private consultation with our team.";
export const CTA_FINAL_DETAIL =
  "If you qualify, you'll unlock the next step and be able to choose a time for your free private F15 consultation.";
export const SCARCITY =
  "Because every new member begins with individual support, we limit how many new starts we accept at one time.";

export const WOMEN: LandingCopy = {
  audience: "women",
  meta: {
    title: "F15 Training CENTR | Lose weight and feel confident again",
    description:
      "For women in Msida who want to feel good in their body. See if you qualify for a free private consultation at F15 Training CENTR.",
  },

  hero: {
    eyebrow: "FOR WOMEN IN MSIDA WHO WANT TO FEEL GOOD IN THEIR BODY",
    headline: ["LOSE UNWANTED WEIGHT.", "FIT YOUR CLOTHES BETTER.", "FEEL CONFIDENT AGAIN."],
    imagineLead: "Imagine what could change in the next 90 days.",
    subheadline:
      "Feeling leaner, stronger and more toned, having more energy, and finally feeling good in the clothes you actually want to wear.",
    effortReduction:
      "Without crash diets, extreme routines or making fitness take over your life.",
    image: {
      src: "/images/landing/transformation-francesca.jpg",
      width: 1448,
      height: 1086,
      alt: "Francesca Ellul before and after her transformation at F15 Training CENTR",
      credit: { name: "Francesca Ellul, 31", result: "Lost 12 kg in 12 weeks" },
      slotNote:
        "Strongest real female before and after, leading the page.",
    },
  },

  proof: {
    headline: ["REAL WOMEN.", "REAL TRANSFORMATIONS."],
    feature: {
      name: "Maria",
      result: "Lost the weight, gained the confidence",
      story: "She started at 28 wanting to lose weight.",
      today:
        "Today she says it gave her confidence she never knew she needed, discipline, and belief in herself.",
      quote:
        "I started CrossFit when I was 28, with the original scope of losing weight, but it actually gave me much more than that. It gave me the confidence I never knew I needed.",
      video: {
        src: "/videos/testimonial-maria.mp4",
        poster: "/images/video-posters/testimonial-maria.jpg",
        slotNote: "Strongest female transformation video.",
      },
    },
    cards: [
      {
        kind: "filmed",
        name: "Cheyenne",
        result: "A year in, stronger and surer of herself",
        quote:
          "I was very conscious about myself. I decided to start something new. My goal was to get stronger.",
        poster: "/images/video-posters/testimonial-cheyenne.jpg",
        video: "/videos/testimonial-cheyenne.mp4",
      },
      {
        kind: "filmed",
        name: "Aliza",
        result: "From half a squat to real progress",
        quote:
          "I couldn't even do half a squat. They told me you are not weak, you just need patience. After three months I can see the progress.",
        poster: "/images/video-posters/testimonial-aliza.jpg",
        video: "/videos/testimonial-aliza.mp4",
      },
      {
        kind: "filmed",
        name: "Olga",
        result: "Fitter body, better mind",
        quote:
          "Since I joined the gym, I improved my physical fitness, I improved my mental health.",
        poster: "/images/video-posters/testimonial-1.jpg",
        video: "/videos/testimonial-1.mp4",
      },
      {
        kind: "filmed",
        name: "Diana",
        result: "Three years, way stronger and happier",
        quote:
          "I decided I wanted to do something more challenging. I feel way stronger, and overall I'm so much happier now.",
        poster: "/images/video-posters/testimonial-diana.jpg",
        video: "/videos/testimonial-diana.mp4",
      },
    ],
    ctaMicrocopy: "See if F15 could be the right fit for your goal.",
  },

  tangible: {
    headline: "WHAT COULD 90 DAYS CHANGE FOR YOU?",
    ticks: [
      "Fit into more of the clothes you actually want to wear",
      "Look leaner and feel more toned",
      "Feel stronger and have more energy",
      "Feel confident in your body again",
    ],
    punchline: "THE SCALE IS ONLY ONE PART OF THE TRANSFORMATION.",
    support:
      "The real win is looking better, feeling stronger and no longer feeling like you have to keep starting over.",
    // Mirrors the men's page, which shows a transformation beside this list.
    // Drop a third female before and after in here when one is shot.
    // image: { src: "/images/landing/transformation-women-2.jpg", width: 1448,
    //   height: 1086, alt: "...", slotNote: "..." },
  },

  different: {
    headline: ["YOU'VE PROBABLY TRIED BEFORE.", "THIS TIME NEEDS TO FEEL DIFFERENT."],
    rows: [
      {
        title: "STOP WONDERING WHAT TO DO NEXT",
        body: "Have a clear direction instead of constantly second-guessing whether you're doing the right thing.",
      },
      {
        title: "STOP DEPENDING ON MOTIVATION",
        body: "Keep moving forward when life gets busy, so one difficult week doesn't become another six months of stopping.",
      },
      {
        title: "STOP TRYING TO FIGURE EVERYTHING OUT ALONE",
        body: "Have support around you when you need help, adjustments or accountability.",
      },
    ],
    bridge:
      "That's what F15 is designed to do: remove the confusion, inconsistency and lack of support that make getting lasting results so difficult on your own.",
    closing: ["YOUR JOB IS TO START.", "OUR JOB IS TO HELP YOU KEEP GOING."],
  },

  close: {
    headline: "YOUR NEXT 90 DAYS WILL PASS EITHER WAY.",
    subheadline:
      "You can spend them thinking about changing again, or find out what could happen if this time you actually follow through.",
    lead:
      "Answer a few quick questions and see whether F15 could be the right fit for what you want to achieve.",
    image: {
      src: "/images/landing/f15-team-posed.jpg",
      width: 1280,
      height: 1145,
      alt: "F15 Training CENTR members in Msida",
      slotNote:
        "NEEDS a second credited female before and after, to mirror Jake Tabone closing the men's page.",
    },
  },
};

export const MEN: LandingCopy = {
  audience: "men",
  meta: {
    title: "F15 Training CENTR | Get back in shape and feel strong again",
    description:
      "For men in Msida who want to get back in shape and feel like themselves again. See if you qualify for a free private consultation at F15 Training CENTR.",
  },

  hero: {
    eyebrow: "FOR MEN IN MSIDA WHO WANT TO GET BACK IN SHAPE AND FEEL LIKE THEMSELVES AGAIN",
    headline: ["GET BACK IN SHAPE.", "FEEL STRONGER.", "HAVE MORE ENERGY AGAIN."],
    imagineLead: "Imagine where you could be 12 weeks from now.",
    subheadline:
      "Noticeably fitter, stronger and leaner, with more energy and confidence in what your body can do again.",
    effortReduction:
      "Without wasting months on random workouts or spending your life in the gym.",
    image: {
      src: "/images/landing/transformation-kurt.jpg",
      width: 1448,
      height: 1086,
      alt: "Kurt Wright before and after his transformation at F15 Training CENTR",
      credit: { name: "Kurt Wright, 34", result: "Lost 10 kg in 9 weeks" },
      slotNote:
        "Strongest real male before and after, leading the page.",
    },
  },

  proof: {
    headline: ["RESULTS YOU CAN SEE.", "PROGRESS YOU CAN MEASURE."],
    feature: {
      name: "Patrick Debattista, 32",
      result: "From avoiding the gym to two HYROX races",
      secondaryResult: "More work done, not less",
      story:
        "He started out anxious about walking in at all, and worried that training would cost him working hours.",
      today:
        "Today he has two HYROX races behind him, and says training improved both the quality and the quantity of his work.",
      quote:
        "Without knowing, coming to F15 has actually changed my lifestyle completely. If you're scared to start, don't think, just start.",
      video: {
        src: "/videos/testimonial-patrick.mp4",
        poster: "/images/video-posters/testimonial-patrick.jpg",
        slotNote: "Strongest male transformation video.",
      },
    },
    cards: [
      {
        kind: "filmed",
        name: "Alex Ferrante, 35",
        result: "Four months, doing what he could not before",
        quote:
          "When I started gymnastics over here, there were stuff that I couldn't do. Four months later, I started managing to do some stuff.",
        poster: "/images/video-posters/testimonial-alex.jpg",
        video: "/videos/testimonial-alex.mp4",
      },
      {
        kind: "filmed",
        name: "Andre Cachia, 47",
        result: "Back in shape after football",
        quote:
          "After retiring from football I was a bit confused of what I was doing. F15 was something that triggered me again, helped me keep fit.",
        poster: "/images/video-posters/testimonial-andre.jpg",
        video: "/videos/testimonial-andre.mp4",
      },
      {
        kind: "filmed",
        name: "Keith Abela, 41",
        result: "Fitter at 41 than in his twenties",
        quote:
          "I did the leap and it was the best thing I ever did in my life. I feel fitter than I was when I was younger.",
        poster: "/images/video-posters/testimonial-2.jpg",
        video: "/videos/testimonial-2.mp4",
      },
    ],
    ctaMicrocopy: "See if F15 could be the right fit for your goal.",
  },

  tangible: {
    headline: "WHAT COULD 12 WEEKS CHANGE?",
    ticks: [
      "Look noticeably more athletic and in shape",
      "Feel stronger and more capable",
      "Have more energy throughout your day",
      "See real progress in your fitness and performance",
    ],
    punchline: "THE GOAL ISN'T JUST TO EXERCISE MORE.",
    support: "It's to feel like you're actually moving forward again.",
    image: {
      src: "/images/landing/transformation-men-2.jpg",
      width: 1448,
      height: 1086,
      alt: "An F15 Training CENTR member before and after his transformation",
      slotNote: "Transformation shown beside the twelve week outcome list.",
    },
  },

  different: {
    headline: ["YOU DON'T NEED MORE MOTIVATION.", "YOU NEED TO STOP LOSING MOMENTUM."],
    rows: [
      {
        title: "STOP DOING RANDOM WORKOUTS",
        body: "Know what you're working towards instead of simply exercising and hoping something changes.",
      },
      {
        title: "STOP STARTING AND STOPPING",
        body: "Keep moving when work and life get busy, so a missed week doesn't become another six months off.",
      },
      {
        title: "STOP WONDERING WHETHER YOU'RE IMPROVING",
        body: "See clear progress in your strength, fitness and performance.",
      },
    ],
    bridge:
      "That's what F15 is designed to do: remove the guessing, inconsistency and lack of accountability that keep many men stuck in the same cycle.",
    closing: ["LESS GUESSING.", "MORE PROGRESS."],
  },

  close: {
    headline: "12 WEEKS FROM NOW, YOU COULD BE GLAD YOU STARTED TODAY.",
    subheadline:
      "Or you could still be telling yourself you'll get back in shape when life becomes less busy.",
    lead:
      "Answer a few quick questions and see whether F15 could be the right fit for what you want to achieve.",
    image: {
      src: "/images/landing/transformation-men-1.jpg",
      width: 1445,
      height: 1088,
      alt: "Jake Tabone before and after his transformation at F15 Training CENTR",
      credit: { name: "Jake Tabone, 33", result: "Lost 12 kg in 12 weeks" },
      slotNote:
        "Closing before and after, shown right before the final CTA.",
    },
  },
};
