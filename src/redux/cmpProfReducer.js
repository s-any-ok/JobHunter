import { profileAPI } from "../api/api";
const SET_CMP_PROFILE = "cmpProfile/SET-CMP-PROFILE";
const SET_CMP_VACANCIES = "cmpProfile/SET-CMP-VACANCIES";
const TOGGLE_IS_FETCHING = "vacancies/TOGGLE-IS-FETCHING";

let initState = {
  isFetching: false,
  profile: {
    CompanyID: 1,
    isVip: true,
    CompName: "React",
    BusinessType: "Маркетинг, реклама, PR",
    Link: "new.affreact.com/",
    Email: "new.affreact@mail.com",
    ContactPhoneNumber: "380635506287",
    Information: "REACT — крупный международный холдинг, предоставляющий широкий спектр услуг в сфере маркетинга, исследования международных финансовых рынков и IT-разработок.\n" +
        "\n" +
        "В начале нашей работы, мы поставили себе цель — стать лидером на современном рынке. Сегодня мы достигли этого результата, поскольку сотрудничаем с большим количеством компаний по всему миру. Но при этом мы продолжаем развиваться каждый день, чтобы предлагать качественные услуги как своим постоянным клиентам, так и новым пользователям. Нам важно, чтобы каждый проект, который мы создаем, помогал вам достигать поставленных целей. Это позволяет быстрее выходить на новый уровень в любой сфере деятельности."
  },
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
    }
  ],
};
const cmpProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CMP_PROFILE:
      return { ...state, profile: action.profile };
    case SET_CMP_VACANCIES:
      return { ...state, vacancies: action.vacancies };
    default:
      return state;
  }
};

//--------Actions--------//
export const setCmpProfile = (profile) => ({
  type: SET_CMP_PROFILE,
  profile,
});
export const setCmpVacancies = (vacancies) => ({
  type: SET_CMP_VACANCIES,
  vacancies: vacancies,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
//--------Thunks--------//
export const getCmpProfile = (pid) => async (dispath) => {
  let data = await profileAPI.cmpProfile(pid);
  dispath(setCmpProfile(...data));
};

export const getCmpVacancies = (pid) => async (dispath) => {
  dispath(toggleIsFetching(true));
  if (initState.vacancies.length > 0) dispath(toggleIsFetching(false));
  let data = await profileAPI.getCmpVacancies(pid);
  dispath(setCmpVacancies(data));
  dispath(toggleIsFetching(false));
};

export default cmpProfileReducer;
