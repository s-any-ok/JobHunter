const SHOW_COMPANIES = "comoanies/SHOW-COMPANIES";

let initState = {
  companies: [
    {
      CompanyID: 1,
      CompanyName: "Сільпо",
      Information: "Потрібен вантажник у нове відділення.",
      ContactNumber: "+380501753434",
    },
    {
      CompanyID: 2,
      CompanyName: "АТБ",
      Information: "Потрібен вантажник у нове відділення.",
      ContactNumber: "+380501753434",
    },
  ],
};
const companiesReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_COMPANIES:
      return state;
    default:
      return state;
  }
};

//--------Actions--------//
export const showCompanies = (companies) => ({
  type: SHOW_COMPANIES,
  companies: companies,
});

export default companiesReducer;
