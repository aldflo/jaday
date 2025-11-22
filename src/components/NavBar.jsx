export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black">JadayPromo</h1>

      <div className="flex gap-6 text-gray-700 font-semibold">
        <a href="/" className="hover:text-black transition">Inicio</a>
        <a href="#promos" className="hover:text-black transition">Promos</a>
        <a href="#contacto" className="hover:text-black transition">Contacto</a>
      </div>
    </nav>
  );
}
