import { companyAPI, profileAPI, respondAPI } from "../api/api";

const SET_RATING_ITEM = "ratingPage/SET-RATING-ITEM";

let initState = {
  ratingItems: [],
};
const ratingReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_RATING_ITEM:
      return {
        ...state,
        ratingItems: action.ratingItems,
      };
    default:
      return state;
  }
};

//--------Actions--------//
export const setRatingItems = (ratingItems) => ({
  type: SET_RATING_ITEM,
  ratingItems,
});
//--------Thunks--------//
export const getRatingItems = (vacancies, responds) => async (dispath) => {
  let data = await companyAPI.getCompanies();
  let resultData = await Promise.all(
    data.map(async (company) => {
      const { CompanyID, CompName } = company;
      let vacancies = await profileAPI.getCmpVacancies(CompanyID);
      let responds = await Promise.all(
        vacancies.map(async (vacancy) => {
          const { VacancyID } = vacancy;
          let responds = await respondAPI.getVacResponds(VacancyID);
          return responds;
        })
      );
      return {
        company: CompName,
        vacancies: vacancies.length,
        responds: responds.length === 0 ? 0 : responds[0].length,
      };
    })
  );
  if (vacancies >= 0)
    resultData = resultData.filter((item) => item.vacancies === vacancies);
  if (responds >= 0)
    resultData = resultData.filter((item) => item.responds === responds);
  dispath(setRatingItems(resultData));
};

export default ratingReducer;
