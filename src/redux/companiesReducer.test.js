import React from "react";
import companiesReducer, {
  deleteCompanyById,
  setCompanies,
} from "./companiesReducer";

const state = {
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

const newCompany = {
  CompanyID: 3,
  CompanyName: "Мегамаркет",
  Information: "Потрібен вантажник у нове відділення.",
  ContactNumber: "+380501754434",
};

test("correct length of companies", () => {
  const action = setCompanies([newCompany]);
  const newState = companiesReducer(state, action);
  expect(newState.companies.length).toBe(3);
});

test("correct name of new company", () => {
  const action = setCompanies([newCompany]);
  const newState = companiesReducer(state, action);
  expect(newState.companies[2].CompanyName).toBe("Мегамаркет");
});

test("check deleting first company by id", () => {
  const action = deleteCompanyById(1);
  const newState = companiesReducer(state, action);
  expect(newState.companies[0].CompanyName).toBe("АТБ");
});
