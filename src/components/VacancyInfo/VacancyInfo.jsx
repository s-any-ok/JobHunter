import React from "react";
import s from "./VacancyInfo.module.css";
import myPhoto from "../../assets/img/emp.png";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const VacancyInfo = ({
  vacancy,
  isAuth,
  isCompany,
  company,
  childID,
  setRespond,
}) => {
  const handleRespond = () => {
    setRespond(vacancy.VacancyID, childID);
  };
  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.empForm}>
          <div className={"title"}>Vacancy</div>
          <div className={s.container}>
            <div className={s.proImg}>
              <img src={myPhoto} alt="profilePhoto" />
            </div>
            <div className={s.proInfo}>
              <div className={s.objective}>{vacancy.Objective}</div>
              <NavLink to={"/cmpProfile/" + company.CompanyID}>
                <div className={s.compName}>{company.CompName}</div>
              </NavLink>
              <div className={s.about}>
                <div className={s.var}>
                  <div>Employment</div>
                  <div>Experience</div>
                  <div>Salary</div>
                  <div>Adress</div>
                </div>
                <div className={s.val}>
                  <div>{vacancy.Employment}</div>
                  <div>{vacancy.Experience}</div>
                  <div>{vacancy.Salary}$</div>
                  <div>{vacancy.Adress}</div>
                </div>
              </div>
              <div className={s.info}>
                <h5>Information</h5>
                <div className={s.infoText}>{vacancy.Information}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAuth && isCompany === "0" && (
        <div className={s.btns}>
          <Button className={s.btn} onClick={handleRespond} variant="dark">
            Respond
          </Button>
        </div>
      )}
    </>
  );
};

export default VacancyInfo;
