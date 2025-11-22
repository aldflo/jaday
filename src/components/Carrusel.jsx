import { useState } from "react";

export default function Carrusel({ items }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <div
        className="flex transition-all duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((item, i) => (
          <img
            key={i}
            src={item}
            className="min-w-full h-64 object-cover rounded-xl shadow-lg"
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ◀
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}

