

import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle.jsx";
import { StarRating } from "../index";
import { formatPrice } from "../../utils/index.jsx";

const ProductsGrid = ({ text, products, isCategory }) => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen p-4 mt-6">
      <SectionTitle text={text} />
      <div className="pt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          const { id, title, image, price, rating} = product;
          
       
          const linkTo = isCategory ? `/${id}` : `/products/${id}`
          return (
            <Link
              key={id}
              to={linkTo}
              className="w-full bg-gray-100  shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden dark:shadow-sm dark:rounded-lg dark:shadow-gray-100 dark:hover:bg-gray-200"
            >
              <figure className="px-4 pt-4 ">
                <img
                  src={image}
                  alt={title}
                  className="rounded-xl h-64 md:h-48 w-full object-contain"
                />
              </figure>
              <div className="p-4 text-center dark:bg-gray-900 dark:hover:bg-gray-800 ">
                <h2 className="text-lg font-semibold capitalize tracking-wide  text-gray-900 dark:text-gray-100">
                  {title}
                </h2>
                <div className="flex flex-col gap-y-2 items-center">
                {price && <p className="text-gray-700 dark:text-gray-100 font-medium">{formatPrice(price)}</p>}
                {isCategory ? "" :<StarRating rating={rating}/> }
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsGrid;
