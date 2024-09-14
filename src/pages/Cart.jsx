import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components/index";
import { Link } from "react-router-dom";

const Cart = () => {
  //temp
  const user = null;
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
          <div className="mt-8 w-full">
          {user? (<Link to="/checkout" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 block text-center  dark:bg-pink-400 dark:hover:bg-pink-300 dark:text-black">
          proceed to checkout
          </Link>) :(
            <Link to="/login" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 block text-center dark:bg-pink-400 dark:hover:bg-pink-300 dark:text-black">
              PLEASE LOGIN
            </Link>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
