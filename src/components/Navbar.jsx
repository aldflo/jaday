import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black">JadayPromo</h1>

      <div className="flex gap-6 text-gray-700 font-semibold">
        <Link to="/" className="hover:text-black">Inicio</Link>
        <Link to="/contacto" className="hover:text-black">Contacto</Link>
        <Link to="/menu" className="hover:text-black">Menú</Link>
      </div>
    </nav>
  );
}
