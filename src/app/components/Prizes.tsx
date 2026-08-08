import Image from "next/image";

type Prize = {
  label: string;
  description: string;
  image: string;
  offset?: boolean;
  outlineBox?: boolean;
};

const prizes: Prize[] = [
  { label: "Silver", description: "Honored for excellent effort and creative skills", image: "/medal-silver.webp" },
  { label: "Gold", description: "Awarded for outstanding performance and remarkable innovation", image: "/medal-gold.webp", offset: true, outlineBox: true },
  { label: "Bronze", description: "Honored for hard work and great progress", image: "/medal-bronze.webp" },
];

export default function Prizes() {
  return (
    <section className="px-6 py-20" style={{ backgroundColor: "#390276" }}>
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-white">
          Latest Prizes
        </p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: "Georgia, serif" }}>
          Find Out the Latest Competition Prizes
        </h2>
        <div className="mx-auto mt-4 h-0.5 w-16 bg-white" />

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {prizes.map((prize) => (
            <div
              key={prize.label}
              className={`flex flex-col items-center ${prize.offset ? "sm:-mt-10" : ""}`}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-20 w-20 shrink-0">
                  <Image src={prize.image} alt={`${prize.label} medal`} fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-white">{prize.label}</h3>
              </div>
              {prize.outlineBox ? (
                <p className="mt-6 max-w-xs rounded-lg border border-white/60 px-4 py-3 text-sm font-medium text-white">
                  {prize.description}
                </p>
              ) : (
                <p className="mt-6 max-w-xs rounded-lg bg-brand-pink px-4 py-3 text-sm font-medium text-white">
                  {prize.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}