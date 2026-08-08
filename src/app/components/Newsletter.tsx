export default function Newsletter() {
  return (
    <section style={{ backgroundColor: "#012FA4" }} className="px-6 py-10">
      <div
        className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 rounded-xl p-6 sm:flex-row sm:items-center"
        style={{ background: "linear-gradient(to right, rgba(234,230,238,0.15), rgba(117,88,232,0.4))" }}
      >
        <div>
          <h2 className="text-2xl font-bold text-white">Subscribe to our newsletter.</h2>
          <p className="mt-1 text-sm text-gray-200">Get updates to news and events.</p>
        </div>
        <form className="flex w-full max-w-sm overflow-hidden rounded-full bg-white sm:w-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full flex-1 bg-transparent px-4 py-2 text-sm text-gray-900 outline-none"
          />
          <button
            type="submit"
            className="shrink-0 px-6 py-2 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(to right, #3B90FC, #D922F5)" }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}