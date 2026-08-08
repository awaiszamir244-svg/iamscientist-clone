"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    line1: "AI Based",
    line2: "CONTESTS & AWARDS FOR KIDS",
    tagline: "Inspiring Young Minds with Challenges & Awards",
    image: "/hero-banner.webp",
  },
  {
    line1: "Artificial Intelligence",
    line2: "COURSES FOR KIDS",
    tagline: "From Curious Minds to Future Leaders",
    image: "/hero-banner-2.webp",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section className="bg-brand-purple px-6 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <h1
            className="text-4xl italic text-white sm:text-5xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {slide.line1}
          </h1>
          <span className="mt-2 block w-fit rounded-lg bg-brand-pink px-4 py-2 text-2xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {slide.line2}
          </span>

          <p className="mt-4 inline-block rounded bg-sky-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {slide.tagline}
          </p>

          <p className="mt-6 max-w-md font-bold text-gray-200">
            Spark the curiosity of young minds with fun and challenging contests.
            Perfect for students of all ages, whether competing individually or
            as part of a school team, offering a chance to explore the world of
            technology and unlock your potential.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <Link
              href="/about"
              className="rounded-full bg-brand-pink px-8 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
            >
              Explore Now
            </Link>
            <div>
              <p className="text-3xl font-extrabold text-cyan-400">5000+</p>
              <p className="text-xs text-gray-300">Trusted Schools / Academies</p>
            </div>
          </div>

          {/* dots to show which slide is active */}
          <div className="mt-6 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-brand-pink" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative h-64 sm:h-80 lg:h-96">
          <Image
            src={slide.image}
            alt="Kids exploring AI"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}