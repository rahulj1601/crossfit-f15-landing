import type { ProofClient, TransformationImage } from "./media";

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
    subheadline: string;
    effortReduction: string;
    image: TransformationImage;
  };

  proof: {
    headline: string[];
    video: { src: string | null; poster: string | null; slotNote: string };
    feature: ProofClient;
    cards: [ProofClient, ProofClient];
    ctaMicrocopy: string;
  };

  tangible: {
    headline: string;
    ticks: [string, string, string, string];
    punchline: string;
    support: string;
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
    title: "F15 Training Centr | Lose weight and feel confident again",
    description:
      "For women in Msida who want to feel good in their body. See if you qualify for a free private consultation at F15 Training Centr.",
  },

  hero: {
    eyebrow: "FOR WOMEN IN MSIDA WHO WANT TO FEEL GOOD IN THEIR BODY",
    headline: ["LOSE UNWANTED WEIGHT.", "FIT YOUR CLOTHES BETTER.", "FEEL CONFIDENT AGAIN."],
    subheadline:
      "Imagine what could change in the next 90 days: feeling leaner, stronger and more toned, having more energy, and finally feeling good in the clothes you actually want to wear.",
    effortReduction:
      "Without crash diets, extreme routines or making fitness take over your life.",
    image: {
      src: null,
      alt: "F15 Training Centr member before and after",
      slotNote:
        "Strongest real female before and after. Pick someone relatable, not your most advanced athlete. The after state should read leaner, toned, confident and attainable. Not a photo of her exercising.",
    },
  },

  proof: {
    headline: ["REAL WOMEN.", "REAL TRANSFORMATIONS."],
    video: {
      src: null,
      poster: null,
      slotNote:
        "Best real female transformation video. Thumbnail should show the before and after result, not a random frame of someone exercising.",
    },
    feature: {
      name: null,
      result: null,
      story:
        "She started wanting to lose weight, feel better in her clothes and stop starting over.",
      quote: null,
      image: {
        src: null,
        alt: "F15 Training Centr member transformation",
        slotNote: "Feature client photo, used only if the video is not ready.",
      },
    },
    cards: [
      {
        name: null,
        result: null,
        quote: null,
        image: {
          src: null,
          alt: "F15 Training Centr member transformation",
          slotNote:
            "Second female proof photo. Priority order: visible body change, clothes fitting, consistency, strength.",
        },
      },
      {
        name: null,
        result: null,
        quote: null,
        image: {
          src: null,
          alt: "F15 Training Centr member transformation",
          slotNote:
            "Third female proof photo. Avoid generic praise like great atmosphere or lovely coaches.",
        },
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
      src: null,
      alt: "F15 Training Centr member after her transformation",
      slotNote:
        "After state photo. A transformed female member looking confident outside the training moment. Normal clothes work best here because it connects to the fit your clothes better promise.",
    },
  },
};

export const MEN: LandingCopy = {
  audience: "men",
  meta: {
    title: "F15 Training Centr | Get back in shape and feel strong again",
    description:
      "For men in Msida who want to get back in shape and feel like themselves again. See if you qualify for a free private consultation at F15 Training Centr.",
  },

  hero: {
    eyebrow: "FOR MEN IN MSIDA WHO WANT TO GET BACK IN SHAPE AND FEEL LIKE THEMSELVES AGAIN",
    headline: ["GET BACK IN SHAPE.", "FEEL STRONGER.", "HAVE MORE ENERGY AGAIN."],
    subheadline:
      "Imagine where you could be 12 weeks from now: noticeably fitter, stronger and leaner, with more energy and confidence in what your body can do again.",
    effortReduction:
      "Without wasting months on random workouts or spending your life in the gym.",
    image: {
      src: null,
      alt: "F15 Training Centr member before and after",
      slotNote:
        "Strongest real male before and after. Should read fit, strong, athletic and attainable, not competitive bodybuilder. Best case is a client with both a visible change and a measurable performance improvement.",
    },
  },

  proof: {
    headline: ["RESULTS YOU CAN SEE.", "PROGRESS YOU CAN MEASURE."],
    video: {
      src: null,
      poster: null,
      slotNote:
        "Strongest real male transformation video. Thumbnail should show the before and after result.",
    },
    feature: {
      name: null,
      result: null,
      secondaryResult: null,
      story:
        "He started wanting to get back in shape, rebuild his strength and stop training without seeing meaningful progress.",
      quote: null,
      image: {
        src: null,
        alt: "F15 Training Centr member transformation",
        slotNote: "Feature client photo, used only if the video is not ready.",
      },
    },
    cards: [
      {
        name: null,
        result: null,
        quote: null,
        image: {
          src: null,
          alt: "F15 Training Centr member transformation",
          slotNote:
            "Second male proof photo. Priority: physical transformation, body composition, strength, benchmark improvement.",
        },
      },
      {
        name: null,
        result: null,
        quote: null,
        image: {
          src: null,
          alt: "F15 Training Centr member transformation",
          slotNote:
            "Third male proof photo. A benchmark number such as 12:23 to 6:55 is powerful, but only if it belongs to that client.",
        },
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
      src: null,
      alt: "F15 Training Centr member after his transformation",
      slotNote:
        "After state photo. The transformed member looking confident, normal clothes or a confident portrait. Do not finish the page with someone collapsed over a rower.",
    },
  },
};
