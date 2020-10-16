import Cookies from "universal-cookie";
import { authAPI } from "../api/api";
import { getObjOfData } from "../components/helpers/helpers";

const SET_USER_DATA = "auth/SET-USER-DATA";

let initState = {
  Id: null,
  ChildID: null,
  IsCompany: null,
  Login: null,
  isAuth: false,
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

//--------Actions--------//
export const setAuthUserData = (Id, ChildId, IsCompany, Login, isAuth) => ({
  type: SET_USER_DATA,
  data: { Id, ChildId, IsCompany, Login, isAuth },
});

//--------Thunks--------//
export const getAuthUser = () => async (dispath) => {
  const cookie = new Cookies();
  let data = cookie.getAll();
  let { Id, ChildID, IsCompany, Login } = data;
  data.resultCode === "0"
    ? dispath(setAuthUserData(Id, ChildID, IsCompany, Login, true))
    : dispath(setAuthUserData(null, null, null, null, false));
};
export const getLoginUser = (target) => async (dispath) => {
  const formValues = ["Login", "Password"];
  let user = getObjOfData(formValues, target);
  let data = await authAPI.login(user.Login, user.Password);
  if (data.resultCode === 0) {
    let time = new Date();
    time.setTime(time.getTime() + 2 * 60 * 1000);
    const cookie = new Cookies();
    cookie.set("resultCode", data.resultCode, { path: "/", expires: time });
    cookie.set("Id", data.Id, { path: "/", expires: time });
    cookie.set("ChildID", data.ChildID, { path: "/", expires: time });
    cookie.set("IsCompany", data.IsCompany, { path: "/", expires: time });
    cookie.set("Login", user.Login, { path: "/", expires: time });
    cookie.set("Password", user.Password, { path: "/", expires: time });
    dispath(getAuthUser());
  } else {
    alert(data);
  }
};
export const getLogoutUser = () => async (dispath) => {
  const cookie = new Cookies();
  cookie.remove("resultCode");
  dispath(getAuthUser());
};
export default authReducer;
