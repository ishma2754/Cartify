import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./features/filters/filtersSlice";
import cartReducer from "./features/cart/cartSlice";
import themeReducer from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});
