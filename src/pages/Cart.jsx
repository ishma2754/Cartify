import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components/index";

const Cart = () => {
  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default Cart;
