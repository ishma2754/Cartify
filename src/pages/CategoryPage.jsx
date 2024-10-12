import {
  Filters,
  ProductsContainer,
  PaginationContainer,
  FiltersSkeleton,
  LoadingProductsGrid
} from "../components";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { clearFilters } from "../features/filters/filtersSlice";
import useFilteredData from "../hooks/filter/useFilteredData.js";
import usePagination from "../hooks/pagination/usePagination.js";
import { categorizedBrands, categories } from "../data/categories.js";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const categoryData = categories.find((item) => item.id === category);
  const categoryProducts = categoryData ? categoryData.products : [];

  const brands = categorizedBrands[category] || [];

  const filteredProducts = useFilteredData(
    categoryProducts,
    (state) => state.filters
  );

  const { currentPage, totalPages, currentProducts, paginate } = usePagination(
    filteredProducts,
    10
  );

  useEffect(() => {
    setIsLoading(true);
    dispatch(clearFilters());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <FiltersSkeleton />
          <LoadingProductsGrid count={6} />
        </>
      ) : (
        <>
          <Filters paginate={paginate} brands={brands} />
          <ProductsContainer
            text={categoryData ? categoryData.title : "Category"}
            filteredProducts={filteredProducts}
            products={currentProducts}
            isCategory={false}
          />
          {totalPages > 1 && (
            <PaginationContainer
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          )}
        </>
      )}
    </>
  );
};

export default CategoryPage;
