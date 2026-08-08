export default function MeritAwards() {
  return (
    <section className="px-6 pb-20" style={{ backgroundColor: "#390276" }}>
      <div
        className="mx-auto max-w-6xl rounded-3xl px-8 py-10 text-center"
        style={{ background: "linear-gradient(to right, #3B90FC, #D922F5)" }}
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
          Merit Awards
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-bold text-white sm:text-base">
          The top 20 students of the contest will receive a fully sponsored, one-month
          online crash course on AI, taught by industry expert
        </p>
      </div>
    </section>
  );
}