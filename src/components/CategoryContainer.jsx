import { categories } from "../../categories";
import { Loading, ProductsGrid } from "./index";
import { useState, useEffect } from "react";

const CategoryContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const categoriesProducts = categories.filter((item) => item.type === "category");

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
          products={categoriesProducts}
          text="Shop By Category"
          isCategory={true}
        />
      )}{" "}
    </>
  );
};

export default CategoryContainer;
