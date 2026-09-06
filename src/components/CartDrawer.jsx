import {
  FaMinus,
  FaPlus,
  FaTrash,
  FaTimes,
  FaShoppingBag,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const navigate = useNavigate();

  const {
    cart,
    total,
    cartOpen,
    setCartOpen,
    increase,
    decrease,
    removeFromCart,
  } = useCart();

  if (!cartOpen) return null;

  const goCheckout = () => {
    setCartOpen(false);
    navigate("/checkout");
  };

  return (
    <>
      {/* Fondo oscuro */}
      <div
        onClick={() => setCartOpen(false)}
        className="
          fixed
          inset-0
          z-[90]
          bg-black/50
          backdrop-blur-sm
        "
      />

      {/* Panel */}
      <aside
        className="
          fixed
          right-0
          top-0
          z-[100]
          flex
          h-full
          w-full
          max-w-md
          flex-col
          bg-white
          shadow-2xl
        "
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            p-5
          "
        >
          <div className="flex items-center gap-3">
            <FaShoppingBag className="text-red-600" />

            <h2 className="text-2xl font-black">
              Tu pedido
            </h2>
          </div>

          <button
            onClick={() => setCartOpen(false)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-gray-100
              hover:bg-gray-200
            "
          >
            <FaTimes />
          </button>
        </div>

        {/* Productos */}
        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="py-20 text-center">
              <FaShoppingBag
                className="
                  mx-auto
                  text-5xl
                  text-gray-200
                "
              />

              <h3 className="mt-5 text-xl font-black">
                Tu carrito está vacío
              </h3>

              <p className="mt-2 text-gray-500">
                Agrega algún producto para comenzar.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="
                    flex
                    gap-4
                    rounded-2xl
                    border
                    p-3
                  "
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-24
                        w-24
                        rounded-xl
                        object-contain
                        bg-gray-100
                      "
                    />
                  )}

                  <div className="flex-1">
                    <div
                      className="
                        flex
                        justify-between
                        gap-2
                      "
                    >
                      <div>
                        <h3 className="font-black">
                          {item.name}
                        </h3>

                        <p className="font-bold text-red-600">
                          ${item.price}
                        </p>
                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="
                          text-gray-400
                          hover:text-red-600
                        "
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <button
                        onClick={() => decrease(item.id)}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-gray-100
                        "
                      >
                        <FaMinus />
                      </button>

                      <span className="font-black">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increase(item.id)}
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-yellow-400
                        "
                      >
                        <FaPlus />
                      </button>

                      <span className="ml-auto font-black">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Total */}
        {cart.length > 0 && (
          <div
            className="
              border-t
              bg-gray-50
              p-5
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                text-xl
              "
            >
              <span className="font-bold">
                Subtotal
              </span>

              <span className="text-2xl font-black">
                ${total}
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              El costo de envío se confirma al finalizar.
            </p>

            <button
              onClick={goCheckout}
              className="
                mt-5
                w-full
                rounded-full
                bg-red-600
                px-6
                py-4
                text-lg
                font-black
                text-white
                transition
                hover:bg-red-700
              "
            >
              Continuar pedido
            </button>
          </div>
        )}
      </aside>
    </>
  );
}