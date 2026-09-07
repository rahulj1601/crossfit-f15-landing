"use client";

import { useEffect, useState } from "react";

type LeadFormProps = {
  source?: string;
  submitText?: string;
  successMessage?: string;
  calendarUrl?: string;
};

export function LeadForm({
  source = "website",
  submitText = "Book Your Free Consultation Now",
  successMessage = "Thanks! We'll be in touch shortly.",
  calendarUrl,
}: LeadFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Load the GHL embed script when calendar is shown so the iframe resizes correctly
  useEffect(() => {
    if (success && calendarUrl) {
      const existing = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (!existing) {
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [success, calendarUrl]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const rawPhone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const cleanedPhone = rawPhone.replace(/[\s\-().]/g, "");

    if (!/^\+?[1-9]\d{6,12}$/.test(cleanedPhone)) {
      setError("Please enter a valid phone number (with country code, e.g. +356 1234 5678).");
      setLoading(false);
      return;
    }

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: cleanedPhone,
      source,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Something went wrong");
      }

      setSuccess(true);
      form.reset();
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Something went wrong. Please try again.";
      setError(msg);
      setLoading(false);
    }
  }

  if (success && calendarUrl) {
    return (
      <div className="-mx-6 sm:-mx-8 -mb-6 sm:-mb-8">
        <div className="px-6 sm:px-8 pb-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-400 text-sm font-semibold">Details saved</span>
          </div>
          <h3 className="text-white font-bold text-xl sm:text-2xl mb-1">Now Pick a Time</h3>
          <p className="text-[#b0b0b0] text-sm">Choose a slot below and we&apos;ll confirm right away.</p>
        </div>
        <div className="bg-[#0a0a0a] rounded-b-2xl">
          <iframe
            src={calendarUrl}
            id="msgsndr-calendar"
            style={{ width: "100%", minHeight: "1700px", border: "none", display: "block" }}
            scrolling="no"
            title="Book your consultation"
          />
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-xl mb-2">You&apos;re in!</h3>
        <p className="text-[#b0b0b0] text-sm sm:text-base">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 w-full max-w-md mx-auto">
      <div>
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base placeholder:text-white/30 focus:outline-none focus:border-cf-red/50 focus:ring-1 focus:ring-cf-red/30 transition-all duration-300"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base placeholder:text-white/30 focus:outline-none focus:border-cf-red/50 focus:ring-1 focus:ring-cf-red/30 transition-all duration-300"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="^\+?[\s\-().0-9]{7,20}$"
          title="Please enter a valid phone number with country code (e.g. +356 1234 5678)"
          placeholder="Phone Number (with country code, e.g. +356…)"
          className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl px-5 py-3.5 sm:py-4 text-white text-sm sm:text-base placeholder:text-white/30 focus:outline-none focus:border-cf-red/50 focus:ring-1 focus:ring-cf-red/30 transition-all duration-300"
        />
      </div>

      {error && (
        <p className="text-red-400 text-xs text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group relative w-full bg-gradient-to-r from-cf-red to-[#e83030] text-white font-bold py-4 sm:py-4.5 rounded-xl transition-all duration-300 text-sm sm:text-base tracking-wider uppercase active:scale-[0.98] hover:scale-[1.02] overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed pulse-glow"
      >
        <span className="relative z-10">
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </span>
          ) : (
            submitText
          )}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </button>

      <p className="text-white/20 text-[10px] sm:text-xs text-center tracking-wide">
        We&apos;ll never spam you. Your info is safe with us.
      </p>
    </form>
  );
}
