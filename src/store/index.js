import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

// REDUCERS
import techsReducer from "./Modules/Techs/reducer";
import usersReducer from "./Modules/Users/reducer";
import worksReducer from "./Modules/Works/reducer";

const reducers = combineReducers({
  techs: techsReducer,
  users: usersReducer,
  works: worksReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
