import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

// REDUCERS
import techsReducer from "./Modules/Techs/reducer";
import usersReducer from "./Modules/Users/reducer";
import worksReducer from "./Modules/Works/reducer";
import dataReducer from "./Modules/Data/reducer";
import userReducer from "./Modules/User/reducer";
import authenticateReducer from "./Modules/Authenticated/reducer";

const reducers = combineReducers({
  techs: techsReducer,
  users: usersReducer,
  user: userReducer,
  works: worksReducer,
  data: dataReducer,
  authenticated: authenticateReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
