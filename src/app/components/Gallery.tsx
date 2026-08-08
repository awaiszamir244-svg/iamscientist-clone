export default function Gallery() {
  const images = [
    "/gallery-1.webp",
    "/gallery-2.webp",
    "/gallery-3.webp",
    "/gallery-4.webp",
    "/gallery-5.webp",
  ];

  return (
    <section className="grid grid-cols-2 sm:grid-cols-5">
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={i} src={src} alt={`Gallery photo ${i + 1}`} className="h-48 w-full object-cover sm:h-64" />
      ))}
    </section>
  );
}