export const getIsFetching = (state) => {
  return state.employeesPage.isFetching;
};

export const getEmployees = (state) => {
  return state.employeesPage.employees;
};
