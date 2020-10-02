const SET_VACANCIES = "vacancies/SET-VACANCIES";

let initState = {
  vacancies: [
    // {
    //   VacancyID: 1,
    //   VacancyName: "Вантажник",
    //   Company: "Нова Пошта",
    //   Information: "Потрібен вантажник у нове відділення.",
    //   ContactNumber: "+380501753434",
    //   Salary: 500.0,
    // },
    // {
    //   VacancyID: 2,
    //   VacancyName: "Касир",
    //   Company: "АТБ",
    //   Information: "Потрібен касир у нове відділення.",
    //   ContactNumber: "+380666483206",
    //   Salary: 400.0,
    // },
  ],
};
const vacanciesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_VACANCIES:
      return { ...state, vacancies: [...state.vacancies, ...action.vacancies] };
    default:
      return state;
  }
};

//--------Actions--------//
export const setVacancies = (vacancies) => ({
  type: SET_VACANCIES,
  vacancies: vacancies,
});

export default vacanciesReducer;
