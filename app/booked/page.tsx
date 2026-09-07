import Image from "next/image";
import { AppointmentDetails } from "./appointment-details";

export const metadata = {
  title: "F15 Training CENTR | Your consultation is booked",
  description: "Your private F15 consultation is confirmed.",
};

/**
 * Post-booking confirmation.
 *
 * GHL passes the booked slot through as query parameters when the calendar is
 * configured to redirect here, so the screen can show the real day, date and
 * time. If those parameters are missing it degrades to a clean confirmation
 * without inventing a time.
 */
export default function BookedPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <nav className="bg-black/90 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-center">
          <Image
            src="/images/f15-logo.svg"
            alt="F15 Training CENTR"
            width={1402}
            height={559}
            className="h-8 sm:h-10 w-auto"
            unoptimized
            priority
          />
        </div>
      </nav>

      <section className="flex-1 flex items-center justify-center px-5 sm:px-6 py-14 sm:py-20 bg-[#040404] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cf-red/[0.07] rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-xl w-full mx-auto relative z-10 text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.15] mb-8 sm:mb-10">
            YOUR CONSULTATION IS BOOKED{" "}
            <span className="text-green-400" aria-hidden="true">
              &#10003;
            </span>
          </h1>

          <AppointmentDetails />

          <div className="mt-9 sm:mt-11 pt-8 sm:pt-10 border-t border-white/[0.08]">
            <p className="text-cf-red text-xs sm:text-sm font-bold tracking-[0.22em] uppercase mb-4">
              One quick step
            </p>
            <p className="text-[#c4c4c4] text-base sm:text-lg leading-relaxed">
              We&apos;ve just sent you a WhatsApp message with your appointment details. Please reply{" "}
              <span className="text-white font-bold">CONFIRMED</span> so we know you&apos;ve received
              everything and can keep your consultation reserved.
            </p>

            <a
              href="https://wa.me/35699791664"
              className="cta-glow inline-flex items-center justify-center gap-2 mt-7 bg-cf-red hover:bg-cf-red-dark
                         text-white font-bold px-8 sm:px-10 py-4 rounded-full transition-all duration-300
                         text-sm tracking-[0.08em] uppercase hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Open WhatsApp
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-5 px-4 sm:px-6 bg-black border-t border-white/[0.05]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white/30 text-[10px] sm:text-xs tracking-wide">
            F15 Training CENTR · 58 Triq L-Universita, Msida · +356 9979 1664
          </p>
        </div>
      </footer>
    </div>
  );
}
