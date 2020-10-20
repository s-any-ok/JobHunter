import { companyAPI } from "../api/api";

const SET_COMPANIES = "companies/SET-COMPANIES";
const DELETE_COMPANY = "companies/DELETE-COMPANY";

let initState = {
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
//--------Thunks--------//
export const getCompanies = () => async (dispath) => {
  let data = await companyAPI.getCompanies();
  dispath(setCompanies(data));
};
export default companiesReducer;