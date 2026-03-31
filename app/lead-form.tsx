"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function LeadForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Something went wrong");

      router.push("/book");
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
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
          placeholder="Phone Number"
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
            "Book Your Free Consultation Now"
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
