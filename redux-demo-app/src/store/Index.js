import { createStore } from "redux";
import {configureStore, createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state,action) {
            state.counter = state.counter + action.value
        },
        decrement(state,action) {
            state.counter = state.counter - action.value
        },
        toggleCounter(state) {
            state.showCounter= !state.showCounter
        },
    }
})

/*const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + action.value,
        showCounter: state.showCounter,
      };
    case "decrement":
      return {
        counter: state.counter - action.value,
        showCounter: state.showCounter,
      };
    case "toggle":
      return {
        showCounter: !state.showCounter,
        counter: state.counter,
      };
    default:
      return { counter: state.counter };
  }
};
const store = createStore(counterReducer);*/

const store = configureStore({
    reducer: counterSlice.reducer
})
export default store;
