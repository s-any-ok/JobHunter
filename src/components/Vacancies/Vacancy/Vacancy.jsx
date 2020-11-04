import React from "react";
import s from "./Vacancy.module.css";
import myPhoto from "../../../assets/img/jh.png";

const Vacancy = (props) => {
  return (
    <div>
      <div className={s.container}>
        <div className={s.vacancyInfo}>
          <div>
            <img
              className={s.vacancyImg}
              src={myPhoto}
              alt={props.vacancy.Objective}
            />
          </div>
          <div className={s.vacancyInfoText}>
            <div className={s.vacancyTitile}>{props.vacancy.Objective}</div>
            <div className={s.company}>{props.vacancy.Employment}</div>
            <div className={s.vacancyDescription}>
              {props.vacancy.Information}
            </div>
            <div className={s.salary}>{props.vacancy.Salary}$</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
