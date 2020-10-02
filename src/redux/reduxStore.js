import { combineReducers, createStore } from "redux";
import companiesReducer from "./companiesReducer";
import vacanciesReducer from "./vacanciesReducer";

let reducers = combineReducers({
  vacanciesPage: vacanciesReducer,
  comoaniesPage: companiesReducer,
});

let store = createStore(reducers);

export default store;

window.store = store;
