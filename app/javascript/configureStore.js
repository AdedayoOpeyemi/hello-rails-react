import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const initialState = {
  message: "Amazing"
};

function rootReducer(state, action) {
  console.log(action.type);
  console.log(action)
  switch (action.type) {
    case "GET_GREETINGS_SUCCESS":
      return { message: action.json.message };
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