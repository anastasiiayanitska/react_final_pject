import { createSlice } from "@reduxjs/toolkit";

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : { items: [], totalQuantity: 0 };
};

const saveCartToLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const initialState = getCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      saveCartToLocalStorage(state);
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        state.totalQuantity = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
        saveCartToLocalStorage(state);
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      saveCartToLocalStorage(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
