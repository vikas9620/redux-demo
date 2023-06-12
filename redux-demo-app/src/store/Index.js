

import { createStore} from "redux";



const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 5,
      };
    case "decrement":
      return { counter: state.counter - 5 };
    default:
      return { counter: state.counter };
  }
};const store = createStore(counterReducer);
export default store;

