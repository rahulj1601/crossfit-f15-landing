import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="bg-black sticky top-0 z-50 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
        <a href="https://crossfitf15.com/">
          <Image
            src="/images/f15-logo.png"
            alt="F15 Training Centr Logo"
            width={200}
            height={200}
            className="h-12 sm:h-14 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {[
            { label: "Home", href: "https://crossfitf15.com/" },
            { label: "New to F15?", href: "https://crossfitf15.com/new-to-f15" },
            { label: "Book a class", href: "https://crossfitf15.com/schedule" },
            { label: "Hyrox", href: "https://crossfitf15.com/hyrox-classes-malta" },
            { label: "F15 Experience", href: "https://crossfitf15.com/f15-experience" },
            { label: "Contact", href: "https://crossfitf15.com/contact" },
          ].map((link) => (
            <a key={link.label} href={link.href} className="text-white/60 text-xs font-medium hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="https://momence.com/sign-in?hostId=36119" className="text-white/60 text-xs font-medium hover:text-white transition-colors">
            my account
          </a>
          <a href="https://momence.com/sign-up/member?hostId=36119" className="bg-white text-black text-xs font-semibold px-5 py-2 rounded-full hover:bg-white/90 transition-colors">
            join us
          </a>
        </div>

        <button className="lg:hidden text-white/60 p-2" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
