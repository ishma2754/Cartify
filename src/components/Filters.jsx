
import { useState } from "react";
import { FormInput, FormSelect, Ratings, FormRange } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import {
  sortByPrice,
  filterByBrand,
  filterByRating,
  filterBySearch,
  filterbyPriceRange,
  clearFilters,
} from "../features/filters/filtersSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [formValues, setFormValues] = useState({
    search: filters.searchQuery,
    brand: filters.byBrand,
    sort: filters.sort,
    price: filters.price,
    rating: filters.byRating,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));

    switch (name) {
      case "search":
        dispatch(filterBySearch(value));
        break;
      case "brand":
        dispatch(filterByBrand(value));
        break;
      case "sort":
        dispatch(sortByPrice(value));
        break;

      default:
        break;
    }
  };

  const handlePriceChange = (e) => {
    const newValue = e.target.value;
    setFormValues((prevValues) => ({ ...prevValues, price: newValue }));
    dispatch(filterbyPriceRange(newValue));
  };

  const handleRatingChange = (rating) => {
    const roundedRating = Math.round(rating);
    setFormValues((prevValues) => ({ ...prevValues, rating: roundedRating }));
    dispatch(filterByRating(roundedRating));
  };

  const handleReset = () => {
    dispatch(clearFilters());
    setFormValues({
      search: "",
      brand: "",
      sort: "",
      price: 3000,
      rating: 0,
    });
  };

  return (
    <div className="bg-blue-100 dark:bg-gray-700 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-center">
      {/**SEARCH */}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        value={formValues.search}
        onChange={handleChange}
      />

      {/**COMPANIES */}
      <FormSelect
        label="select brand"
        name="brand"
        value={formValues.brand}
        list={[
          "",
          "Essence",
          "Glamour Beauty",
          "Velvet Touch",
          "Chic Cosmetics",
          "Nail Couture",
          "Calvin Klein",
          "Chanel",
        ]}
        size="select-sm"
        onChange={handleChange}
      />
      {/**ORDER */}
      <FormSelect
        label="sort by"
        name="sort"
        list={["", "high", "low"]}
        size="select-sm"
        value={formValues.sort}
        onChange={handleChange}
      />
      {/**PRICE */}
      <FormRange
        name="select price"
        label="select price"
        size="range-sm"
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

      <button
        type="button"
        className="bg-pink-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-pink-300 dark:bg-pink-400 dark:text-black capitalize dark:hover:bg-pink-300"
        onClick={handleReset}
      >
        RESET
      </button>
    </div>
  );
};

export default Filters;
