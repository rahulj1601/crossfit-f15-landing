import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white/60 pt-10 sm:pt-14 pb-6 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <div>
            <Image
              src="/images/f15-logo.png"
              alt="F15 Training Centr Logo"
              width={160}
              height={45}
              className="h-6 w-auto mb-2"
            />
            <p className="text-white/40 text-sm italic">One rep closer, One community stronger</p>
          </div>
          <div className="flex items-center gap-4">
            {[
              { href: "https://www.facebook.com/crossfitf15/", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              { href: "https://www.youtube.com/@crossfitf15malta90", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
              { href: "https://www.instagram.com/crossfitf15/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
            ].map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/[0.06] rounded-full flex items-center justify-center hover:bg-cf-red/20 transition-colors">
                <svg className="w-3.5 h-3.5 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Menu</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "https://crossfitf15.com/" },
                { label: "Schedule", href: "https://crossfitf15.com/schedule" },
                { label: "Free Classes", href: "https://crossfitf15.com/schedule" },
                { label: "New to F15?", href: "https://crossfitf15.com/new-to-f15" },
              ].map((l) => (
                <li key={l.label}><a href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">F15 Experience</h4>
            <ul className="space-y-2.5">
              {["Our Story", "Our Classes", "Our Team", "The Gym", "Our Service"].map((l) => (
                <li key={l}><a href="https://crossfitf15.com/f15-experience" className="text-white/50 text-sm hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Blog", href: "https://crossfitf15.com/blog" },
                { label: "Terms and Conditions", href: "https://crossfitf15.com/terms-and-conditions" },
                { label: "Contact", href: "https://crossfitf15.com/contact" },
                { label: "Privacy Policy", href: "https://crossfitf15.com/privacy-policy" },
              ].map((l) => (
                <li key={l.label}><a href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Open Hours</h4>
            <div className="text-white/50 text-sm space-y-1.5">
              <p>Monday to Friday</p>
              <p className="text-white/70 font-medium">7 am - 9 pm</p>
              <p className="mt-3">Saturday</p>
              <p className="text-white/70 font-medium">10 am - 2 pm</p>
              <p className="mt-3">Sunday</p>
              <p className="text-white/70 font-medium">9 am - 11 am</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 text-center">
          <p className="text-white/30 text-xs">F15 Training Centr &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
