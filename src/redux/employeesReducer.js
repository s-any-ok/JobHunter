import { employeeAPI } from "../api/api";
import { getObjOfData } from "../components/helpers/helpers";

const SET_EMPLOYEES = "employees/SET-EMPLOYEES";
const TOGGLE_IS_FETCHING = "employees/TOGGLE-IS-FETCHING";

let initState = {
  employees: [],
  isFetching: false,
};
const employeesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return { ...state, employees: [...state.employees, ...action.employees] };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

//--------Actions--------//
export const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  employees,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
//--------Thunks--------//
export const getEmployees = (employees) => (dispath) => {
  dispath(toggleIsFetching(true));
  if (employees.length === 0) {
    employeeAPI.getEmployees().then((data) => dispath(setEmployees(data)));
  }
  dispath(toggleIsFetching(false));
};
export const setEmployeeUsers = (target) => {
  const formValue = [
    "Login",
    "Password",
    "Username",
    "Surname",
    "FirstName",
    "Patronymic",
    "Education",
    "Gender",
    "Birthday",
    "Email",
    "ContactNumber",
    "SecretWord",
  ];
  let userData = getObjOfData(formValue, target);
  employeeAPI.setUser(
    userData.Login,
    userData.Password,
    false,
    "12000000-0000-0000-0000-000000000001"
  );
  employeeAPI
    .setEmployee(
      "12000000-0000-0000-0000-000000000001",
      userData.Username,
      userData.Surname,
      userData.FirstName,
      userData.Patronymic,
      userData.Education,
      userData.Gender,
      userData.Birthday,
      userData.Email,
      userData.ContactNumber,
      userData.SecretWord
    )
    .then((response) => alert(response))
    .catch((error) => alert(error));
  //dispath(setEmployees(userData));
};
export default employeesReducer;
