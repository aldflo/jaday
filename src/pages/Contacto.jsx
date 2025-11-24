import { motion } from "framer-motion";
import Navbar from "../components/NavBar"; // 👈 IMPORTANTE: igual que en Home.jsx
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Contacto() {
  const MAP_EMBED =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.123456789!2d-90.123456!3d18.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sCalle%20Solidaridad%202!5e0!3m2!1ses!2smx!4v1699999999999";

  const MAP_DIRECTIONS = "https://maps.app.goo.gl/tSCDCG8ghj1Pi4RP6";

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* Contenido */}
      <div className="flex flex-col items-center py-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center"
        >
          Contáctanos
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-6 w-full max-w-3xl"
        >
          {/* Información */}
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            {/* Dirección */}
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-blue-400 text-3xl mb-2" />
              <h3 className="font-semibold">Dirección</h3>
              <p className="text-gray-300 text-center">
                Calle Solidaridad #2 (Bacalar), esquina con Nance, Colonial Campeche
              </p>
            </div>

            {/* Teléfono */}
            <div className="flex flex-col items-center">
              <FaPhoneAlt className="text-green-400 text-3xl mb-2" />
              <h3 className="font-semibold">Teléfono</h3>
              <p className="text-gray-300">+52 9811309055</p>
            </div>

            {/* Horario */}
            <div className="flex flex-col items-center">
              <FaClock className="text-yellow-300 text-3xl mb-2" />
              <h3 className="font-semibold">Horario</h3>
              <p className="text-gray-300 text-center">
                Lunes - Miercoles
                <br />
                8:30 AM - 4:00 PM
              </p>
            </div>
          </div>

          {/* Botón de cómo llegar */}
          <a
            href={MAP_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-4 py-2 rounded-xl bg-coral text-tinta font-semibold hover:opacity-90"
          >
            Cómo llegar
          </a>

          {/* Mapa embebido */}
          <div className="mt-8 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
            <iframe
              className="w-full h-64 md:h-80"
              src={MAP_EMBED}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Redes */}
          <div className="mt-10 flex justify-center gap-10 text-4xl">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://wa.me/529811309055"
              target="_blank"
              className="text-green-500 hover:text-green-400"
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
