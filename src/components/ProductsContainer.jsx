import { ProductsGrid, ProductsList } from "./index";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

const ProductsContainer = ({products}) => {
  //const {products } = useLoaderData()
  const [layout, setLayout] = useState("grid");
  const setActiveStyles = (pattern) => {
    return `text-xl rounded-lg p-2  ${
      pattern === layout ? "bg-blue-500 dark:bg-pink-400  text-white " : "bg-white text-black"
    }`;
  };
  return (
    <>
      {/**HEADER */}
      <div className="flex flex-row justify-between items-center mt-8 border-b border-gray-300 pb-5 ">
        <h4 className="font-medium text-xl dark:text-gray-100">
          {products.length} product{products.length > 1 && "s"}
        </h4>
        <div className="flex flex-row gap-x-3 ">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-10 text-gray-500">
          <MdCancel className="text-6xl mb-4 dark:bg-gray-100" />
          <h1 className="font-bold text-xl dark:text-gray-100">Sorry, no products found.</h1>
        </div>
        ) : layout === "list" ? (
          <ProductsList products={products}/>
        ) : (
          <ProductsGrid products={products} text="Products" />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
