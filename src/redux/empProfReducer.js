import { profileAPI } from "../api/api";
const SET_EMP_PROFILE = "empProfile/SET-EMP-PROFILE";

let initState = {
  profile: {
  EmployeeID: 4,
      FirstName: "Олександр",
      LastName: "Левак",
      Gender: "Чоловік",
      Education: "Вища освіта",
      AdditionalEducation: "Coursera",
      Skills: "React, JavaScript",
      BirthDay: "03.01.2002",
      Adress: "Київ, Луцьк"
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
