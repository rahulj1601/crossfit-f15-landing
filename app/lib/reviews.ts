// Live social proof numbers.
//
// The Google review count is pulled from the F15 GHL reputation widget so the
// page never drifts out of date. It is cached for an hour and falls back to a
// conservative floor if the request fails, so the page always renders.

const WIDGET_URL =
  "https://backend.leadconnectorhq.com/appengine/reviews/get_widget/PE8avF50BBboGGbRC0bY";

// Floors, used only if the live fetch fails. Never state more than we can prove.
const FALLBACK_REVIEWS = 650;
const FALLBACK_RATING = 5;

// No public API returns the live member count, so this stays a manual figure.
// Update it here when the real number moves.
export const MEMBER_COUNT = 350;

export type SocialProof = {
  reviews: number;
  rating: number;
  members: number;
};

// Round down to the nearest ten so the claim is always provable, and so the
// number only ever moves upward as new reviews land.
function roundDownToTen(value: number) {
  return Math.floor(value / 10) * 10;
}

export async function getSocialProof(): Promise<SocialProof> {
  try {
    const res = await fetch(WIDGET_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; F15LandingPage/1.0)" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error(`widget responded ${res.status}`);

    const html = await res.text();
    const totalReviews = Number(html.match(/"totalReviews"\s*:\s*(\d+)/)?.[1]);
    const totalRating = Number(html.match(/"totalRating"\s*:\s*([\d.]+)/)?.[1]);

    return {
      reviews: Number.isFinite(totalReviews) && totalReviews > 0
        ? roundDownToTen(totalReviews)
        : FALLBACK_REVIEWS,
      rating: Number.isFinite(totalRating) && totalRating > 0 ? totalRating : FALLBACK_RATING,
      members: MEMBER_COUNT,
    };
  } catch {
    return { reviews: FALLBACK_REVIEWS, rating: FALLBACK_RATING, members: MEMBER_COUNT };
  }
}
