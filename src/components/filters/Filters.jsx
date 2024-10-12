import { useState } from "react";
import { FormInput, FormSelect, Ratings, FormRange, Button } from "../index";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByPrice,
  filterByBrand,
  filterByCategory,
  filterByRating,
  filterBySearch,
  filterbyPriceRange,
  clearFilters,
} from "../../features/filters/filtersSlice";

const Filters = ({ paginate, brands, categories }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const [formValues, setFormValues] = useState({
    search: filters.searchQuery,
    brand: filters.byBrand,
    category: filters.filterByCategory,
    sort: filters.sort,
    price: filters.price,
    rating: filters.byRating,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));

    if (name === "search") {
      dispatch(filterBySearch(value));
    } else if (name === "brand") {
      dispatch(filterByBrand(value));
    } else if (name === "category") {
      dispatch(filterByCategory(value));
    } else if (name === "sort") {
      dispatch(sortByPrice(value));
    }

    paginate(1);
  };

  const handlePriceChange = (e) => {
    const newValue = e.target.value;
    setFormValues((prevValues) => ({ ...prevValues, price: newValue }));
    dispatch(filterbyPriceRange(newValue));
    paginate(1);
  };

  const handleRatingChange = (rating) => {
    const roundedRating = Math.round(rating);
    setFormValues((prevValues) => ({ ...prevValues, rating: roundedRating }));
    dispatch(filterByRating(roundedRating));
    paginate(1);
  };

  const handleReset = () => {
    dispatch(clearFilters());
    setFormValues({
      search: "",
      brand: "",
      category: "",
      sort: "",
      price: 3000,
      rating: 0,
    });
    paginate(1);
  };

  return (
    <div className="bg-blue-100 dark:bg-gray-700 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center">
      {/**SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        value={formValues.search}
        onChange={handleChange}
      />

      {brands && (
        <FormSelect
          label="Select Brand"
          name="brand"
          value={formValues.brand}
          list={brands}
          onChange={handleChange}
        />
      )}

      {/* Category Filter */}
      {categories && (
        <FormSelect
          label="Select Category"
          name="category"
          value={formValues.category}
          list={categories}
          onChange={handleChange}
        />
      )}

      <FormSelect
        label="sort by"
        name="sort"
        list={["", "high", "low"]}
        value={formValues.sort}
        onChange={handleChange}
      />
      {/**PRICE */}
      <FormRange
        name="select price"
        label="select price"
        price={formValues.price}
        onChange={handlePriceChange}
      />

      {/**Ratings */}

      <Ratings
        rating={formValues.rating}
        onClick={handleRatingChange}
        label="Select Rating"
      />

      {/**BUTTONS */}

      <Button
        type="button"
        className="bg-pink-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-pink-300 dark:bg-pink-400 dark:text-black capitalize dark:hover:bg-pink-300"
        onClick={handleReset}
      >
        RESET
      </Button>
    </div>
  );
};

export default Filters;
