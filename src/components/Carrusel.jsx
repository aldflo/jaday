import { useState } from "react";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Carrusel({ items = [] }) {
  const [index, setIndex] = useState(0);

  if (!items.length) {
    return (
      <div className="mx-auto flex h-64 w-full max-w-4xl items-center justify-center rounded-3xl bg-gray-100">
        <p className="text-gray-500">
          No hay imágenes disponibles.
        </p>
      </div>
    );
  }

  const next = () => {
    setIndex((i) => (i + 1) % items.length);
  };

  const prev = () => {
    setIndex(
      (i) => (i - 1 + items.length) % items.length
    );
  };

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* CARRUSEL */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-black
          shadow-2xl
        "
      >
        {/* IMÁGENES */}
        <div
          className="
            flex
            transition-transform
            duration-500
            ease-in-out
          "
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="
                flex
                min-w-full
                items-center
                justify-center
                bg-black
                p-4
              "
            >
              <img
                src={item}
                alt={`Producto ${i + 1}`}
                className="
                  h-[420px]
                  w-full
                  object-contain
                  md:h-[500px]
                "
              />
            </div>
          ))}
        </div>

        {/* IZQUIERDA */}
        <button
          type="button"
          onClick={prev}
          aria-label="Imagen anterior"
          className="
            absolute
            left-4
            top-1/2
            z-20
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black/60
            text-white
            shadow-lg
            backdrop-blur
            transition
            hover:scale-110
            hover:bg-red-600
          "
        >
          <FaChevronLeft />
        </button>

        {/* DERECHA */}
        <button
          type="button"
          onClick={next}
          aria-label="Imagen siguiente"
          className="
            absolute
            right-4
            top-1/2
            z-20
            flex
            h-11
            w-11
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-black/60
            text-white
            shadow-lg
            backdrop-blur
            transition
            hover:scale-110
            hover:bg-red-600
          "
        >
          <FaChevronRight />
        </button>

        {/* CONTADOR */}
        <div
          className="
            absolute
            right-4
            top-4
            rounded-full
            bg-black/60
            px-4
            py-2
            text-sm
            font-bold
            text-white
            backdrop-blur
          "
        >
          {index + 1} / {items.length}
        </div>
      </div>

      {/* INDICADORES */}
      <div
        className="
          mt-5
          flex
          flex-wrap
          justify-center
          gap-2
        "
      >
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ir a imagen ${i + 1}`}
            className={`
              h-3
              rounded-full
              transition-all
              duration-300
              ${
                index === i
                  ? "w-8 bg-red-600"
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}