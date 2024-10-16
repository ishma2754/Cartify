import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  byBrand: "",
  byCategory: "",
  byRating: 0,
  searchQuery: "",
  price: 3000
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sortByPrice: (state, action) => {
      state.sort = action.payload;
    },
    filterByBrand: (state, action) => {
      state.byBrand = action.payload;
    },
    filterByCategory: (state, action) => {
      state.byCategory = action.payload;
    },
    filterByRating: (state, action) => {
      state.byRating = action.payload;
    },
    filterBySearch: (state, action) => {
      state.searchQuery = action.payload;
    },
    filterbyPriceRange: (state, action) => {
      state.price = action.payload;
    },
    clearFilters: (state) => {
      state.byRating = 0;
      state.searchQuery = "";
      state.byBrand = "";
      state.byCategory = "";
      state.sort = "";
      state.price = 3000;
    },
  },
});

export const {
  sortByPrice,
  filterByBrand,
  filterByCategory,
  filterByRating,
  filterBySearch,
  filterbyPriceRange,
  clearFilters,
} = filtersSlice.actions;
export default filtersSlice.reducer;
