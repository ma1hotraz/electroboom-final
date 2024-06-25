import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += 1;
      } else {
        state.push({ ...newItem, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const existingItem = state.find((item) => item.id === itemId);
      if (existingItem) {
        existingItem.quantity += quantity;
        if (existingItem.quantity < 1) {
          return state.filter((item) => item.id !== itemId);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
