import { formatPrice, generateAmountOptions } from "../utils/index.jsx";
import { Link, useParams } from "react-router-dom";
import { AllData } from "../../AllData.jsx";
import { StarRating } from "../components/index.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice.js";

const SingleProduct = () => {
  const [amount, setAmount] = useState(1);
  const { id } = useParams();
  const products = AllData.products;

  const product = products.find((item) => item.id == id);

  if (!product) {
    return <div>No product found</div>;
  }

  const { image, title, description, price, discountPercentage, rating } =
    product;

  const discountAmount = price * (discountPercentage / 100);
  const finalPrice = (price - discountAmount);
  const roundedFinalPrice = parseFloat(finalPrice.toFixed(2));
  const finalPriceAmount = formatPrice(finalPrice)

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id,
    productID: product.id,
    image,
    title,
    finalPrice: roundedFinalPrice,
    rating,
    amount,
  };

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
    console.log(cartProduct.finalPrice);
  };
  return (
    <>
      <div className="flex flex-col mb-4">
        <ul className="flex flex-row gap-5 dark:text-gray-100 font-medium">
          <Link to="/">
            <li>Home</li>
          </Link>
          <span className="dark:text-gray-600">&gt;</span>
          <Link to="/products">
            <li>Products</li>
          </Link>
        </ul>
      </div>

      <div className="flex-1 flex flex-col lg:flex lg:flex-row items-center gap-5">
        <div className="flex-1 dark:bg-gray-200 rounded-lg">
          <img src={image} alt={title} loading="lazy" />
        </div>
        <div className="flex flex-1 flex-col gap-5 items-center">
          <h1 className="font-bold text-xl dark:text-gray-100">{title}</h1>
          <h3 className="text-lg dark:text-gray-100">{description}</h3>
          <p className="text-xl font-semibold dark:text-gray-100">
            Price: <span className="line-through">{formatPrice(price)}</span>{" "}
            {finalPriceAmount}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-100">{`Discount: ${discountPercentage}%`}</p>
          <p className="text-sm text-gray-600">
            {<StarRating rating={rating} />}
          </p>
          <select
            className="border border-gray-300 rounded-md py-2 px-3 text-base bg-white text-gray-900 w-1/2 md:w-1/3 lg:w-1/4 dark:bg-gray-900 dark:text-gray-100 dark:border-xl dark:border-indigo-300"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(10)}
          </select>
          <div className="mt-10">
            <button
              className="bg-gray-500 text-white py-2 px-4 rounded-md text-base font-medium hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-purple-600 dark:hover:bg-purple-400"
              onClick={addToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
