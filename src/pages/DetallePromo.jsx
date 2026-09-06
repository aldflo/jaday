import { useParams, Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaCheckCircle,
  FaShoppingCart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

import { useState } from "react";
import { useCart } from "../context/CartContext";

import j2 from "../assets/j2.jpg";
import j3 from "../assets/j3.jpg";
import j4 from "../assets/j4.jpg";

export default function DetallePromo() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [cantidad, setCantidad] = useState(1);

  const promociones = {
    "promo-1": {
      nombre: "Promo 1",
      precio: 320,
      imagen: j2,
      descripcion:
        "Una promoción ideal para disfrutar en casa con excelente sabor.",
      incluye: [
        "Pechugas preparadas",
        "Complementos",
        "Salsas",
        "Guarnición",
      ],
    },

    "promo-2": {
      nombre: "Promo 2",
      precio: 270,
      imagen: j3,
      descripcion:
        "Una opción práctica y deliciosa para compartir.",
      incluye: [
        "Pechugas empanizadas",
        "Arroz",
        "Complementos",
        "Salsa especial",
      ],
    },

    "promo-3": {
      nombre: "Promo 3",
      precio: 280,
      imagen: j4,
      descripcion:
        "Una de las promociones favoritas de JadayPechugas.",
      incluye: [
        "Pechuga preparada",
        "Ensalada",
        "Arroz",
        "Complementos",
      ],
    },
  };

  const promo = promociones[id];

  if (!promo) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fffaf5]">
        <div className="text-center">
          <h1 className="text-3xl font-black">
            Promoción no encontrada
          </h1>

          <Link
            to="/"
            className="mt-5 inline-block font-bold text-red-600"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const aumentar = () => {
    setCantidad((actual) => actual + 1);
  };

  const disminuir = () => {
    setCantidad((actual) =>
      actual > 1 ? actual - 1 : 1
    );
  };

  const agregar = () => {
    for (let i = 0; i < cantidad; i++) {
      addToCart({
        id,
        name: promo.nombre,
        price: promo.precio,
        image: promo.imagen,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          to="/"
          className="
            inline-flex
            items-center
            gap-2
            font-bold
            text-gray-600
            hover:text-red-600
          "
        >
          <FaArrowLeft />
          Volver
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="rounded-[32px] bg-white p-5 shadow-xl">
            <img
              src={promo.imagen}
              alt={promo.nombre}
              className="
                h-[560px]
                w-full
                rounded-2xl
                object-contain
              "
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600">
              🔥 PROMOCIÓN
            </span>

            <h1 className="mt-5 text-4xl font-black md:text-5xl">
              {promo.nombre}
            </h1>

            <p className="mt-4 text-3xl font-black text-red-600">
              ${promo.precio}
              <span className="text-sm text-gray-500">
                {" "}+ envío
              </span>
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {promo.descripcion}
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-black">
                ¿Qué incluye?
              </h2>

              <div className="mt-4 space-y-3">
                {promo.incluye.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-500" />

                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="font-black">
                Cantidad
              </p>

              <div className="mt-3 flex items-center gap-4">
                <button
                  type="button"
                  onClick={disminuir}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-gray-100
                    transition
                    hover:bg-gray-200
                  "
                >
                  <FaMinus />
                </button>

                <span className="text-2xl font-black">
                  {cantidad}
                </span>

                <button
                  type="button"
                  onClick={aumentar}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-yellow-400
                    transition
                    hover:bg-yellow-300
                  "
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-500">
                  Total
                </span>

                <span className="text-3xl font-black text-red-600">
                  ${promo.precio * cantidad}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={agregar}
              className="
                mt-6
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-yellow-400
                px-7
                py-4
                text-lg
                font-black
                text-black
                shadow-xl
                transition
                hover:scale-[1.02]
                hover:bg-yellow-300
              "
            >
              <FaShoppingCart className="text-xl" />
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}