import { authAPI } from "../api/api";
import { getObjOfData } from "../components/helpers/helpers";

const SET_USER_DATA = "auth/SET-USER-DATA";

let initState = {
  Id: null,
  ChildID: null,
  IsCompany: null,
  Login: "User",
  isAuth: false,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};

//--------Actions--------//
export const setAuthUserData = (id, childId, isCompany, login) => ({
  type: SET_USER_DATA,
  data: { id, childId, isCompany, login },
});

//--------Thunks--------//
export const getAuthUser = () => async (dispath) => {
  let data = await authAPI.getUserData();
  let { Id, ChildID, IsCompany, Login } = data;
  if (data.resultCode === 0) {
    dispath(setAuthUserData(Id, ChildID, IsCompany, Login));
  }
};
export const getLoginUser = (target) => async (dispath) => {
  const formValues = ["Login", "Password"];
  let user = getObjOfData(formValues, target);
  let data = await authAPI.login("nova1234", "0000");
  alert(data);
};
export default authReducer;
