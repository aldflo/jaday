import { FaFire, FaArrowRight } from "react-icons/fa";
import J1 from "../assets/J1.jpg";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-red-950
        via-red-800
        to-orange-700
        text-white
      "
    >
      {/* Decoraciones */}
      <div
        className="
          absolute
          -left-20
          -top-20
          h-72
          w-72
          rounded-full
          bg-orange-400/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -bottom-24
          -right-24
          h-96
          w-96
          rounded-full
          bg-red-300/20
          blur-3xl
        "
      />

      {/* Contenido */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[78vh]
          max-w-7xl
          grid-cols-1
          items-center
          gap-12
          px-6
          py-14
          lg:grid-cols-2
          lg:px-8
        "
      >
        {/* LADO IZQUIERDO */}
        <div>
          {/* Etiqueta superior */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2
              text-sm
              font-bold
              backdrop-blur
            "
          >
            <FaFire className="text-orange-300" />

            Promociones especiales todos los días
          </div>

          {/* Título */}
          <h1
            className="
              max-w-2xl
              text-4xl
              font-black
              leading-tight
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            El sabor que se antoja está en{" "}
            <span className="text-orange-300">
              JadayPechugas
            </span>
          </h1>

          {/* Descripción */}
          <p
            className="
              mt-6
              max-w-xl
              text-lg
              leading-relaxed
              text-red-100
              md:text-xl
            "
          >
            Descubre nuestras promociones, combos y productos.
            Arma tu pedido directamente desde nuestro menú.
          </p>

          {/* BOTÓN ÚNICO */}
          <div className="mt-8">
            <a
              href="/menu"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-yellow-400
                px-8
                py-4
                text-lg
                font-black
                text-black
                shadow-xl
                transition
                duration-300
                hover:scale-105
                hover:bg-yellow-300
              "
            >
              Ver menú
              <FaArrowRight />
            </a>
          </div>

          {/* Indicadores */}
          <div
            className="
              mt-10
              grid
              max-w-lg
              grid-cols-3
              gap-4
            "
          >
            <div>
              <p className="text-2xl">
                🔥
              </p>

              <p className="mt-1 text-sm text-red-100">
                Promociones
              </p>
            </div>

            <div>
              <p className="text-2xl">
                🍗
              </p>

              <p className="mt-1 text-sm text-red-100">
                Productos
              </p>
            </div>

            <div>
              <p className="text-2xl">
                🚚
              </p>

              <p className="mt-1 text-sm text-red-100">
                Envíos
              </p>
            </div>
          </div>
        </div>

        {/* LADO DERECHO - IMAGEN */}
        <div className="relative">
          {/* Brillo detrás */}
          <div
            className="
              absolute
              -inset-4
              rounded-[40px]
              bg-white/10
              blur-xl
            "
          />

          {/* Imagen */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/20
              bg-black
              p-3
              shadow-2xl
            "
          >
            <img
              src={J1}
              alt="JadayPechugas"
              className="
                h-[500px]
                w-full
                rounded-[24px]
                bg-black
                object-contain
              "
            />
          </div>

          {/* Tarjeta flotante */}
          <div
            className="
              absolute
              -bottom-6
              left-6
              rounded-2xl
              bg-white
              px-5
              py-4
              text-gray-900
              shadow-2xl
            "
          >
            <p
              className="
                text-xs
                font-bold
                text-red-600
              "
            >
              🔥 PROMO DESTACADA
            </p>

            <p
              className="
                mt-1
                text-lg
                font-black
              "
            >
              Pide hoy
            </p>

            <p
              className="
                text-sm
                text-gray-500
              "
            >
              Consulta promociones disponibles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}