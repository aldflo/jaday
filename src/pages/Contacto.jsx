import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaRoute,
  FaEnvelope,
  FaTruck,
} from "react-icons/fa";

export default function Contacto() {
  const MAP_DIRECTIONS =
    "https://maps.app.goo.gl/tSCDCG8ghj1Pi4RP6";

  const WHATSAPP =
    "https://wa.me/529811309055?text=Hola,%20quiero%20información%20sobre%20JadayPechugas";

  /*
    IMPORTANTE:
    Sustituye esta URL por el código EMBED real de Google Maps.

    Google Maps:
    Compartir > Insertar un mapa > Copiar HTML

    Del iframe copias únicamente el valor de src=""
  */
  const MAP_EMBED =
    "https://www.google.com/maps?q=Campeche,Mexico&output=embed";

  const cards = [
    {
      icono: <FaMapMarkerAlt />,
      titulo: "Dirección",
      contenido:
        "Calle Solidaridad #2 (Bacalar), esquina con Nance, Colonial Campeche",
      color: "bg-red-600",
    },
    {
      icono: <FaPhoneAlt />,
      titulo: "Teléfono",
      contenido: "+52 981 130 9055",
      color: "bg-green-500",
    },
    {
      icono: <FaClock />,
      titulo: "Horario",
      contenido: "Lunes a Miércoles · 8:30 AM - 4:00 PM",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffaf5] text-gray-900">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-red-950
          via-red-800
          to-orange-700
          px-5
          py-20
          text-white
        "
      >
        {/* Decoraciones */}
        <div
          className="
            absolute
            -left-20
            -top-20
            h-72
            w-72
            rounded-full
            bg-orange-400/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-24
            -right-24
            h-96
            w-96
            rounded-full
            bg-red-300/20
            blur-3xl
          "
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            relative
            z-10
            mx-auto
            max-w-4xl
            text-center
          "
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-4
              py-2
              text-sm
              font-bold
              backdrop-blur
            "
          >
            <FaWhatsapp className="text-green-400" />
            Estamos para atenderte
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-black
              md:text-6xl
            "
          >
            Contáctanos
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-relaxed
              text-red-100
              md:text-xl
            "
          >
            ¿Tienes dudas, quieres hacer un pedido o consultar
            disponibilidad? Escríbenos y con gusto te atendemos.
          </p>

          <div
            className="
              mt-8
              flex
              flex-col
              justify-center
              gap-4
              sm:flex-row
            "
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-green-500
                px-7
                py-4
                font-bold
                text-white
                shadow-xl
                transition
                hover:scale-105
                hover:bg-green-600
              "
            >
              <FaWhatsapp className="text-xl" />
              Escribir por WhatsApp
            </a>

            <a
              href={MAP_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-yellow-400
                px-7
                py-4
                font-bold
                text-black
                shadow-xl
                transition
                hover:scale-105
                hover:bg-yellow-300
              "
            >
              <FaRoute />
              Cómo llegar
            </a>
          </div>
        </motion.div>
      </section>

      {/* INFORMACIÓN */}
      <main className="mx-auto max-w-7xl px-5 py-16">
        <section>
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
              INFORMACIÓN
            </span>

            <h2
              className="
                mt-4
                text-3xl
                font-black
                md:text-4xl
              "
            >
              Encuentra JadayPechugas
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-xl
                text-gray-500
              "
            >
              Consulta nuestra ubicación, teléfono y horario
              de atención.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              mt-12
              grid
              grid-cols-1
              gap-6
              md:grid-cols-3
            "
          >
            {cards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="
                  rounded-3xl
                  border
                  border-gray-100
                  bg-white
                  p-7
                  text-center
                  shadow-md
                  transition
                  hover:shadow-xl
                "
              >
                <div
                  className={`
                    ${item.color}
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    text-2xl
                    text-white
                    shadow-lg
                  `}
                >
                  {item.icono}
                </div>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-black
                  "
                >
                  {item.titulo}
                </h3>

                <p
                  className="
                    mt-3
                    leading-relaxed
                    text-gray-500
                  "
                >
                  {item.contenido}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MAPA */}
        <section
          className="
            mt-20
            grid
            grid-cols-1
            gap-10
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* Información lateral */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              flex
              flex-col
              justify-center
              rounded-[32px]
              bg-gray-950
              p-8
              text-white
              md:p-10
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-red-600
                text-2xl
              "
            >
              <FaMapMarkerAlt />
            </div>

            <h2
              className="
                mt-6
                text-3xl
                font-black
              "
            >
              Estamos en Campeche
            </h2>

            <p
              className="
                mt-4
                leading-relaxed
                text-gray-400
              "
            >
              Calle Solidaridad #2 (Bacalar), esquina con Nance,
              Colonial Campeche.
            </p>

            <a
              href={MAP_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-yellow-400
                px-6
                py-3
                font-bold
                text-black
                transition
                hover:scale-105
                hover:bg-yellow-300
              "
            >
              <FaRoute />
              Abrir en Google Maps
            </a>

            <div
              className="
                mt-8
                border-t
                border-white/10
                pt-6
              "
            >
              <div className="flex items-center gap-3">
                <FaTruck className="text-orange-400" />

                <div>
                  <p className="font-bold">
                    Servicio de entrega
                  </p>

                  <p className="text-sm text-gray-400">
                    Consulta zona y costo de envío.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              overflow-hidden
              rounded-[32px]
              border
              border-gray-100
              bg-white
              p-3
              shadow-xl
            "
          >
            <iframe
              title="Ubicación de JadayPechugas"
              src={MAP_EMBED}
              className="
                h-[500px]
                w-full
                rounded-[24px]
                border-0
              "
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </section>

        {/* CONTACTO DIRECTO */}
        <section
          className="
            mt-20
            rounded-[35px]
            bg-gradient-to-r
            from-red-700
            to-orange-600
            px-6
            py-12
            text-center
            text-white
            shadow-xl
            md:px-12
          "
        >
          <FaWhatsapp
            className="
              mx-auto
              text-5xl
              text-green-300
            "
          />

          <h2
            className="
              mt-5
              text-3xl
              font-black
              md:text-4xl
            "
          >
            ¿Quieres hacer un pedido?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-red-100
            "
          >
            Escríbenos directamente por WhatsApp y te ayudamos
            con productos, promociones, disponibilidad y envío.
          </p>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-7
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-green-500
              px-8
              py-4
              text-lg
              font-bold
              text-white
              shadow-xl
              transition
              hover:scale-105
              hover:bg-green-600
            "
          >
            <FaWhatsapp className="text-xl" />
            Hablar con nosotros
          </a>
        </section>
      </main>

      {/* WHATSAPP FLOTANTE */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="
          fixed
          bottom-6
          left-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-green-500
          text-2xl
          text-white
          shadow-2xl
          transition
          hover:scale-110
          hover:bg-green-600
        "
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}