export default function PromoCard({ image, title, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
      
      {/* Contenedor de la imagen */}
      <div className="w-full h-56 bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain p-2"
        />
      </div>

      {/* Texto */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-lg font-semibold text-red-500 mt-1">${price}</p>
      </div>

    </div>
  );
}
