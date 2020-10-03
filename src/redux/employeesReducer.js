const SET_EMPLOYEES = "employees/SET-EMPLOYEES";

let initState = {
  employees: [],
};
const employeesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return { ...state, employees: [...state.employees, ...action.employees] };
    default:
      return state;
  }
};

//--------Actions--------//
export const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  employees: employees,
});

export default employeesReducer;
