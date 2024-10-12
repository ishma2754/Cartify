import { useSelector } from "react-redux";

const useFilteredData = (data, filterSelector) => {
  const { sort, byBrand, byCategory, byRating, searchQuery, price } =
    useSelector(filterSelector);

  const transformProducts = () => {
    let filteredProducts = [...data];

    if (byBrand) {
      filteredProducts = filteredProducts.filter(
        (product) => product.brand === byBrand
      );
    }

    if (byCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === byCategory
      );
    }


    if (byRating) {
      filteredProducts = filteredProducts.filter(
        (product) => Math.round(product.rating) >= byRating
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sort) {
      filteredProducts.sort((a, b) =>
        sort === "low" ? a.price - b.price : b.price - a.price
      );
    }

    if (price) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= price
      );
    }

    return filteredProducts;
  };

  return transformProducts();
};

export default useFilteredData;
