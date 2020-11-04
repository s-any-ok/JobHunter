import { vacancyAPI } from "../api/api";

const SET_VACANCIES = "vacancies/SET-VACANCIES";
const TOGGLE_IS_FETCHING = "vacancies/TOGGLE-IS-FETCHING";

let initState = {
  isFetching: false,
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
    case SET_VACANCIES:
      return { ...state, vacancies: [...state.vacancies, ...action.vacancies] };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

//--------Actions--------//
export const setVacancies = (vacancies) => ({
  type: SET_VACANCIES,
  vacancies: vacancies,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
//--------Thunks--------//
export const getVacancies = () => async (dispath) => {
  dispath(toggleIsFetching(true));
  if (initState.vacancies.length > 0) dispath(toggleIsFetching(false));
  let data = await vacancyAPI.getVacancies();
  dispath(setVacancies(data));
  dispath(toggleIsFetching(false));
};

export default vacanciesReducer;
