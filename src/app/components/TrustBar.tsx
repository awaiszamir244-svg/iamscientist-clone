"use client";

import { useEffect, useState } from "react";

function getTimeLeft(targetDate: Date) {
  const total = targetDate.getTime() - new Date().getTime();
  const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);
  const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
  const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
  const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
  return { days, hours, minutes, seconds };
}

export default function TrustBar() {
  const targetDate = new Date("2026-09-14T00:00:00");
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate));
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const units: { label: string; value: number }[] = [
    { label: "Days", value: timeLeft?.days ?? 0 },
    { label: "Hours", value: timeLeft?.hours ?? 0 },
    { label: "Minutes", value: timeLeft?.minutes ?? 0 },
    { label: "Seconds", value: timeLeft?.seconds ?? 0 },
  ];

  return (
    <section className="flex flex-col items-center justify-between gap-6 bg-purple-700 px-6 py-6 sm:flex-row sm:px-12">
      <p className="text-lg text-white">
        Get ready to show your skills and creativity in our contest
      </p>

      <div className="flex items-center gap-6 rounded-xl bg-gradient-to-r from-blue-500 to-brand-pink px-8 py-4">
        <p className="hidden text-lg font-bold text-white sm:block">Contest Starts In</p>
        <div className="flex gap-4" suppressHydrationWarning>
          {units.map((unit) => (
            <div key={unit.label} className="text-center">
              <p className="text-2xl font-bold text-white">
                {timeLeft ? String(unit.value).padStart(2, "0") : "00"}
              </p>
              <p className="text-xs text-white/80">{unit.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}