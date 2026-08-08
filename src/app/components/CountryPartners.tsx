import Image from "next/image";

const logos = [
  "/partner-1.webp",
  "/partner-2.webp",
  "/partner-3.webp",
  "/partner-4.webp",
  "/partner-5.webp",
  "/partner-6.webp",
  "/partner-7.webp",
  "/partner-8.webp",
];

export default function CountryPartners() {
  return (
    <section
      className="px-6 py-16"
      style={{ background: "linear-gradient(to right, #23033F, #042884)" }}
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
          Country Partners
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-2"
            >
              <Image
                src={logo}
                alt={`Partner logo ${i + 1}`}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}