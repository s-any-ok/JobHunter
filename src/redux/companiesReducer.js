const SHOW_COMPANIES = "comoanies/SHOW-COMPANIES";

const companiesReducer = (state, action) => {
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
