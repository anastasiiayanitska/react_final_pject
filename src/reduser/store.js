import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categorySlice";
import cartReducer from "./slices/cartSlice";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    cart: cartReducer,
    theme: themeReducer,
  },
});

export default store;
