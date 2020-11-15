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
    birthday,
    email,
    contactPhoneNumber
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
        email,
        contactPhoneNumber,
      })
      .then((response) => response.data);
  },
};

export const companyAPI = {
  getCompanies() {
    return instance.get("api/Company").then((response) => response.data);
  },
  setCompany(
    companyID,
    TIN,
    compName,
    information,
    isVip,
    link,
    businessType,
    email,
    contactPhoneNumber
  ) {
    return instance
      .post("api/Company", {
        companyID,
        TIN,
        compName,
        information,
        isVip,
        link,
        businessType,
        email,
        contactPhoneNumber,
      })
      .then((response) => response.data);
  },
};

export const vacancyAPI = {
  getVacancies() {
    return instance.get("api/Vacancy").then((response) => response.data);
  },
  setVacancy(
    companyID,
    objective,
    experience,
    employment,
    information,
    salary,
    contactPhoneNumber,
    adress,
    dataTime
  ) {
    return instance
      .post("api/Vacancy", {
        companyID,
        objective,
        experience,
        employment,
        information,
        salary,
        contactPhoneNumber,
        adress,
        dataTime,
      })
      .then((response) => response.data);
  },
};

export const profileAPI = {
  empProfile(pid) {
    return instance
      .get("api/Employee/" + pid)
      .then((response) => response.data);
  },
  cmpProfile(pid) {
    return instance.get("api/Company/" + pid).then((response) => response.data);
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

export const userAPI = {
  setUser(ChildID, isCompany, login, password, username, secretWord) {
    return instance
      .post("api/User", {
        ChildID,
        isCompany,
        login,
        password,
        username,
        secretWord,
      })
      .then((response) => response.data);
  },
};
