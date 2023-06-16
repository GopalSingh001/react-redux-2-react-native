// cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../types';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    editItem: (state, action: PayloadAction<CartItem>) => {
        const { id, name, price } = action.payload;
        const itemIndex = state.items.findIndex((item) => item.id === id);
        if (itemIndex !== -1) {
          state.items[itemIndex] = { ...state.items[itemIndex], name, price };
        }
      },
  },
});

export const { addItem, removeItem, clearCart, editItem } = cartSlice.actions;
export default cartSlice.reducer;
