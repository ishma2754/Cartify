import { formatPrice } from "../utils/index.jsx";
import { Link, useParams } from "react-router-dom";
import { allData } from "../../allData.jsx";
import {StarRating} from "../components/index.js"

const SingleProduct = () => {
  const { id } = useParams();
  const products = allData.products;

  const product = products.find((item) => item.id == id);

  if (!product) {
    return <div>No product found</div>;
  }

  const { image, title, description, price, discountPercentage, rating } =
    product;

  const discountAmount = price * (discountPercentage / 100);
  const finalPrice = formatPrice(price - discountAmount);

  return (
    <>
      <div className="flex flex-col ">
        <ul className="flex flex-row gap-5">
          <Link to="/">
            <li>Home</li>
          </Link>
          <span>&gt;</span>
          <Link to="/products">
            <li>Products</li>
          </Link>
        </ul>
      </div>

      <div className="flex-1 flex flex-col lg:flex lg:flex-row items-center gap-5">
        <div className="flex-1">
          <img src={image} alt={title} loading="lazy" />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="font-bold text-xl">{title}</h1>
          <h3 className="text-lg">{description}</h3>
          <p className="text-xl font-semibold">
            Price: <span className="line-through">{formatPrice(price)}</span>{" "}
            {finalPrice}
          </p>
          <p className="text-sm text-gray-600">{`Discount: ${discountPercentage}%`}</p>
          <p className="text-sm text-gray-600">
            {<StarRating rating={rating} />}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
