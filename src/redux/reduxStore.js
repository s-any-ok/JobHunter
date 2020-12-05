import { applyMiddleware, combineReducers, createStore } from "redux";
import companiesReducer from "./cmpReducer";
import employeesReducer from "./empReducer";
import vacanciesReducer from "./vacReducer";
import empProfileReducer from "./empProfReducer";
import cmpProfileReducer from "./cmpProfReducer";
import vacInfoReducer from "./vacInfoReducer";
import ratingReducer from "./ratingReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  vacanciesPage: vacanciesReducer,
  companiesPage: companiesReducer,
  employeesPage: employeesReducer,
  empProfilePage: empProfileReducer,
  cmpProfilePage: cmpProfileReducer,
  vacInfoPage: vacInfoReducer,
  ratingPage: ratingReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
