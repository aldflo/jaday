import Navbar from "../components/Navbar";
import Carrusel from "../components/Carrusel";

import J1 from "../assets/J1.jpg";
import promo1 from "../assets/promo1.jpg";
import j2 from "../assets/j2.jpg";
import j3 from "../assets/j3.jpg";
import j4 from "../assets/j4.jpg";
import j5 from "../assets/j5.jpg";
import j6 from "../assets/j6.jpg";
import j7 from "../assets/j7.jpg";

import {
  FaFire,
  FaDrumstickBite,
  FaUtensils,
  FaBoxOpen,
  FaStar,
  FaTruck,
  FaShoppingCart,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

export default function Menu() {
  const { addToCart } = useCart();

  const promoImages = [J1, promo1, j2, j3, j4, j5, j6, j7];

  const productosFreir = [
    {
      id: "milanesa",
      nombre: "Milanesa",
      precio: 160,
      unidad: "kg",
      descripcion: "Lista para freír en casa.",
      destacado: true,
    },
    {
      id: "rellena",
      nombre: "Rellena",
      precio: 170,
      unidad: "kg",
      descripcion: "Preparada y lista para freír.",
      destacado: false,
    },
  ];

  const productosPreparados = [
    {
      id: "milanesa-frita",
      nombre: "Milanesa frita",
      precio: 260,
      unidad: "kg",
      descripcion: "Incluye 4 complementos.",
      destacado: true,
    },
    {
      id: "rellena-frita",
      nombre: "Rellena frita",
      precio: 270,
      unidad: "kg",
      descripcion: "Incluye 4 complementos.",
      destacado: false,
    },
  ];

  const otrosProductos = [
    {
      id: "filete-pechuga",
      nombre: "Filete de pechuga",
      precio: 160,
      unidad: "kg",
      descripcion: "Marinada, adobada o extra-chile.",
    },
    {
      id: "fajitas",
      nombre: "Fajitas de pollo",
      precio: 160,
      unidad: "kg",
      descripcion: "Prácticas y listas para preparar.",
    },
    {
      id: "carne-molida",
      nombre: "Carne molida",
      precio: 160,
      unidad: "kg",
      descripcion: "Ideal para albóndigas o hamburguesa.",
    },
    {
      id: "alitas",
      nombre: "Alitas",
      precio: 120,
      unidad: "kg",
      descripcion: "Marinadas o enchiladas.",
    },
  ];

  const ProductCard = ({ producto }) => {
    const agregar = () => {
      addToCart({
        id: producto.id,
        name: producto.nombre,
        price: producto.precio,
        image: null,
        unit: producto.unidad,
      });
    };

    return (
      <div
        className="
          relative
          rounded-3xl
          border
          border-gray-100
          bg-white
          p-6
          shadow-md
          transition
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        {producto.destacado && (
          <div
            className="
              absolute
              right-4
              top-4
              flex
              items-center
              gap-1
              rounded-full
              bg-red-100
              px-3
              py-1
              text-xs
              font-bold
              text-red-600
            "
          >
            <FaFire />
            Popular
          </div>
        )}

        <h3 className="pr-20 text-2xl font-black text-gray-900">
          {producto.nombre}
        </h3>

        <p className="mt-3 text-gray-500">
          {producto.descripcion}
        </p>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-gray-400">
              Desde
            </p>

            <p className="text-3xl font-black text-red-600">
              ${producto.precio}
              <span className="ml-1 text-sm font-semibold text-gray-500">
                / {producto.unidad}
              </span>
            </p>

            <p className="mt-1 text-xs text-gray-400">
              + envío
            </p>
          </div>

          <button
            type="button"
            onClick={agregar}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-yellow-400
              px-5
              py-3
              font-bold
              text-black
              shadow
              transition
              hover:scale-105
              hover:bg-yellow-300
            "
          >
            <FaShoppingCart />
            Agregar
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] text-gray-900">
      <Navbar />

      <section
        className="
          bg-gradient-to-br
          from-red-950
          via-red-800
          to-orange-700
          px-5
          py-20
          text-center
          text-white
        "
      >
        <div className="mx-auto max-w-4xl">
          <div
            className="
              mx-auto
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white/10
              px-4
              py-2
              text-sm
              font-bold
              backdrop-blur
            "
          >
            <FaDrumstickBite className="text-orange-300" />
            JadayPechugas
          </div>

          <h1 className="mt-5 text-4xl font-black md:text-6xl">
            Nuestro Menú
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-red-100 md:text-xl">
            Elige tus productos favoritos y agrégalos al carrito.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 py-16">
        <section className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-2xl text-white">
              <FaStar />
            </div>

            <div>
              <h3 className="font-black">Calidad</h3>
              <p className="text-sm text-gray-500">
                Productos preparados con cuidado.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-2xl text-white">
              <FaUtensils />
            </div>

            <div>
              <h3 className="font-black">Variedad</h3>
              <p className="text-sm text-gray-500">
                Opciones para preparar o disfrutar.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-2xl text-white">
              <FaTruck />
            </div>

            <div>
              <h3 className="font-black">Envíos</h3>
              <p className="text-sm text-gray-500">
                Consulta disponibilidad y costo.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
              <FaDrumstickBite />
              PARA PREPARAR
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              🍗 Listas para freír
            </h2>

            <p className="mt-2 text-gray-500">
              Llévalas listas y prepáralas en casa.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {productosFreir.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
              />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600">
              <FaUtensils />
              LISTAS PARA COMER
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              🍽 Listas para disfrutar 🤤
            </h2>

            <p className="mt-2 text-gray-500">
              Incluyen 4 complementos 🥗🍚
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {productosPreparados.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
              />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-700">
              <FaBoxOpen />
              MÁS OPCIONES
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              📦 Más opciones irresistibles
            </h2>

            <p className="mt-2 text-gray-500">
              Disponibles por kilogramo o medio kilogramo.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {otrosProductos.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
              />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="mb-8 text-center">
            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600">
              GALERÍA
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Galería de productos
            </h2>
          </div>

          <Carrusel items={promoImages} />
        </section>
      </main>
    </div>
  );
}