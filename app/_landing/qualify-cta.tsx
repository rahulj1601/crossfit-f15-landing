"use client";

import { useCallback, useEffect, useState } from "react";

// The single CTA used everywhere on the men and women pages.
// One label, one commitment, three placements. Nothing else.
export const CTA_LABEL = "SEE IF I QUALIFY";

// Existing GHL quiz form. Step 1 collects details, the quiz follows,
// then GHL sends the visitor to the booking step.
const APPLICATION_FORM_URL =
  "https://api.leadconnectorhq.com/widget/form/1edYexznRNU71uDcS2pS";

type OpenDetail = { source: string };

const OPEN_EVENT = "f15:open-application";
const STATE_EVENT = "f15:application-state";

export function openApplication(source: string) {
  window.dispatchEvent(new CustomEvent<OpenDetail>(OPEN_EVENT, { detail: { source } }));
}

/**
 * The CTA button. `id` is set on the hero instance so the sticky mobile bar
 * knows when it has scrolled out of view.
 */
export function QualifyButton({
  source,
  id,
  className = "",
}: {
  source: string;
  id?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      id={id}
      onClick={() => openApplication(source)}
      className={
        "cta-glow inline-flex items-center justify-center gap-2 bg-cf-red hover:bg-cf-red-dark " +
        "text-white font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-full transition-all duration-300 " +
        "text-sm sm:text-base tracking-[0.08em] uppercase hover:scale-105 active:scale-95 " +
        "w-full sm:w-auto cursor-pointer " +
        className
      }
    >
      {CTA_LABEL}
      <span aria-hidden="true">&rarr;</span>
    </button>
  );
}

/**
 * Mobile-only sticky CTA. Appears once the hero button has scrolled away and
 * stays until the visitor opens the application.
 */
export function StickyQualifyBar({ heroButtonId }: { heroButtonId: string }) {
  const [visible, setVisible] = useState(false);
  const [applicationOpen, setApplicationOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroButtonId);
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroButtonId]);

  useEffect(() => {
    const onState = (event: Event) => {
      setApplicationOpen((event as CustomEvent<{ open: boolean }>).detail.open);
    };
    window.addEventListener(STATE_EVENT, onState);
    return () => window.removeEventListener(STATE_EVENT, onState);
  }, []);

  const shown = visible && !applicationOpen;

  return (
    <div
      className={
        "sm:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 " +
        "bg-gradient-to-t from-black via-black/95 to-black/0 transition-all duration-300 " +
        (shown ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none")
      }
    >
      <button
        type="button"
        onClick={() => openApplication("sticky")}
        className="w-full bg-cf-red hover:bg-cf-red-dark text-white font-bold py-4 rounded-full
                   text-sm tracking-[0.08em] uppercase active:scale-[0.98] transition-transform
                   shadow-[0_0_30px_rgba(184,28,28,0.35)] cursor-pointer"
      >
        {CTA_LABEL} <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}

/** The application itself, in a modal, so the visitor never leaves the page. */
export function ApplicationModal() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent(STATE_EVENT, { detail: { open } }));
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center
                 bg-black/80 backdrop-blur-sm overflow-y-auto p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="F15 application"
      onClick={close}
    >
      <div
        className="relative w-full sm:max-w-2xl bg-[#0a0a0a] sm:rounded-2xl border border-white/10
                   min-h-screen sm:min-h-0 sm:my-auto overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-white/[0.06]">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <span className="text-[11px] tracking-[0.2em] font-semibold uppercase text-cf-red">
                Almost done
              </span>
              <span className="text-[11px] text-white/45">Step 1 of 3</span>
            </div>
            <h2 className="text-white text-lg sm:text-xl font-semibold tracking-tight">
              A few details, then a few quick questions.
            </h2>
            <p className="text-white/45 text-xs sm:text-sm mt-1">
              60 seconds. No obligation.
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="shrink-0 w-9 h-9 rounded-full hover:bg-white/5 flex items-center justify-center
                       text-white/55 hover:text-white cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <iframe
          src={APPLICATION_FORM_URL}
          title="F15 application"
          id="f15-application-form"
          style={{ width: "100%", minHeight: "620px", border: "none", display: "block" }}
          className="bg-[#0a0a0a]"
        />
      </div>
    </div>
  );
}
