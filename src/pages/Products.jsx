import { useEffect, useState } from "react";
import {
  PaginationContainer,
  ProductsContainer,
  Filters,
  Loading,
  FiltersSkeleton,
  LoadingProductsGrid
} from "../components/index.js";
import { clearFilters } from "../features/filters/filtersSlice";
import { data } from "../data/data.js";
import useFilteredData from "../hooks/filter/useFilteredData.js";
import usePagination from "../hooks/pagination/usePagination.js";
import { categoriesName } from "../data/categories.js";
import { useDispatch} from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const products = data.products;
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    dispatch(clearFilters());
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const filteredProducts = useFilteredData(products, (state) => state.filters);

  const { currentPage, totalPages, currentProducts, paginate } = usePagination(
    filteredProducts,
    10
  );

  return (
    <>
      {isLoading ? (
        <>
          <FiltersSkeleton />
          <LoadingProductsGrid count={6}/>
        </>
      ) : (
        <>
          <Filters paginate={paginate} categories={categoriesName} />
          <ProductsContainer
            products={currentProducts}
            filteredProducts={filteredProducts}
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

export default Products;
