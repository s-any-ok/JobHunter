import { applyMiddleware, combineReducers, createStore } from "redux";
import companiesReducer from "./companiesReducer";
import employeesReducer from "./employeesReducer";
import vacanciesReducer from "./vacanciesReducer";
import empProfileReducer from "./empProfileReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  vacanciesPage: vacanciesReducer,
  comoaniesPage: companiesReducer,
  employeesPage: employeesReducer,
  empProfilePage: empProfileReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
