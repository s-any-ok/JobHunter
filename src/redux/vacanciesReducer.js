const { default: Switch } = require("react-bootstrap/esm/Switch");

const SHOW_VACANCIES = "vacancies/SHOW-VACANCIES";

const vacanciesReducer = (state, action) => {
  switch (action.type) {
    case SHOW_VACANCIES:
      return state;
    default:
      return state;
  }
};

//--------Actions--------//
export const showVacancies = (vacancies) => ({
  type: SHOW_VACANCIES,
  vacancies: vacancies,
});

export default vacanciesReducer;
