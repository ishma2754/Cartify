import { Link} from "react-router-dom";
import SectionTitle from "./SectionTitle";
import {StarRating} from "./index"
import { formatPrice } from "../utils/index.jsx";

const ProductsGrid = ({ text, products, isCategory }) => {
  
  return (
    <div>
      <SectionTitle text={text} />
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 p-9 items-center ">
        {products.map((popularProduct) => {
          const { id, title, image, price, rating} = popularProduct;
          const dollarAmount = formatPrice(price);
          const linkTo = isCategory ? `/${id}` : `/products/${id}`
          return (
            <Link to={linkTo} key={id}>
              <div className=" flex flex-col p-6 gap-4 shadow-xl">
                <div className=" w-full h-40  bg-gray-200 rounded-lg">
                  <img
                    src={image}
                    alt={title}
                    className="object-fit w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h1 className="font-bold capitalize">{title.slice(0, 15)}</h1>
                {price && <p className="text-gray-700">{dollarAmount}</p> }
               {isCategory ? "" :<StarRating rating={rating}/> } 
                
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsGrid;

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
