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



/*
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { formatPrice } from "../utils/index.jsx";

const ProductsGrid = ({ text }) => {
  const { products } = useLoaderData();

  return (
    <div>
      <SectionTitle text={text} />
      <div className="grid grid-col-1   lg:grid-col-1 gap-4 p-9 items-center ">
        {products.map((popularProduct) => {
          const { id, title, image, price, category } = popularProduct;
          const dollarAmount = formatPrice(price);
          return (
            <Link to={`/products/${id}`} key={id}>
              <div className=" flex flex-row p-6 gap-4 shadow-xl items-center">
                <div className=" w-full h-full  bg-gray-200 rounded-lg shadow-xl hover:shadow-xl duration-300">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold">{title}</h1>
                  <p>{category}</p>
                </div>
                <div>
                  <p className="text-gray-700">{dollarAmount}</p>
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

*/
/*
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { formatPrice } from "../utils/index.jsx";

const ProductsGrid = ({ products, text }) => {
 
  return (
    <div>
      <SectionTitle text={text} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-9 items-center">
        {products.map((popularProduct) => {
          const { id, title, image, price } = popularProduct;
          const dollarAmount = formatPrice(price);
          return (
            <Link to={`/products/${id}`} key={id}>
              <div className="flex flex-col p-6 gap-4">
                <div className=" w-full h-full  bg-gray-200 rounded-lg">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h1 className="font-bold">{title}</h1>
                <p className="text-gray-700">{dollarAmount}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsGrid;

*/
