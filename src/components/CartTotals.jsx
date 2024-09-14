import { useSelector } from "react-redux";
import { formatPrice } from "../utils/index";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between text-sm border-b border-gray-300 pb-2">
          <span className="font-medium">Subtotal:</span>
          <span>{formatPrice(cartTotal)}</span>
        </div>
        {/* Shipping */}
        <div className="flex justify-between text-sm border-b border-gray-300 pb-2">
          <span className="font-medium">Shipping:</span>
          <span>{formatPrice(shipping)}</span>
        </div>
        {/* Tax */}
        <div className="flex justify-between text-sm border-b border-gray-300 pb-2">
          <span className="font-medium">Tax:</span>
          <span>{formatPrice(tax)}</span>
        </div>
        {/* Order Total */}
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span>{formatPrice(orderTotal)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
