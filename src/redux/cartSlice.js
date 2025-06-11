import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const exist = state.find((item) => item.id === action.payload.id);
      if (!exist) {
        state.push(action.payload);
      }
    },
    removeItem: (state, action) =>
      state.filter((item) => item.id !== action.payload),
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
