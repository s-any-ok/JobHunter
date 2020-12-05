import { profileAPI } from "../api/api";
const SET_CMP_PROFILE = "cmpProfile/SET-CMP-PROFILE";
const SET_CMP_VACANCIES = "cmpProfile/SET-CMP-VACANCIES";
const TOGGLE_IS_FETCHING = "vacancies/TOGGLE-IS-FETCHING";

let initState = {
  isFetching: false,
  profile: {},
  vacancies: [],
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
