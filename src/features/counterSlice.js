import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: " counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementBy: (state, action) => {
      state.count += action.payload;
    },
    decrementBy: (state, action) => {
      state.count -= action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});
const counterReducer = counterSlice.reducer;
export const { increment, decrement, incrementBy, decrementBy, reset } =
  counterSlice.actions;
export default counterReducer;
