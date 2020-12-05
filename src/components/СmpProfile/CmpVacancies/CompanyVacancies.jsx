import React from "react";
import s from "./CompanyVacancies.module.css";
import Preloader from "../../common/Preloader/Preloader";
import vacImg from "../../../assets/img/vacancy.png";
import { NavLink } from "react-router-dom";

const CompanyVacancies = ({ vacancies, isFetching }) => {
  return (
    <div className={s.container}>
      <div className={s.title}>Vacancies</div>
      {isFetching ? <Preloader /> : null}
      <div>
        {vacancies.map((v) => (
          <div key={v.VacancyID}>
            <CompanyVacancy vacancy={v} />
          </div>
        ))}
      </div>
    </div>
  );
};

const CompanyVacancy = ({ vacancy }) => {
  return (
    <div className={s.vacContainer}>
      <div className={s.vacancyInfoContent}>
        <div>
          <NavLink to={"/Vacancy/" + vacancy.VacancyID}>
            <img
              className={s.vacancyImg}
              src={vacImg}
              alt={vacancy.Objective}
            />
          </NavLink>
        </div>
        <div className={s.vacancyFullInfo}>
          <div className={s.objective}>{vacancy.Objective}</div>
          <div className={s.compAdress}>Company · {vacancy.Adress}</div>
          <div className={s.expEmp}>
            {vacancy.Employment}, {vacancy.Experience}
          </div>
          <div className={s.vacancyInfo}>{vacancy.Information}</div>
          <div className={s.salary}>{vacancy.Salary}$</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyVacancies;
