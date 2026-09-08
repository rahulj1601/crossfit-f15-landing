"use client";

import { useEffect } from "react";

/**
 * Meta pixel conversion events.
 *
 * The application runs through GoHighLevel iframes, so the submit itself
 * happens on a different origin and cannot be hooked directly. What we can
 * rely on is where GHL sends the visitor next, because each redirect only
 * happens after the previous step was actually completed:
 *
 *   form submitted   -> /survey   => Lead
 *   quiz completed   -> /book     => QuizCompleted (custom)
 *   slot booked      -> /booked   => Schedule
 *
 * Each event fires once per browser session, so a refresh or a back button
 * does not inflate the count. An eventID is attached to every call so the
 * same events can be deduplicated later if server-side Conversions API is
 * added.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const AUDIENCE_KEY = "f15_audience";

/** Remembers whether this visitor came through the men's or women's page. */
export function rememberAudience(audience: string) {
  try {
    sessionStorage.setItem(AUDIENCE_KEY, audience);
  } catch {
    // Private browsing can refuse storage. Tracking is not worth an error.
  }
}

function readAudience(): string | null {
  try {
    return sessionStorage.getItem(AUDIENCE_KEY);
  } catch {
    return null;
  }
}

function alreadyFired(key: string): boolean {
  try {
    if (sessionStorage.getItem(key)) return true;
    sessionStorage.setItem(key, "1");
    return false;
  } catch {
    return false;
  }
}

function eventId() {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}

/**
 * Fires a pixel event on mount.
 *
 * `standard` distinguishes Meta's standard events, which the ad account can
 * optimise for, from custom ones that are only useful for diagnostics.
 */
export function PixelEvent({
  event,
  standard = true,
  dedupeKey,
}: {
  event: string;
  standard?: boolean;
  dedupeKey: string;
}) {
  useEffect(() => {
    if (alreadyFired(`f15_px_${dedupeKey}`)) return;

    const audience = readAudience();
    const params: Record<string, string> = { content_name: event };
    if (audience) params.content_category = audience;

    // The pixel snippet loads with afterInteractive, so fbq can be a moment
    // behind hydration. Retry briefly rather than dropping the conversion.
    let attempts = 0;
    const send = () => {
      if (typeof window.fbq === "function") {
        window.fbq(standard ? "track" : "trackCustom", event, params, { eventID: eventId() });
        return;
      }
      if (attempts++ < 40) setTimeout(send, 250);
    };
    send();
  }, [event, standard, dedupeKey]);

  return null;
}
