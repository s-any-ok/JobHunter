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
  //profile: null,
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
export const setEmpProfile = (profile) => ({
  type: SET_EMP_PROFILE,
  profile,
});
//--------Thunks--------//
export const getEmpProfile = (pid) => async (dispath) => {
  let data = await profileAPI.empProfile(pid);
  dispath(setEmpProfile(...data));
};

export default empProfileReducer;
