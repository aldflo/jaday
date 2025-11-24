export default function Hero() {
  return (
    <section className="h-[90vh] bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

      {/* Círculos animados */}
      <div className="absolute w-72 h-72 bg-purple-600/40 rounded-full blur-3xl animate-pulse -top-16 -left-20"></div>
      <div className="absolute w-72 h-72 bg-blue-600/40 rounded-full blur-3xl animate-pulse -bottom-20 -right-20"></div>

      <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
        ¡Bienvenido a JadayPechugas!
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
        Las mejores promociones, productos y servicios para ti. Descubre ofertas únicas cada día.
      </p>

      <a
        href="https://wa.me/529811309055?text=Hola,%20quiero%20hacer%20un%20pedido"
        target="_blank"
        className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
      >
        Contáctanos por WhatsApp
      </a>

    <a
    href="/menu"
    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition mt-4"
  >
    Ver productos
  </a>
    </section>
  );
}
