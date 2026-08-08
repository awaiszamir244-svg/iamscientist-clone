"use client";

import Link from "next/link";

type Announcement = {
  day: string;
  month: string;
  title: string;
  range: string;
};

type TabKey = "general" | "contest" | "course";

const tabColors: Record<TabKey, string> = {
  general: "#3B82F6", // blue
  contest: "#EC1FBD", // pink
  course: "#22D3EE", // cyan
};

const tabData: Record<TabKey, { items: Announcement[]; ctaHref: string }> = {
  general: {
    ctaHref: "/auth/signup",
    items: [
      { day: "01", month: "MAY", title: "Contest Registration", range: "01 May 2025 - 15 Aug 2025" },
      { day: "16", month: "MAY", title: "Course Registration", range: "16 May 2025 - 31 May 2025" },
      { day: "20", month: "MAY", title: "Contest Results", range: "20 May 2025 - 25 May 2025" },
    ],
  },
  contest: {
    ctaHref: "/auth/signup",
    items: [
      { day: "01", month: "MAY", title: "Registration Dates", range: "01 May 2025 - 15 Aug 2025" },
      { day: "20", month: "AUG", title: "Registration Confirmation", range: "01 Aug 2025 - 20 Aug 2025" },
      { day: "27", month: "AUG", title: "Contest Dates", range: "25 Aug 2025 - 27 Aug 2025" },
    ],
  },
  course: {
    ctaHref: "/select-course",
    items: [
      { day: "16", month: "MAY", title: "Registration Dates", range: "16 May 2025 - 31 May 2025" },
      { day: "1", month: "DEC", title: "Registration Confirmation", range: "20 May 2025 - 31 Dec 2024" },
      { day: "01", month: "JUN", title: "Course Starting Dates", range: "1 June 2025 - 30 Aug 2025" },
    ],
  },
};

const tabs: { key: TabKey; label: string }[] = [
  { key: "general", label: "General" },
  { key: "contest", label: "Contest" },
  { key: "course", label: "Course" },
];

function CalendarIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  );
}

export default function Announcements() {
  return (
    <section className="bg-brand-purple px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-pink">
          Schedule
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          The National I am Scientist System
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-300">
          Stay tuned for registration details and get ready to unlock your potential
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tabs.map((tab) => {
            const color = tabColors[tab.key];
            return (
              <div
                key={tab.key}
                className="rounded-2xl border p-6 text-left"
                style={{ borderColor: color }}
              >
                <h3
                  className="mb-4 text-3xl italic"
                  style={{ color, fontFamily: "Georgia, serif" }}
                >
                  {tab.label}
                </h3>
                <div className="mb-6 inline-block rounded-md bg-white px-6 py-2 text-sm font-bold text-gray-900">
                  ANNOUNCEMENTS
                </div>

                <div className="space-y-5">
                  {tabData[tab.key].items.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CalendarIcon color={color} />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <div className="mt-1 flex items-baseline gap-2">
                          <span className="text-lg font-bold text-white">{item.day}</span>
                          <span className="text-xs text-gray-400">{item.month}</span>
                        </div>
                        <p
                          className="mt-1 inline-block rounded px-2 py-0.5 text-xs font-semibold text-white"
                          style={{ backgroundColor: color }}
                        >
                          {item.range}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={tabData[tab.key].ctaHref}
                  className="mt-6 block rounded-lg bg-white py-3 text-center text-sm font-bold text-gray-900 transition-opacity hover:opacity-90"
                >
                  Enroll Now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}