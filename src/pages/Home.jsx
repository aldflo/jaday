import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import PromoCard from "../components/PromoCard";
import Carrusel from "../components/Carrusel";
import Footer from "../components/Footer";

import promo1 from "../assets/promo1.jpg";
import promo2 from "../assets/promo2.jpg";
import promo3 from "../assets/promo3.jpg";

export default function Home() {
  const promoImages = [promo1, promo2, promo3];

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <Hero />

      {/* Promociones */}
      <section id="promos" className="p-6 mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Promociones destacadas</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PromoCard image={promo1} title="Promo 1" price="299" />
          <PromoCard image={promo2} title="Promo 2" price="499" />
          <PromoCard image={promo3} title="Promo 3" price="199" />
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
