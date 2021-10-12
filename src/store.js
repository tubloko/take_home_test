import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import taxesReducer from "./redux/reducers/taxesReducer";
import filterReducer from "./redux/reducers/filterReducer";

const reducers = combineReducers({
  taxesReducer,
  filterReducer,
});

export default createStore(
  reducers,
  applyMiddleware(reduxThunk),
);
