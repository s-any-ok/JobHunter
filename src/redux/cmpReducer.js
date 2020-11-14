import { companyAPI, userAPI } from "../api/api";

import {
  createGuid,
  getDataTime,
  getObjOfData,
} from "../components/utils/formHelpers";

const SET_COMPANIES = "companies/SET-COMPANIES";
const DELETE_COMPANY = "companies/DELETE-COMPANY";
const TOGGLE_IS_FETCHING = "companies/TOGGLE-IS-FETCHING";

let initState = {
  isFetching: false,
  companies: [
    {
      CompanyID: 1,
      CompName: "Сільпо",
      Information: "Потрібен вантажник у нове відділення.",
      ContactNumber: "+380501753434",
      VacancyCount: 21,
    },
    {
      CompanyID: 2,
      CompName: "АТБ",
      Information: "Потрібен вантажник у нове відділення.",
      ContactNumber: "+380501753434",
      VacancyCount: 11,
    },
    {
      CompanyID: 3,
      CompName: "Сільпо",
      Information: "Потрібен вантажник у нове відділення.",
      ContactNumber: "+380501753434",
      VacancyCount: 21,
    },
    {
      CompanyID: 4,
      CompName: "АТБ",
      Information: "Потрібен вантажник у нове відділення.",
      ContactNumber: "+380501753434",
      VacancyCount: 11,
    },
    {
      CompanyID: 5,
      CompName: "Сільпо",
      Information: "Потрібен вантажник у нове відділення.",
      ContactNumber: "+380501753434",
      VacancyCount: 21,
    },
    {
      CompanyID: 6,
      CompName: "АТБ",
      Information: "Потрібен вантажник у нове відділення.",
      ContactNumber: "+380501753434",
      VacancyCount: 11,
    },
  ],
};
const companiesReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_COMPANIES:
      return { ...state, companies: [...state.companies, ...action.companies] };
    case DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter(
          (c) => c.CompanyID !== action.companyId
        ),
      };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

//--------Actions--------//
export const setCompanies = (companies) => ({
  type: SET_COMPANIES,
  companies,
});
export const deleteCompanyById = (companyId) => ({
  type: DELETE_COMPANY,
  companyId,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
//--------Thunks--------//
export const getCompanies = () => async (dispath) => {
  dispath(toggleIsFetching(true));
  if (initState.companies.length > 0) dispath(toggleIsFetching(false));
  let data = await companyAPI.getCompanies();
  dispath(setCompanies(data));
  dispath(toggleIsFetching(false));
};
export const setCompanyUsers = (target) => async (dispath) => {
  const formValues = [
    "Login",
    "Password",
    "Username",
    "SecretWord",
    "PhoneNumber",
    "Email",
    "TIN",
    "CompanyName",
    "Information",
    "Link",
    "BusinessType",
  ];
  const Guid = createGuid();
  const DataTime = getDataTime(); // check
  let userData = getObjOfData(formValues, target);
  await userAPI.setUser(
    Guid,
    true,
    userData.Login,
    userData.Password,
    userData.Username,
    userData.SecretWord,
    DataTime
  );
  let respCmp = await companyAPI.setCompany(
    Guid,
    userData.TIN,
    userData.CompanyName,
    userData.Information,
    false,
    userData.Link,
    userData.BusinessType,
    userData.PhoneNumber,
    userData.Email
  );
  alert(respCmp);
  dispath(setCompanies([userData]));
};
export default companiesReducer;
