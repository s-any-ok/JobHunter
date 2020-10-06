import { profileAPI } from "../api/api";
const SET_EMP_PROFILE = "empProfile/SET-EMP-PROFILE";

let initState = {
  profile: {
    FirstName: "Oleksandr",
    Surname: "Levak",
    Mail: "alex@mail.com",
    Username: "s.any.ok",
    ContactNumber: "380666493306",
  },
};
const empProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_EMP_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

//--------Actions--------//
export const setEmpProfile = (vacancies) => ({
  type: SET_EMP_PROFILE,
  vacancies: vacancies,
});
//--------Thunks--------//
export const getEmpProfile = () => (dispath) => {
  profileAPI.profileAPI().then((data) => dispath(setEmpProfile(data)));
};

export default empProfileReducer;
