import { combineReducers, createStore } from "redux";
import companiesReducer from "./companiesReducer";
import employeesReducer from "./employeesReducer";
import vacanciesReducer from "./vacanciesReducer";

let reducers = combineReducers({
  vacanciesPage: vacanciesReducer,
  comoaniesPage: companiesReducer,
  employeesPage: employeesReducer,
});

let store = createStore(reducers);

export default store;

window.store = store;
