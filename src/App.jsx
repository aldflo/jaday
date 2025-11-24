import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Menu from "./pages/Menu";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}
