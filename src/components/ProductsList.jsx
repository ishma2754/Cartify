import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { formatPrice } from "../utils/index.jsx";

const ProductsList = ({ text, products }) => {
 

  return (
    <div>
      <SectionTitle text={text} />
      <div className="p-4 md:p-6 lg:p-9">
        {products.map((popularProduct) => {
          const { id, title, image, price, category } = popularProduct;
          const dollarAmount = formatPrice(price);
          return (
            <Link to={`/products/${id}`} key={id} className="block mb-4">
              <div className="flex items-center gap-6 p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-900 dark:border dark:border-gray-100 dark:shadow-sm dark:shadow-gray-100">
                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-lg font-semibold dark:text-gray-100 mb-4">{title.slice(0, 20)}</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-100 capitalize font-medium">{category}</p>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{dollarAmount}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;


