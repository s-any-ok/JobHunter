import { vacancyAPI } from "../api/api";
import { getDataTime, getObjOfData } from "../components/utils/formHelpers";

const SET_VACANCIES = "vacancies/SET-VACANCIES";
const TOGGLE_IS_FETCHING = "vacancies/TOGGLE-IS-FETCHING";

let initState = {
  isFetching: false,
  vacancies: [
    {
      VacancyID: 1,
      Objective: "Front-end developer (Javascript)",
      Company: "React",
      Information: "Компания AffReact предлагает вакансию Frontend разработчика в киевском офисе компании.",
      ContactNumber: "+380501753434",
      Employment: "Повна зайнятість.",
      Experience: "Досвід роботи від 2 років.",
      Adress: "Київ, вулиця Басейна, 2.",
      Salary: 500.0,
    },
    {
      VacancyID: 2,
      Objective: "DevOps Engineer",
      Company: "React",
      Information: "Are you tired of being busy with bullshit and those things that can hardly unveil your potential to the full?",
      ContactNumber: "+380501753434",
      Employment: "Повна зайнятість.",
      Experience: "Досвід роботи від 1 років.",
      Adress: "Київ, вулиця Басейна, 1/2А.",
      Salary: 400.0,
    },
    {
      VacancyID: 3,
      Objective: "DevOps Engineer",
      Company: "React",
      Information: "Are you tired of being busy with bullshit and those things that can hardly unveil your potential to the full?",
      ContactNumber: "+380501753434",
      Employment: "Повна зайнятість.",
      Experience: "Досвід роботи від 1 років.",
      Adress: "Київ, вулиця Басейна, 1/2А.",
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

export const setCompanyVacancy = (target, Id) => async (dispath) => {
  const formValues = [
    "Objective",
    "Experience",
    "Employment",
    "Information",
    "Salary",
    "ContactPhoneNumber",
    "Adress",
  ];

  const DataTime = getDataTime(); // check
  let userData = getObjOfData(formValues, target);
  let respVac = await vacancyAPI.setVacancy(
    Id,
    userData.Objective,
    userData.Experience,
    userData.Employment,
    userData.Information,
    userData.Salary,
    userData.ContactPhoneNumber,
    userData.Adress,
    DataTime
  );
  alert(respVac);
  dispath(setVacancies([userData]));
};

export default vacanciesReducer;
