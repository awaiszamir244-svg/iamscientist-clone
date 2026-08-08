import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-blue px-6 py-14">
      {/* decorative circles */}
      <div className="absolute left-6 top-6 h-10 w-10 rounded-full bg-blue-400/60" />
      <div className="absolute bottom-6 left-10 h-4 w-4 rounded-full bg-green-400" />
      <div className="absolute right-10 top-10 h-4 w-4 rounded-full bg-green-400" />
      <div className="absolute bottom-8 right-6 h-10 w-10 rounded-full bg-brand-pink/60" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Test Your Limits and Rise to the Top
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-gray-200">
          Start your journey with us and take part in our exciting competitions.
          Don&apos;t miss this chance to challenge yourself
        </p>
        <Link
          href="/auth/signup"
          className="mt-6 inline-block rounded-full bg-brand-pink px-8 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}   