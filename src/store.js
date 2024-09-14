import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./features/filters/filtersSlice";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice"
import themeReducer from "./features/theme/themeSlice"

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer,
    user: userReducer,
    theme: themeReducer,
  },
});
