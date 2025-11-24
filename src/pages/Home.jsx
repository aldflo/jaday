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
export default function Home() {
  const promoImages = [J1, promo1];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Hero />

      {/* Promociones */}
      <section id="promos" className="p-6 mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Promociones destacadas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PromoCard image={j2} title="Promo 1" price="320 + envio" />
          <PromoCard image={j3} title="Promo 2" price="270 + envio" />
          <PromoCard image={j4} title="Promo 3" price="280 +envio" />
        </div>
      </section>

      {/* Carrusel */}
      <section className="mt-16 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Galería de Productos</h2>
        <Carrusel items={promoImages} />
      </section>

      <Footer />
    </div>
  );
}
