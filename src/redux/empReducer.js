import { employeeAPI, userAPI } from "../api/api";
import {
  createGuid,
  getDataTime,
  getObjOfData,
} from "../components/utils/formHelpers";

const SET_EMPLOYEES = "employees/SET-EMPLOYEES";
const TOGGLE_IS_FETCHING = "employees/TOGGLE-IS-FETCHING";

let initState = {
  employees: [{
    EmployeeID: 1,
    FirstName: "Олександр",
    LastName: "Левак",
    Gender: "Чоловік",
    Education: "Вища освіта",
    Objective: "Front-end",
    BirthDay: "03.01.2002",
  },
    {
      EmployeeID: 2,
      FirstName: "Олександр",
      LastName: "Левак",
      Gender: "Чоловік",
      Education: "Вища освіта",
      Objective: "Front-end",
      BirthDay: "03.01.2002",
    },
    {
      EmployeeID: 3,
      FirstName: "Олександр",
      LastName: "Левак",
      Gender: "Чоловік",
      Education: "Вища освіта",
      Objective: "Front-end",
      BirthDay: "03.01.2002",
    },
    {
      EmployeeID: 4,
      FirstName: "Олександр",
      LastName: "Левак",
      Gender: "Чоловік",
      Education: "Вища освіта",
      Objective: "Front-end",
      BirthDay: "03.01.2002",
    }],
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
export const getEmployees = () => async (dispath) => {
  dispath(toggleIsFetching(true));
  if (initState.employees.length > 0) dispath(toggleIsFetching(false));
  let data = await employeeAPI.getEmployees();
  dispath(setEmployees(data));
  dispath(toggleIsFetching(false));
};
export const setEmployeeUsers = (target) => async (dispath) => {
  const formValues = [
    "Login",
    "Password",
    "Username",
    "SecretWord",
    "PhoneNumber",
    "Email",
    "LastName",
    "FirstName",
    "MiddleName",
    "Objective",
    "Education",
    "Gender",
    "Birthday",
    "AdditionalEducation",
    "Experience",
    "Skills",
    "Adress",
  ];
  const Guid = createGuid();
  const DataTime = getDataTime(); // check
  let userData = getObjOfData(formValues, target);
  await userAPI.setUser(
    Guid,
    false,
    userData.Login,
    userData.Password,
    userData.Username,
    userData.SecretWord,
    DataTime
  );
  let respEmp = await employeeAPI.setEmployee(
    Guid,
    userData.FirstName,
    userData.MiddleName,
    userData.LastName,
    userData.Objective,
    userData.Education,
    userData.AdditionalEducation,
    userData.Experience,
    userData.Skills,
    userData.Adress,
    userData.Gender,
    userData.Birthday,
    userData.Email,
    userData.ContactPhoneNumber
  );
  alert(respEmp);
  dispath(setEmployees([userData]));
};
export default employeesReducer;
