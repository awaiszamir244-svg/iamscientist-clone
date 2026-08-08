"use client";

import { useState } from "react";

const faqs = [
  { question: "Who can participate in the I am Scientist contests?", answer: "Students of all ages are welcome to participate, either individually or as part of a school team." },
  { question: "What subjects do the contests cover?", answer: "Our contests cover AI, Machine Learning, and Deep Learning topics designed for different skill levels." },
  { question: "How are winners rewarded?", answer: "Winners receive Gold, Silver, or Bronze medals along with certificates recognizing their achievement." },
  { question: "Can schools participate as organizations?", answer: "Yes, schools and academies can register as organizations to enroll their students in our contests." },
  { question: "How can I stay updated on contest dates?", answer: "Check our Announcements section on the homepage or subscribe to our newsletter for the latest updates." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="px-6 py-20"
      style={{ background: "linear-gradient(to right, #1B0331, #0031A8)" }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-16 bg-white" />

        <div className="mt-10 space-y-4 text-left">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-white/40"
                style={{ background: "linear-gradient(to right, rgba(27,3,49,0.6), rgba(0,49,168,0.6))" }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-bold text-white sm:text-base"
                >
                  {faq.question}
                  <span className="ml-4 shrink-0 text-xl">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-4 text-sm text-gray-200">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}