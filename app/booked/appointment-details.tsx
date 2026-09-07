"use client";

import { useMemo, useSyncExternalStore } from "react";

/**
 * Shows the booked slot from whatever GHL puts on the redirect URL.
 *
 * GHL has used several parameter names for this over time, so we read the
 * common ones and fall back to a neutral confirmation rather than guessing a
 * time we cannot verify.
 */
const DATE_KEYS = ["start_time", "startTime", "start", "appointment_start_time", "date"];
const TIMEZONE = "Europe/Malta";

function parseSlot(search: URLSearchParams): Date | null {
  for (const key of DATE_KEYS) {
    const raw = search.get(key);
    if (!raw) continue;
    // Accept both ISO strings and epoch milliseconds.
    const value = /^\d+$/.test(raw) ? Number(raw) : raw;
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) return parsed;
  }
  return null;
}

// The query string never changes without a navigation, so the store is static.
// Reading it this way keeps the server render empty and the client render
// accurate without a hydration mismatch.
const subscribe = () => () => {};
const getSnapshot = () => window.location.search;
const getServerSnapshot = () => "";

export function AppointmentDetails() {
  const search = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const slot = useMemo(() => parseSlot(new URLSearchParams(search)), [search]);

  const format = (options: Intl.DateTimeFormatOptions) =>
    slot ? new Intl.DateTimeFormat("en-GB", { ...options, timeZone: TIMEZONE }).format(slot) : "";

  return (
    <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl px-6 sm:px-8 py-7 sm:py-9">
      {slot ? (
        <p className="text-white text-lg sm:text-2xl font-extrabold tracking-tight leading-snug">
          <span className="uppercase">{format({ weekday: "long" })}</span>
          <span className="text-cf-red mx-2" aria-hidden="true">
            ·
          </span>
          <span>{format({ day: "numeric", month: "long", year: "numeric" })}</span>
          <span className="text-cf-red mx-2" aria-hidden="true">
            ·
          </span>
          <span>{format({ hour: "2-digit", minute: "2-digit", hour12: false })}</span>
        </p>
      ) : (
        <p className="text-white text-base sm:text-lg font-semibold leading-relaxed">
          Your time is confirmed. The full details are in your email and WhatsApp message.
        </p>
      )}

      <p className="text-white/55 text-sm sm:text-base mt-3">F15 Training CENTR · Msida</p>
    </div>
  );
}
