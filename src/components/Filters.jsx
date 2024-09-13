import { Form } from "react-router-dom";
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
} from "../store/filtersSlice";

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
    <Form className="bg-gray-100 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
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
      <div className="col-span-full">
        <label className="text-sm font-medium text-gray-700">
          Select Rating
        </label>
        <div className="flex items-center space-x-2">
          <Ratings rating={formValues.rating} onClick={handleRatingChange} />
        </div>
      </div>

      {/**BUTTONS */}

      <button
        type="button"
        className="bg-gray-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-600"
        onClick={handleReset}
      >
        reset
      </button>
    </Form>
  );
};

export default Filters;

/*
<FormCheckbox
        name="shipping"
        label="free shipping"
        size="checkbox-sm"
        defaultValue=""
      />
*/
/**
 *   // const selectedRating = useSelector((state) => state.filters.byRating);
  // const selectedPrice = useSelector((state) => state.filters.price);
  // const selectedBrand = useSelector((state) => state.filters.byBrand);
  // const selectedSort = useSelector((state) => state.filters.sort);
  // const selectedSearch = useSelector((state) => state.filters.searchQuery);
  // const [price, setPrice] = useState(selectedPrice);
  // const [rating, setRating] = useState(selectedRating);

  // const [brand, setBrand] = useState(selectedBrand);
  // const [sort, setSort] = useState(selectedSort);
  // const [search, setSearch] = useState(selectedSearch);

  // const handleSearchChange = (e) => {
  //   const selectedSearch = e.target.value;
  //   setSearch(selectedSearch);
  //   dispatch(filterBySearch(selectedSearch));
  // };

  // const handleBrandChange = (e) => {
  //   const selectedBrand = e.target.value;
  //   setBrand(selectedBrand);
  //   dispatch(filterByBrand(selectedBrand));
  // };

  // const handleSortChange = (e) => {
  //   const selectedSort = e.target.value;
  //   setSort(selectedSort);
  //   dispatch(sortByPrice(selectedSort));
  // };

  // const handleRatingChange = (rating) => {
  //   const roundedRating = Math.round(rating);
  //   setRating(roundedRating);
  //   dispatch(filterByRating(roundedRating));
  // };

  // const handlePriceRangeChange = (e) => {
  //   const price = e.target.value;
  //   setPrice(price);
  //   dispatch(filterbyPriceRange(price));
  // };

  // const handleReset = () => {
  //   dispatch(clearFilters());
  //   setRating(0);
  //   setPrice(3000);
  //   setBrand("");
  //   setSort("");
  //   setSearch("")
  // };
 */
