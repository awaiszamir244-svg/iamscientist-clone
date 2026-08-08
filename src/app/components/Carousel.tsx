"use client";

import { useEffect, useRef, useState } from "react";

const students = [
  { name: "HASSAN", image: "/student-1.webp" },
  { name: "TAHIRA", image: "/student-2.webp" },
  { name: "RAHIM", image: "/student-3.webp" },
  { name: "MAIRA", image: "/student-4.webp" },
  { name: "JANNAT", image: "/student-5.webp" },
];

const CARD_WIDTH = 220; // px

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % students.length);
    }, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goPrev = () => setIndex((prev) => (prev - 1 + students.length) % students.length);
  const goNext = () => setIndex((prev) => (prev + 1) % students.length);

  return (
    <section
      className="relative overflow-hidden px-6 py-16"
      style={{ background: "radial-gradient(circle at center, #30066F 0%, #0C0F2B 70%)" }}
    >
      {/* Left arrow */}
      <button
        onClick={goPrev}
        aria-label="Previous"
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 sm:left-8"
      >
        ←
      </button>

      {/* Right arrow */}
      <button
        onClick={goNext}
        aria-label="Next"
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 sm:right-8"
      >
        →
      </button>

      {/* Sliding track */}
      <div className="mx-auto max-w-[1400px] overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(50% - ${CARD_WIDTH / 2}px - ${index * (CARD_WIDTH + 24)}px))`,
          }}
        >
          {students.map((student, i) => {
            const isCenter = i === index;
            return (
              <div
                key={student.name}
                className={`relative shrink-0 overflow-hidden rounded-2xl border-2 transition-all duration-700 ${
                  isCenter ? "border-white opacity-100 scale-105" : "border-white/30 opacity-90"
                }`}
                style={{ width: `${CARD_WIDTH}px` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={student.image}
                  alt={`${student.name} congratulations card`}
                  className="h-auto w-full"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* dots */}
      <div className="relative z-10 mt-8 flex justify-center gap-2">
        {students.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to student ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? "bg-brand-pink" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}