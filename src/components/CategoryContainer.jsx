import { CategoriesData } from "../../CategoriesData";
import { Loading, ProductsGrid } from "./index";
import { useState, useEffect } from "react";

const CategoryContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const categories = CategoriesData.filter((item) => item.type === "category");

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

export default CategoryContainer;
