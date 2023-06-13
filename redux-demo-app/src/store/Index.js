
import {configureStore, createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state,action) {
            state.counter = state.counter + action.payload
        },
        decrement(state,action) {
            state.counter = state.counter - action.payload
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
const initialAuthState ={ isAuthenticated: false,}
const authSlice =  createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers : {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state){
      state.isAuthenticated = false
    }
  }
})
const store = configureStore({
    reducer: {counter: counterSlice.reducer,auth: authSlice.reducer}
})
export const counterAction = counterSlice.actions
export const authAction = authSlice.actions
export default store;
