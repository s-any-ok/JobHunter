import { profileAPI } from "../api/api";
const SET_CMP_PROFILE = "cmpProfile/SET-CMP-PROFILE";

let initState = {
  profile: {},
};
const cmpProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CMP_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

//--------Actions--------//
export const setCmpProfile = (profile) => ({
  type: SET_CMP_PROFILE,
  profile,
});
//--------Thunks--------//
export const getCmpProfile = (pid) => async (dispath) => {
  let data = await profileAPI.cmpProfile(pid);
  dispath(setCmpProfile(...data));
};

export default cmpProfileReducer;
