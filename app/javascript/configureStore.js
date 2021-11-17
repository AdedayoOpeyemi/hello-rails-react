import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const initialState = {
  greetings: [
    {
      message: "what is going on"
    }
  ]
};

function rootReducer(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "GET_GREETINGS_SUCCESS":
      return { greetings: action.greetings };
  }
  return state
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
  return store;
}