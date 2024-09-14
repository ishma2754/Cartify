import {
  Filters,
  ProductsContainer,
  PaginationContainer,
  Loading,
} from "../components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../../categories";
import useFilteredData from "../hooks/useFilteredData";
const CategoryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();
  const categoryData = categories.find((item) => item.id === category);
  const categoryProducts = categoryData ? categoryData.products : [];
  const filteredProducts = useFilteredData(
    categoryProducts,
    (state) => state.filters
  );

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
        <>
          <Filters />
          <ProductsContainer
            text={categoryData ? categoryData.title : "Category"}
            products={filteredProducts}
            isCategory={false}
          />
          <PaginationContainer />
        </>
      )}
    </>
  );
};

export default CategoryPage;
