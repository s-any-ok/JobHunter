import { applyMiddleware, combineReducers, createStore } from "redux";
import companiesReducer from "./companiesReducer";
import employeesReducer from "./employeesReducer";
import vacanciesReducer from "./vacanciesReducer";
import empProfileReducer from "./empProfileReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  vacanciesPage: vacanciesReducer,
  comoaniesPage: companiesReducer,
  employeesPage: employeesReducer,
  empProfilePage: empProfileReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
