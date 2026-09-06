import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function CartButton() {
  const {
    count,
    setCartOpen,
  } = useCart();

  return (
    <button
      type="button"
      onClick={() => setCartOpen(true)}
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-yellow-400
        text-2xl
        text-black
        shadow-2xl
        transition
        hover:scale-110
        hover:bg-yellow-300
      "
    >
      <FaShoppingCart />

      {count > 0 && (
        <span
          className="
            absolute
            -right-1
            -top-1
            flex
            h-6
            min-w-6
            items-center
            justify-center
            rounded-full
            bg-red-600
            px-1
            text-xs
            font-black
            text-white
          "
        >
          {count}
        </span>
      )}
    </button>
  );
}