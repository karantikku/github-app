import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { repositoriesReducer } from "../reducers/repositoriesReducer"; 
//import { qodReducer } from "../reducers/reducers";

export default () => {
  const store = createStore(
    repositoriesReducer,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    )
  );
  return store;
};
