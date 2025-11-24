import Navbar from "../components/Navbar";
import Carrusel from "../components/Carrusel";
import J1 from "../assets/J1.jpg";
import promo1 from "../assets/promo1.jpg";
import j2 from "../assets/j2.jpg";
import j3 from "../assets/j3.jpg";
import j5 from "../assets/j5.jpg";
import j6 from "../assets/j6.jpg";
import j7 from "../assets/j7.jpg";
import j4 from "../assets/j4.jpg";
 const promoImages = [J1, promo1,j2,j3,j4,j5,j6,j7];
export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="pt-28 px-4 pb-10 max-w-3xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white p-8 rounded-3xl shadow-xl mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#333] text-center">
            🍗 Listas para freír
          </h2>

          <ul className="list-disc ml-6 text-lg space-y-1">
            <li><b>Milanesa:</b> $160.00/kg + envío</li>
            <li><b>Rellena:</b> $170.00/kg + envío</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-3xl shadow-xl mb-8">
          <h2 className="text-3xl font-bold mb-3 text-[#333] text-center">
            🍽 Listas para disfrutar 🤤
          </h2>

          <p className="text-sm text-gray-600 mb-2 text-center">
            Incluyen 4 complementos 🥗🍚
          </p>

          <ul className="list-disc ml-6 text-lg space-y-1">
            <li><b>Milanesa frita:</b> $260.00/kg + envío</li>
            <li><b>Rellena frita:</b> $270.00/kg + envío</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold mb-3 text-[#333] text-center">
            📦 Más opciones irresistibles
          </h2>

          <p className="text-sm text-gray-600 mb-2 text-center">
            (Por Kg o ½ Kg) — Hasta agotar existencia
          </p>

          <ul className="list-disc ml-6 text-lg space-y-1">
            <li>
              <b>Filete de pechuga</b> (Marinada, Adobada o Extra-chile): $160.00/kg + envío
            </li>
            <li><b>Fajitas de pollo:</b> $160.00/kg + envío</li>
            <li><b>Carne molida</b> (para albóndigas o hamburguesa): $160.00/kg + envío</li>
            <li><b>Alitas</b> (Marinadas o Enchiladas): $120.00/kg + envío</li>
          </ul>
        </div>
          {/* Carrusel */}
              <section className="mt-16 px-6">
                <h2 className="text-3xl font-bold mb-6 text-center">Galería de Productos</h2>
                <Carrusel items={promoImages} />
              </section>
        

      </div>
    </div>
  );
}
