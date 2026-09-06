import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaShoppingCart,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";

export default function PromoCard({
  id,
  image,
  title,
  price,
}) {
  const { addToCart } = useCart();

  const agregar = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      id,
      name: title,
      price: Number(price),
      image,
    });
  };

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-md
        transition
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <Link to={`/promo/${id}`}>
        <div
          className="
            flex
            h-72
            items-center
            justify-center
            bg-gradient-to-b
            from-gray-50
            to-gray-200
            p-4
          "
        >
          <img
            src={image}
            alt={title}
            className="
              max-h-full
              max-w-full
              object-contain
              transition
              duration-500
              group-hover:scale-105
            "
          />
        </div>
      </Link>

      <div className="p-5 text-center">
        <span
          className="
            rounded-full
            bg-red-100
            px-3
            py-1
            text-xs
            font-bold
            text-red-600
          "
        >
          🔥 PROMOCIÓN
        </span>

        <h3 className="mt-4 text-2xl font-black">
          {title}
        </h3>

        <p
          className="
            mt-2
            text-2xl
            font-black
            text-red-600
          "
        >
          ${price}
          <span className="text-sm text-gray-500">
            {" "}+ envío
          </span>
        </p>

        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <Link
            to={`/promo/${id}`}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-gray-100
              px-5
              py-3
              font-bold
              text-gray-800
              transition
              hover:bg-gray-200
            "
          >
            Ver detalles
            <FaArrowRight />
          </Link>

          <button
            onClick={agregar}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-yellow-400
              text-xl
              text-black
              shadow
              transition
              hover:scale-110
              hover:bg-yellow-300
            "
            title="Agregar al carrito"
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}