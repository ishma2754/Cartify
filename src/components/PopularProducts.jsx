import { categoriesData } from "../../categoriesData";
import { Loading, ProductsGrid } from "./index";
import { useState, useEffect } from "react";

const PopularProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const categories = categoriesData.filter((item) => item.type === "category");

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ProductsGrid
          products={categories}
          text="Shop By Category"
          isCategory={true}
        />
      )}{" "}
    </>
  );
};

export default PopularProducts;
