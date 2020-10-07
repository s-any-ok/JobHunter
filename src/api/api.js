import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:44374/",
});

export const employeeAPI = {
  getEmployees() {
    return instance.get("api/Employee").then((response) => response.data);
  },
  setEmployee(
    employeeID,
    username,
    surname,
    firstname,
    patronymic,
    education,
    gender,
    birthday,
    email,
    contactNumber,
    secretWord
  ) {
    return instance
      .post("api/Employee", {
        employeeID,
        username,
        surname,
        firstname,
        patronymic,
        education,
        gender,
        birthday,
        email,
        contactNumber,
        secretWord,
      })
      .then((response) => response.data);
  },
  setUser(login, password, isCompany, ChildID) {
    return instance.post("api/User", {
      login,
      password,
      isCompany,
      ChildID,
    });
  },
};

export const companyAPI = {
  getCompanies() {
    return instance.get("api/Company").then((response) => response.data);
  },
};

export const vacancyAPI = {
  getVacancies() {
    return instance.get("api/Vacancy").then((response) => response.data);
  },
};

export const profileAPI = {
  getEmpProfile() {
    return instance.get("api/profile").then((response) => response.data);
  },
};
