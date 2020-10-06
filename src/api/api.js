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
        EmployeeID: employeeID,
        UserName: username,
        Surname: surname,
        FirstName: firstname,
        Patronymic: patronymic,
        Education: education,
        Gender: gender,
        Birthday: birthday,
        Mail: email,
        ContactNumber: contactNumber,
        SecretWord: secretWord,
      })
      .then((response) => response.data);
  },
  setUser(login, password, isCompany, ChildID) {
    return instance.post("api/User", {
      UserLogin: login,
      UserPassword: password,
      isCompany: isCompany,
      ChildID: ChildID,
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
