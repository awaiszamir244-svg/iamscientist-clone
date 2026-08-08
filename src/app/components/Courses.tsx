import Image from "next/image";
import Link from "next/link";

type Course = {
  title: string;
  duration: string;
  students: string;
  lessons: string;
  image: string;
};

const courses: Course[] = [
  { title: "AI Basic Course", duration: "4 Months", students: "55 Students", lessons: "67 Lessons", image: "/course-1.webp" },
  { title: "AI and Machine Learning", duration: "3 Months", students: "35 Students", lessons: "53 Lessons", image: "/course-2.webp" },
  { title: "Advance Deep Learning", duration: "2 Months", students: "45 Students", lessons: "64 Lessons", image: "/course-3.webp" },
];

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
    </svg>
  );
}

export default function Courses() {
  return (
    <section style={{ backgroundColor: "#1E0243" }} className="px-6 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <h2
          className="text-3xl italic text-white sm:text-4xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Explore Our Courses
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 to-brand-pink" />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden rounded-2xl border border-white/60 text-left transition-transform hover:-translate-y-1"
              style={{ backgroundColor: "#1C0B53" }}
            >
              <div className="relative h-48 w-full">
                <Image src={course.image} alt={course.title} fill className="object-cover" />
              </div>
              <div className="p-6 pb-8">
  <h3 className="text-lg font-bold text-white">{"\u25CF"} {course.title}</h3>
  <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-300"> 
                  <span className="flex items-center gap-1">
                    <ClockIcon /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <PersonIcon /> {course.students}
                  </span>
                  <span className="flex items-center gap-1">
                    <PlayIcon /> {course.lessons}
                  </span>
                </div>
                <Link
                  href="/select-course"
                  className="mt-6 block rounded-full px-6 py-2 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: "linear-gradient(to right, #3B90FC, #D922F5)" }}
                >
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      <Link
  href="/courses"
  className="mt-10 inline-block rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
  style={{ background: "linear-gradient(to right, #3B90FC, #D922F5)" }}
>
  Explore More
</Link>
      </div>
    </section>
  );
}