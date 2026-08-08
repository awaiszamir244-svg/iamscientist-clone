import Image from "next/image";
import Link from "next/link";

const generalLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Competitions", href: "/contest" },
  { label: "Careers", href: "/careers", badge: "UPCOMING" },
  { label: "Affiliate Program", href: "/affiliate" },
];

const importantLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Free Tools", href: "/ai-tools" },
  { label: "Verify Certificate", href: "/verify-certificate" },
];

export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-12" style={{ backgroundColor: "#0D1A6C" }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <Image src="/logo.webp" alt="IamScientist logo" width={130} height={36} />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-300">
              We offer exciting contests, top courses and hands-on challenges.
              It&apos;s a place where students can learn, compete and grow together.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-white">General</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {generalLinks.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <Link href={link.href} className="hover:text-white">{link.label}</Link>
                  {link.badge && (
                    <span className="rounded bg-sky-500 px-2 py-0.5 text-[10px] font-bold text-white">
                      {link.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-white">Important Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-white">Contacts</h3>
            <p className="text-sm text-gray-300">
              167-169 Great Portland Street, 5th Floor, London, England, W1W 5PF
            </p>
            <p className="mt-3 text-sm text-gray-300">+923310001900</p>
            <a href="mailto:info@iamscientist.ai" className="mt-1 block text-sm text-brand-pink hover:underline">
              info@iamscientist.ai
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 sm:flex-row">
          <p className="text-sm text-gray-300">Copyright © 2026, I am Scientist</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-900 transition-opacity hover:opacity-80">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94Z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-900 transition-opacity hover:opacity-80">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.16 8.75h3.72V21H3.16V8.75Zm6.4 0h3.57v1.68h.05c.5-.94 1.72-1.94 3.55-1.94 3.8 0 4.5 2.5 4.5 5.76V21h-3.72v-5.88c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21H9.56V8.75Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-blue-900 transition-opacity hover:opacity-80">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.28 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM17.4 4.6a1.17 1.17 0 1 0 0 2.34 1.17 1.17 0 0 0 0-2.34Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}