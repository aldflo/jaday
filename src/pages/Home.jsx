import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PromoCard from "../components/PromoCard";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";

import J1 from "../assets/J1.jpg";
import promo1 from "../assets/promo1.jpg";
import j2 from "../assets/j2.jpg";
import j3 from "../assets/j3.jpg";
import j4 from "../assets/j4.jpg";

import {
  FaTruck,
  FaFire,
  FaStar,
  FaClock,
  FaUtensils,
  FaShoppingCart,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useCart();

  const promoImages = [J1, promo1];

  const categorias = [
    {
      nombre: "Promociones",
      icono: <FaFire />,
      descripcion: "Aprovecha nuestras ofertas especiales.",
    },
    {
      nombre: "Productos",
      icono: <FaUtensils />,
      descripcion: "Conoce nuestros productos y combos.",
    },
    {
      nombre: "Entrega",
      icono: <FaTruck />,
      descripcion: "Consulta nuestra zona de entrega.",
    },
  ];

  const agregarFavorito = () => {
    addToCart({
      id: "favorito-jaday",
      name: "Favorito JadayPechugas",
      price: 120,
      image: J1,
    });
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] text-gray-900">
      <Navbar />
      <Hero />

      <section className="relative z-10 -mt-8 px-5">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
          {categorias.map((item, index) => (
            <div
              key={index}
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-red-100
                bg-white
                p-5
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-2xl text-white">
                {item.icono}
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  {item.nombre}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="promos"
        className="mx-auto max-w-7xl px-5 py-20"
      >
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600">
            🔥 OFERTAS DEL MOMENTO
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Promociones destacadas
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Consulta los detalles o agrega directamente al carrito.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <PromoCard
            id="promo-1"
            image={j2}
            title="Promo 1"
            price={320}
          />

          <PromoCard
            id="promo-2"
            image={j3}
            title="Promo 2"
            price={270}
          />

          <PromoCard
            id="promo-3"
            image={j4}
            title="Promo 3"
            price={280}
          />
        </div>
      </section>

      <section className="bg-red-700 py-20 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold">
              <FaFire />
              FAVORITO
            </span>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Lo más pedido de JadayPechugas
            </h2>

            <p className="mt-5 max-w-lg text-lg text-red-100">
              Disfruta nuestros productos favoritos y agrégalos
              directamente a tu pedido.
            </p>

            <button
              type="button"
              onClick={agregarFavorito}
              className="
                mt-7
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-yellow-400
                px-7
                py-4
                font-bold
                text-black
                shadow-xl
                transition
                hover:scale-105
                hover:bg-yellow-300
              "
            >
              <FaShoppingCart className="text-xl" />
              Agregar al carrito
            </button>
          </div>

          <div className="overflow-hidden rounded-[30px] bg-black p-4 shadow-2xl">
            <img
              src={J1}
              alt="JadayPechugas"
              className="h-[500px] w-full object-contain bg-black"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-10 text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
            GALERÍA
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            Conoce nuestros productos
          </h2>
        </div>

        <Carrusel items={promoImages} />
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              ¿Por qué JadayPechugas?
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-[#fff7f3] p-7 text-center">
              <FaFire className="mx-auto text-4xl text-red-600" />

              <h3 className="mt-4 text-xl font-bold">
                Preparado al momento
              </h3>
            </div>

            <div className="rounded-3xl bg-[#fff7f3] p-7 text-center">
              <FaTruck className="mx-auto text-4xl text-red-600" />

              <h3 className="mt-4 text-xl font-bold">
                Entrega disponible
              </h3>
            </div>

            <div className="rounded-3xl bg-[#fff7f3] p-7 text-center">
              <FaStar className="mx-auto text-4xl text-red-600" />

              <h3 className="mt-4 text-xl font-bold">
                Promociones
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[35px] bg-gray-950 p-8 text-white md:flex-row md:p-12">
          <div>
            <div className="flex items-center gap-3 text-orange-400">
              <FaClock />
              <span className="font-bold">
                HORARIOS Y PEDIDOS
              </span>
            </div>

            <h2 className="mt-3 text-3xl font-black">
              ¿Se te antojó?
            </h2>

            <p className="mt-3 text-gray-400">
              Agrega tus productos al carrito y completa tu pedido.
            </p>
          </div>

          <a
            href="/menu"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-yellow-400
              px-7
              py-4
              font-bold
              text-black
              transition
              hover:scale-105
              hover:bg-yellow-300
            "
          >
            Ver menú
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}