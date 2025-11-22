export default function PromoCard({ image, title, price }) {
  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer">
      <img src={image} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-purple-600 font-semibold mt-2 text-xl">${price}</p>
      </div>
    </div>
  );
}

