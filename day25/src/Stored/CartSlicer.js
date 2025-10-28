// import {createSlice} from "@reduxjs/toolkit"


// example:
// {
//     id: 124,
//     name: "Wednesday Chicken Bucket",
//     
//    quantity: 2
// }

// [{id:123,name:"Tandoori paneer", quanity:3},{id:124,name:"Tandoori chicken", quanity:2},{id:125,name:"pizza", quanity:3}]
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cart = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, quantity: 1 });
      state.count++;
    },
    incrementItem: (state, action) => {
      const element = state.items.find((item) => item.id === action.payload.id);
      element.quantity += 1;
      state.count++;
    },
    decrementItem: (state, action) => {
      const element = state.items.find((item) => item.id === action.payload.id);
      if (element.quantity > 1) {
        element.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.id != action.payload.id
        );
      }
      state.count--;
    },
  },
});

export const { addItem, decrementItem, incrementItem } = cart.actions;
export default cart.reducer;