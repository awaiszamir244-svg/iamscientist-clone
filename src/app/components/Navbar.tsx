"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "AI Contests", href: "/contest" },
  { label: "Courses", href: "/courses" },
  { label: "Teacher", href: "/teacher" },
  { label: "AI Techathon", href: "/ai-techathon" },
  { label: "Summer Contest", href: "/qr/code" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-brand-blue">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center rounded-lg border border-white/30 px-0.5 py-1">
          <Image src="/logo.webp" alt="IamScientist logo" width={130} height={36} priority />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-6 text-sm font-semibold text-white lg:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors hover:text-brand-pink ${
                  i === 0 ? "text-purple-300" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/partner-with-us"
            className="rounded-full bg-gradient-to-r from-blue-400 to-brand-pink px-5 py-2 text-xs font-bold text-white"
          >
            Partner with Us
          </Link>
          <Link
            href="/auth/signup"
            className="rounded-full bg-brand-pink px-5 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90"
          >
            Enroll
          </Link>
          <Link
            href="/auth/login"
            className="rounded-full bg-brand-pink px-5 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90"
          >
            Login
          </Link>
        </div>

        {/* Mobile: Enroll/Login stay visible + hamburger button */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/auth/signup"
            className="rounded-full bg-brand-pink px-4 py-1.5 text-xs font-bold text-white"
          >
            Enroll
          </Link>
          <Link
            href="/auth/login"
            className="rounded-full bg-brand-pink px-4 py-1.5 text-xs font-bold text-white"
          >
            Login
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md border border-white/30"
          >
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
            <span className="h-0.5 w-5 bg-white" />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-white/10 bg-brand-blue px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-sm font-semibold text-white transition-colors hover:text-brand-pink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/partner-with-us"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-gradient-to-r from-blue-400 to-brand-pink px-5 py-2 text-center text-xs font-bold text-white"
          >
            Partner with Us
          </Link>
        </div>
      )}
    </header>
  );
}