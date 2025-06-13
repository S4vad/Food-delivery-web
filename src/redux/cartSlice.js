import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const exist = state.find((item) => item.id === action.payload.id);
      if (exist) {
        exist.qty += 1; // Safe mutation with Immer
      } else {
        state.push({ ...action.payload, qty: 1 }); // Ensure new items start with qty
      }
    },

    removeItem: (state, action) =>
      state.filter((item) => item.id !== action.payload),

    incrementQty: (state, action) => {
      const exist = state.find((item) => item.id === action.payload);
      if (exist) {
        exist.qty += 1;
      }
    },
    // another way of coding
    decrementQty: (state, action) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addItem, removeItem, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
