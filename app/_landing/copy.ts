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
    subheadline: string;
    effortReduction: string;
    image: TransformationImage;
  };

  proof: {
    headline: string[];
    feature: FeatureClient;
    cards: [ProofItem, ProofItem];
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
      src: "/images/landing/f15-team-posed.jpg",
      alt: "F15 Training Centr members in Msida",
      slotNote:
        "Replace with the strongest real female before and after when available. Pick someone relatable, not your most advanced athlete.",
    },
  },

  proof: {
    headline: ["REAL WOMEN.", "REAL TRANSFORMATIONS."],
    feature: {
      name: "Olga",
      result: "Fitter body, better mind",
      story:
        "She started training to stay fit, and found the change went further than that.",
      quote:
        "Since I joined the gym, I improved my physical fitness, I improved my mental health. I actually improved the quality of my social life as well.",
      video: {
        src: "/videos/testimonial-1.mp4",
        poster: "/images/video-posters/testimonial-1.jpg",
        slotNote:
          "Replace with a female before and after transformation video when one is filmed.",
      },
    },
    cards: [
      {
        kind: "review",
        name: "Titina T",
        result: "More consistent, more confident",
        quote:
          "Since I joined, I've become more consistent, and much more confident in my fitness journey.",
      },
      {
        kind: "review",
        name: "Juliette M",
        result: "Boost of self confidence",
        quote:
          "Boost of self confidence, coaches always there for you, each class is different and will focus on your progress.",
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
      src: "/images/landing/f15-community.jpg",
      alt: "The F15 Training Centr community in Msida",
      slotNote:
        "Replace with a female after state photo in normal clothes when available. That connects directly to the fit your clothes better promise.",
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
      src: "/images/landing/f15-members-men.jpg",
      alt: "F15 Training Centr members in Msida",
      slotNote:
        "Replace with the strongest real male before and after when available. Should read fit, strong, athletic and attainable, not competitive bodybuilder.",
    },
  },

  proof: {
    headline: ["RESULTS YOU CAN SEE.", "PROGRESS YOU CAN MEASURE."],
    feature: {
      name: "Keith, 41",
      result: "Fitter at 41 than in his twenties",
      secondaryResult: "Training at F15 for almost two years",
      story:
        "He wanted to get back in shape without needing to already be an athlete to start.",
      quote:
        "I did the leap and it was the best thing I ever did in my life. I am now 41 years old and I feel fitter than I was when I was younger.",
      video: {
        src: "/videos/testimonial-2.mp4",
        poster: "/images/video-posters/testimonial-2.jpg",
        slotNote:
          "Replace with a male before and after transformation video when one is filmed.",
      },
    },
    cards: [
      {
        kind: "filmed",
        name: "Jan, 31",
        result: "Four years, new skills",
        quote:
          "It helps you get out of your comfort zone. Here I acquired so many new skills and with patience you'll get there.",
        poster: "/images/video-posters/testimonial-3.jpg",
        video: "/videos/testimonial-3.mp4",
      },
      {
        kind: "review",
        name: "Elton Lee Abela",
        result: "Coached properly, start to finish",
        quote:
          "The trainers know what they are doing and they train themselves. I'm really happy here.",
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
      src: "/images/landing/f15-member-strong.jpg",
      alt: "F15 Training Centr member in Msida",
      slotNote:
        "Replace with a male after state photo, confident portrait in normal clothes, when available.",
    },
  },
};
