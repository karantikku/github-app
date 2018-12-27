import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { repositoriesReducer } from "../reducers/repositoriesReducer";
import { activitiesReducer } from "../reducers/activitiesReducer";
//import { qodReducer } from "../reducers/reducers";

export default () => {
  const store = createStore(
    combineReducers({
      repositories: repositoriesReducer,
      activities: activitiesReducer
    }),
    applyMiddleware(
      thunkMiddleware // lets us dispatch() functions
    )
  );
  return store;
};
