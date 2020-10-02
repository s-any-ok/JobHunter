const SHOW_VACANCIES = "vacancies/SHOW-VACANCIES";

let initState = {
  vacancies: [
    {
      VacancyID: 1,
      VacancyName: "Вантажник",
      Company: "Нова Пошта",
      Information: "Потрібен вантажник у нове відділення.",
      ContactNumber: "+380501753434",
      Salary: 500.0,
    },
    {
      VacancyID: 2,
      VacancyName: "Касир",
      Company: "АТБ",
      Information: "Потрібен касир у нове відділення.",
      ContactNumber: "+380666483206",
      Salary: 400.0,
    },
  ],
};
const vacanciesReducer = (state = initState, action) => {
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
