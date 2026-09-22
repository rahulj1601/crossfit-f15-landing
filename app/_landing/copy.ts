import type { FeatureClient, ProofItem, TransformationImage } from "./media";

/**
 * All copy and assets for the men and women landing pages.
 *
 * Editing principle after the September simplification pass: the videos and
 * the transformation images carry the proof, the text only labels them. If an
 * edit starts adding a paragraph next to a video, or a second sentence under a
 * bullet, the page is drifting back to being read rather than scanned.
 *
 * Nothing here may be invented. Every name, age and result is verified.
 */

export type LandingCopy = {
  audience: "women" | "men";
  meta: { title: string; description: string };

  hero: {
    /** The avatar call-out. Rendered large enough to read on a phone: its job
     *  is to let the right visitor think "this is for me" before anything else. */
    eyebrow: string;
    headline: string[];
    /** Rendered large and white: this is the promise, not body copy. */
    imagineLead: string;
    subheadline: string;
    /** One short line, not a paragraph. */
    effortReduction: string;
    image: TransformationImage;
  };

  /** The location badge wording differs per page. */
  locationLine: string;

  proof: {
    headline: string[];
    feature: FeatureClient;
    cards: ProofItem[];
  };

  tangible: {
    headline: string;
    ticks: string[];
    /** Optional closing line under the outcome list. */
    punchline?: string;
  };

  different: {
    headline: string;
    rows: [
      { title: string; body: string },
      { title: string; body: string },
      { title: string; body: string },
    ];
  };

  close: {
    headline: string;
    lead: string;
    /** Optional: both pages close on copy alone. */
    image?: TransformationImage;
  };
};

export const CTA_SUBLINE = "60-second application · No obligation";
// The same reassurance sits under every CTA. One promise, worded once.
export const CTA_SUBLINE_DETAIL =
  "If it looks like F15 could be a good fit, you'll be able to choose a time for your free private consultation.";

export const WOMEN: LandingCopy = {
  audience: "women",
  meta: {
    title: "F15 Training CENTR | Get fitter and feel confident again",
    description:
      "For women in Malta who want to feel good in their body. Apply for a free private consultation at F15 Training CENTR in Msida.",
  },

  hero: {
    eyebrow: "FOR WOMEN IN MALTA WHO WANT TO FEEL GOOD IN THEIR BODY",
    headline: ["GET FITTER.", "FEEL MORE TONED.", "FEEL CONFIDENT AGAIN."],
    imagineLead: "Imagine what could change in the next 90 days.",
    subheadline:
      "Feel fitter, leaner and more toned, build strength, have more energy and feel confident in the clothes you want to wear.",
    effortReduction: "Get a clear plan. Expert coaching. Ongoing support.",
    image: {
      src: "/images/landing/transformation-francesca.jpg",
      width: 1448,
      height: 1086,
      alt: "Francesca Ellul before and after her transformation at F15 Training CENTR",
      credit: { name: "Francesca Ellul, 31", result: "Lost 12 kg in 12 weeks" },
      slotNote: "Strongest real female before and after, leading the page.",
    },
  },

  locationLine: "Train with us in MSIDA, Malta",

  proof: {
    headline: ["REAL WOMEN.", "REAL TRANSFORMATIONS."],
    feature: {
      name: "Maria",
      result: "Lost the weight, gained the confidence",
      quote: "It gave me the confidence I never knew I needed.",
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
        result: "Stronger and more confident",
        poster: "/images/video-posters/testimonial-cheyenne.jpg",
        video: "/videos/testimonial-cheyenne.mp4",
      },
      {
        kind: "filmed",
        name: "Eliza",
        result: "From not liking her body to feeling proud",
        poster: "/images/video-posters/testimonial-eliza.jpg",
        video: "/videos/testimonial-eliza.mp4",
      },
      {
        kind: "filmed",
        name: "Olga",
        result: "Fitter body, better mind",
        poster: "/images/video-posters/testimonial-1.jpg",
        video: "/videos/testimonial-1.mp4",
      },
      {
        kind: "filmed",
        name: "Diana",
        result: "Stronger, fitter and happier",
        poster: "/images/video-posters/testimonial-diana.jpg",
        video: "/videos/testimonial-diana.mp4",
      },
    ],
  },

  tangible: {
    headline: "WHAT COULD 90 DAYS CHANGE FOR YOU?",
    ticks: [
      "Get noticeably fitter, leaner and more toned",
      "Feel stronger and have more energy",
      "Feel confident in your body again",
      "Fit into more of the clothes you actually want to wear",
    ],
    punchline: "THE SCALE IS ONLY ONE PART OF THE TRANSFORMATION.",
  },

  different: {
    headline: "WHAT YOU GET AT F15",
    rows: [
      {
        title: "A PLAN BUILT AROUND YOU",
        body: "Training based on your own starting point, goals and experience.",
      },
      {
        title: "REAL COACHING & PROGRESS",
        body: "Get coached through the process, build real confidence and see how you're progressing.",
      },
      {
        title: "SUPPORT TO STAY CONSISTENT",
        body: "Training, practical nutrition guidance and accountability to keep you moving when life gets busy.",
      },
    ],
  },

  close: {
    headline: "SEE WHAT YOU COULD ACHIEVE IN THE NEXT 90 DAYS.",
    lead:
      "Answer a few quick questions and see whether F15 could be the right fit to help you get fitter, more toned, stronger and more confident in your body.",
  },
};

export const MEN: LandingCopy = {
  audience: "men",
  meta: {
    title: "F15 Training CENTR | Get back in shape and feel strong again",
    description:
      "For busy men in Malta who want to get back in shape, feel stronger and have more energy. Apply for a free private consultation at F15 Training CENTR in Msida.",
  },

  hero: {
    eyebrow:
      "FOR BUSY MEN IN MALTA WHO WANT TO GET BACK IN SHAPE, FEEL STRONGER AND HAVE MORE ENERGY",
    headline: ["GET BACK IN SHAPE.", "FEEL STRONGER.", "HAVE MORE ENERGY AGAIN."],
    imagineLead: "Imagine where you could be 12 weeks from now.",
    subheadline:
      "Fitter, stronger and leaner, with more energy and confidence in what your body can do.",
    effortReduction: "A clear plan. Expert coaching. Ongoing support.",
    image: {
      src: "/images/landing/transformation-men-1.jpg",
      width: 1445,
      height: 1088,
      alt: "Jake Tabone before and after his transformation at F15 Training CENTR",
      credit: { name: "Jake Tabone, 33", result: "Lost 12 kg in 12 weeks" },
      slotNote: "Strongest real male before and after, leading the page.",
    },
  },

  locationLine: "Training in Msida, Malta",

  proof: {
    headline: ["RESULTS YOU CAN SEE.", "PROGRESS YOU CAN MEASURE."],
    feature: {
      name: "Patrick Debattista, 32",
      result: "From avoiding the gym to two HYROX races",
      quote: "Coming to F15 has actually changed my lifestyle completely.",
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
        result: "In 3 months, doing things he couldn't do before",
        poster: "/images/video-posters/testimonial-alex.jpg",
        video: "/videos/testimonial-alex.mp4",
      },
      {
        kind: "filmed",
        name: "Andre Cachia, 47",
        result: "Back in shape & feeling amazing",
        poster: "/images/video-posters/testimonial-andre.jpg",
        video: "/videos/testimonial-andre.mp4",
      },
      {
        kind: "filmed",
        name: "Keith Abela, 41",
        result: "Fitter at 41 than in his twenties",
        quote: "I feel fitter than I was when I was younger.",
        poster: "/images/video-posters/testimonial-2.jpg",
        video: "/videos/testimonial-2.mp4",
      },
    ],
  },

  tangible: {
    headline: "WHAT COULD 12 WEEKS CHANGE?",
    ticks: [
      "Get noticeably fitter, leaner and back in shape",
      "Feel stronger and have more energy throughout your day",
      "See clear, measurable progress in your fitness and performance",
    ],
  },

  different: {
    headline: "WHAT YOU GET AT F15",
    rows: [
      {
        title: "A PLAN BUILT AROUND YOU",
        body: "Training based on your starting point, goals and experience.",
      },
      {
        title: "REAL COACHING & PROGRESS",
        body: "Get coached through the process and see how you're progressing.",
      },
      {
        title: "SUPPORT TO STAY CONSISTENT",
        body: "Training, practical nutrition guidance and an accountability system to keep you moving when life gets busy.",
      },
    ],
  },

  close: {
    headline: "SEE WHAT YOU COULD ACHIEVE IN THE NEXT 12 WEEKS.",
    lead:
      "Answer a few quick questions and see whether F15 could be the right fit to help you get stronger, fitter and back in shape.",
  },
};
