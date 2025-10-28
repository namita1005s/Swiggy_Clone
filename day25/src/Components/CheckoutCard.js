import { IncrementItems, DecrementItems } from "../Stored/CartSlicer";
import { useDispatch } from "react-redux";

export default function CheckOutCard({ card }) {
  const dispatch = useDispatch();

  // Increase quantity
  const handleIncrement = () => {
    dispatch(IncrementItems(card));
  };

  // Decrease quantity
  const handleDecrement = () => {
    dispatch(DecrementItems(card));
  };

  // Calculate price
  const price = card?.defaultPrice
    ? (card.defaultPrice / 100) * card.quantity
    : (card?.price / 100) * card?.quantity;

  return (
    <div className="flex items-center justify-between w-full py-4 border-b border-gray-200 last:border-none">
      {/* Item Name */}
      <p className="text-lg font-medium text-gray-900 truncate w-1/3">
        {card?.name}
      </p>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrement}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 text-red-500 hover:bg-red-100 border border-red-200 transition-all duration-200"
        >
          −
        </button>
        <p className="w-8 text-center font-semibold text-gray-800">
          {card?.quantity}
        </p>
        <button
          onClick={handleIncrement}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-100 border border-green-200 transition-all duration-200"
        >
          +
        </button>
      </div>

      {/* Price */}
      <p className="text-lg font-semibold text-gray-800 min-w-[70px] text-right">
        ₹{price?.toFixed(2)}
      </p>
    </div>
  );
}
