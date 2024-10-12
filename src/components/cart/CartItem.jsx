import { formatPrice, generateAmountOptions } from "../../utils";
import { StarRating } from "../index";
import { removeItem, editItem } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {

  const disptach = useDispatch();
  const removeItemFromTheCart = () => {
    disptach(removeItem({ cartID }));
  };

  const handleAmount = (e) => {
    disptach(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  const { cartID, title, finalPrice, image, amount, rating } = cartItem;
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-lg sm:h-32 sm:w-32 object-cover dark:bg-gray-200"
      />

      <div className="sm:ml-16">
        {/**TITLE */}
        <h3 className="capitalize font-medium dark:text-gray-100">{title}</h3>
        <div className="mt-4">
        <StarRating rating={rating} />
        </div>
      </div>
      <div className="sm:ml-12">
        {/* AMOUNT */}
        <div className="max-w-xs">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 dark:text-gray-100"
          >
            Amount
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 sm:text-xs dark:bg-gray-900 dark:text-gray-100 dark:border dark:border-indigo-300"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* REMOVE */}
        <button className="mt-2 text-sm text-blue-500 hover:text-blue-700 dark:text-pink-400"
        onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-medium sm:ml-auto dark:text-gray-100">{formatPrice(finalPrice)}</p>
    </article>
  );
};

export default CartItem;
