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

export default employeesReducer;
