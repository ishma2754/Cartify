import { useEffect, useState } from "react";
import {
  PaginationContainer,
  ProductsContainer,
  Filters,
  Loading,
} from "../components/index.js";

import { AllData } from "../../AllData.jsx";
import useFilteredData from "../hooks/useFilteredData.js";
import usePagination from "../hooks/usePagination.js";

const Products = () => {
  const products = AllData.products;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
        <Loading />
      ) : (
        <>
          <Filters />
          <ProductsContainer products={currentProducts} />
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
