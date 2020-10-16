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
    firstName,
    middleName,
    lastName,
    objective,
    education,
    additionalEducation,
    experience,
    skills,
    adress,
    gender,
    birthday
  ) {
    return instance
      .post("api/Employee", {
        employeeID,
        firstName,
        middleName,
        lastName,
        objective,
        education,
        additionalEducation,
        experience,
        skills,
        adress,
        gender,
        birthday,
      })
      .then((response) => response.data);
  },
  setUser(
    ChildID,
    isCompany,
    login,
    password,
    username,
    email,
    phoneNumber,
    secretWord
  ) {
    return instance
      .post("api/User", {
        ChildID,
        isCompany,
        login,
        password,
        username,
        email,
        phoneNumber,
        secretWord,
      })
      .then((response) => response.data);
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
  empProfile(pid) {
    return instance
      .get("api/Employee/" + pid)
      .then((response) => response.data);
  },
};

export const authAPI = {
  login(login, password) {
    return instance
      .post("api/user/login", {
        login,
        password,
      })
      .then((response) => response.data);
  },
};
