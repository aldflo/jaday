import { useState } from "react";

import {
  FaUser,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUniversity,
  FaCreditCard,
  FaLocationArrow,
  FaShoppingBag,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, total, clearCart } = useCart();

  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    referencia: "",
    ubicacion: "",
    pago: "efectivo",
  });

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const obtenerUbicacion = () => {
    if (!navigator.geolocation) {
      alert("Tu dispositivo no permite obtener ubicación.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const link = `https://www.google.com/maps?q=${lat},${lng}`;

        setForm((current) => ({
          ...current,
          ubicacion: link,
        }));
      },
      () => {
        alert("No fue posible obtener tu ubicación.");
      }
    );
  };

  const confirmar = () => {
    if (cart.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    if (!form.nombre || !form.telefono || !form.direccion) {
      alert("Completa nombre, teléfono y dirección.");
      return;
    }

    const productosTexto = cart
      .map(
        (item) =>
          `• ${item.quantity} x ${item.name} - $${
            item.quantity * item.price
          }`
      )
      .join("\n");

    const metodoPago =
      form.pago === "efectivo"
        ? "Efectivo"
        : form.pago === "transferencia"
        ? "Transferencia"
        : "Tarjeta";

    const mensaje = `
🍗 *NUEVO PEDIDO JADAYPECHUGAS*

${productosTexto}

💰 *Subtotal:* $${total}

👤 *DATOS DEL CLIENTE*
Nombre: ${form.nombre}
Teléfono: ${form.telefono}

📍 *Dirección:*
${form.direccion}

🏠 *Referencias:*
${form.referencia || "Sin referencias"}

🗺 *Ubicación:*
${form.ubicacion || "No compartida"}

💳 *Forma de pago:*
${metodoPago}

Gracias.
    `.trim();

    const url = `https://wa.me/529811309055?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank");

    // Si quieres vaciar el carrito inmediatamente,
    // descomenta esta línea:
    // clearCart();
  };

  return (
    <div className="min-h-screen bg-[#fffaf5]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 py-14">
        <div className="text-center">
          <span
            className="
              rounded-full
              bg-red-100
              px-4
              py-2
              text-sm
              font-bold
              text-red-600
            "
          >
            FINALIZAR COMPRA
          </span>

          <h1 className="mt-4 text-4xl font-black">
            Completa tu pedido
          </h1>

          <p className="mt-2 text-gray-500">
            Ingresa tus datos de entrega y forma de pago.
          </p>
        </div>

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[1.3fr_0.7fr]
          "
        >
          {/* FORMULARIO */}
          <div
            className="
              rounded-3xl
              bg-white
              p-7
              shadow-xl
            "
          >
            <h2 className="text-2xl font-black">
              Datos de entrega
            </h2>

            <div className="mt-6 space-y-5">
              {/* NOMBRE */}
              <div>
                <label className="font-bold">
                  Nombre
                </label>

                <div className="relative mt-2">
                  <FaUser
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={update}
                    placeholder="Tu nombre"
                    className="
                      w-full
                      rounded-xl
                      border
                      py-3
                      pl-11
                      pr-4
                      outline-none
                      focus:border-red-500
                    "
                  />
                </div>
              </div>

              {/* TELÉFONO */}
              <div>
                <label className="font-bold">
                  Teléfono
                </label>

                <div className="relative mt-2">
                  <FaPhoneAlt
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    name="telefono"
                    value={form.telefono}
                    onChange={update}
                    placeholder="981..."
                    className="
                      w-full
                      rounded-xl
                      border
                      py-3
                      pl-11
                      pr-4
                      outline-none
                      focus:border-red-500
                    "
                  />
                </div>
              </div>

              {/* DIRECCIÓN */}
              <div>
                <label className="font-bold">
                  Dirección
                </label>

                <div className="relative mt-2">
                  <FaMapMarkerAlt
                    className="
                      absolute
                      left-4
                      top-4
                      text-gray-400
                    "
                  />

                  <textarea
                    name="direccion"
                    value={form.direccion}
                    onChange={update}
                    placeholder="Calle, número, colonia..."
                    rows="3"
                    className="
                      w-full
                      rounded-xl
                      border
                      py-3
                      pl-11
                      pr-4
                      outline-none
                      focus:border-red-500
                    "
                  />
                </div>
              </div>

              {/* REFERENCIAS */}
              <div>
                <label className="font-bold">
                  Referencias
                </label>

                <input
                  name="referencia"
                  value={form.referencia}
                  onChange={update}
                  placeholder="Casa azul, portón de madera..."
                  className="
                    mt-2
                    w-full
                    rounded-xl
                    border
                    px-4
                    py-3
                    outline-none
                    focus:border-red-500
                  "
                />
              </div>

              {/* UBICACIÓN */}
              <div>
                <label className="font-bold">
                  Ubicación por mapa
                </label>

                <button
                  type="button"
                  onClick={obtenerUbicacion}
                  className="
                    mt-2
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3
                    font-bold
                    text-white
                    transition
                    hover:bg-blue-700
                  "
                >
                  <FaLocationArrow />
                  Usar mi ubicación actual
                </button>

                {form.ubicacion && (
                  <a
                    href={form.ubicacion}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-3
                      block
                      text-sm
                      font-bold
                      text-blue-600
                    "
                  >
                    📍 Ver ubicación seleccionada
                  </a>
                )}
              </div>
            </div>

            {/* FORMA DE PAGO */}
            <div className="mt-10">
              <h2 className="text-2xl font-black">
                Forma de pago
              </h2>

              <div className="mt-5 grid gap-3">
                {/* EFECTIVO */}
                <label
                  className={`
                    flex
                    cursor-pointer
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    p-4
                    transition
                    ${
                      form.pago === "efectivo"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="pago"
                    value="efectivo"
                    checked={form.pago === "efectivo"}
                    onChange={update}
                  />

                  <FaMoneyBillWave className="text-2xl text-green-600" />

                  <span className="font-bold">
                    Efectivo
                  </span>
                </label>

                {/* TRANSFERENCIA */}
                <label
                  className={`
                    flex
                    cursor-pointer
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    p-4
                    transition
                    ${
                      form.pago === "transferencia"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="pago"
                    value="transferencia"
                    checked={form.pago === "transferencia"}
                    onChange={update}
                  />

                  <FaUniversity className="text-2xl text-blue-600" />

                  <span className="font-bold">
                    Transferencia
                  </span>
                </label>

                {/* TARJETA */}
                <label
                  className={`
                    flex
                    cursor-pointer
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    p-4
                    transition
                    ${
                      form.pago === "tarjeta"
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-200"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="pago"
                    value="tarjeta"
                    checked={form.pago === "tarjeta"}
                    onChange={update}
                  />

                  <FaCreditCard className="text-2xl text-purple-600" />

                  <div>
                    <p className="font-bold">
                      Tarjeta
                    </p>

                    <p className="text-xs text-gray-500">
                      Pago seguro mediante pasarela
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* RESUMEN */}
          <div>
            <div
              className="
                sticky
                top-24
                rounded-3xl
                bg-gray-950
                p-7
                text-white
                shadow-xl
              "
            >
              <FaShoppingBag className="text-3xl text-yellow-400" />

              <h2 className="mt-4 text-2xl font-black">
                Resumen
              </h2>

              <div className="mt-6 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-gray-400">
                    Tu carrito está vacío.
                  </p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="
                        flex
                        justify-between
                        gap-4
                      "
                    >
                      <span>
                        {item.quantity} × {item.name}
                      </span>

                      <span className="font-bold">
                        ${item.quantity * item.price}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div
                className="
                  mt-6
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg">
                    Subtotal
                  </span>

                  <span className="text-3xl font-black">
                    ${total}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-400">
                  El envío se calcula o confirma posteriormente.
                </p>
              </div>

              <button
                type="button"
                onClick={confirmar}
                disabled={cart.length === 0}
                className="
                  mt-7
                  w-full
                  rounded-full
                  bg-yellow-400
                  px-5
                  py-4
                  font-black
                  text-black
                  transition
                  hover:bg-yellow-300
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                Confirmar pedido
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}