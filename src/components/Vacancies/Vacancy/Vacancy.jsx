import React from "react";
import s from "./Vacancy.module.css";
import vacImg from "../../../assets/img/vacancy.png";

const Vacancy = ({ vacancy }) => {
  return (
    <div className={s.container}>
      <div className={s.vacancyInfo}>
        <div>
          <img className={s.vacancyImg} src={vacImg} alt={vacancy.Objective} />
        </div>
        <div className={s.vacancyInfoText}>
          <div className={s.vacancyTitile}>{vacancy.Objective}</div>
          <div className={s.company}>{vacancy.Employment}</div>
          <div className={s.vacancyDescription}>{vacancy.Information}</div>
          <div className={s.salary}>{vacancy.Salary}$</div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
