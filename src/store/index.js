import { createStore, combineReducers, applyMiddleware } from "redux";
import  thunk  from "redux-thunk";
import { cartReducer, userReducer, productReducer } from "./reducers";

const rootReducer = combineReducers({
  cart: cartReducer,
  users: userReducer,
  products: productReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
