import React, { useState } from "react";
import s from "./CompanyProfile.module.css";
import cmp from "../../assets/img/cmp.png";
import { Button } from "react-bootstrap";
import AddVacancyContainer from "../AddVacancy/AddVacancyContainer";
import CompanyVacancies from "./CmpVacancies/CompanyVacancies";

const CompanyProfile = ({
  profile,
  isAuth,
  ChildID,
  getLogoutUser,
  history,
  vacancies,
}) => {
  const [modalShow, setModalShow] = useState(false);
  const isCorrectUser = isAuth && profile.CompanyID === ChildID;
  const logout = () => {
    getLogoutUser().then(() => history.push("/"));
  };

  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.cmpForm}>
          <div className={s.title}>Profile</div>
          <div className={s.container}>
            <div className={s.proImg}>
              <img src={cmp} alt="companyPhoto" />
            </div>
            <div className={s.proInfo}>
              <div className={s.cmpName}>
                <strong>{profile.CompName}</strong>
                {profile.isVip && <b className={s.vip}> · Vip</b>}
              </div>
              <div className={s.businesstype}>{profile.BusinessType}</div>
              <div className={s.about}>
                <div className={s.var}>
                  <div>Link</div>
                  <div>Email</div>
                  <div>Phone number</div>
                </div>
                <div className={s.val}>
                  <div>{profile.Link}</div>
                  <div>{profile.Email}</div>
                  <div>{profile.ContactPhoneNumber}</div>
                </div>
              </div>
              <div className={s.info}>
                <h5>Information</h5>
                <div className={s.infoText}>{profile.Information}</div>
              </div>
            </div>
          </div>
        </div>
        <AddVacancyContainer
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      {isCorrectUser && (
        <div className={s.btns}>
          <Button
            className={s.btn}
            onClick={() => setModalShow(true)}
            variant="primary"
          >
            Add Vacancy
          </Button>
          <Button className={s.btn} onClick={logout} variant="dark">
            Logout
          </Button>
        </div>
      )}
      {vacancies[0] && <CompanyVacancies vacancies={vacancies} />}
    </>
  );
};

export default CompanyProfile;
