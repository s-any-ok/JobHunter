import React from "react";
import s from "./About.module.css";
import myPhoto from "../../assets/img/I.jpg";
const About = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>About</div>
      <div className={s.info}>
        <div>
          <img src={myPhoto} />
        </div>
        <div className={s.infoText}>Oleksandr Levak, IT-91</div>
      </div>
    </div>
  );
};

export default About;
