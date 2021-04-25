import React from "react";
import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.wrapContainer}>
      <div className={"title"}>About</div>
      <div className={s.container}>
        <div className={s.info}>
          <div className={s.infoText}><b>JobHunter</b> — сайт пошуку роботи №1 в Україні. Провідні компанії України розміщують свої вакансії та знаходять співробітників за допомогою JobHunter. Ми робимо все, щоб кожному відвідувачу JobHunter запам’ятався як найзручніший, найшвидший та найефективніший сайт з працевлаштування.</div>
        </div>
      </div>
    </div>
  );
};

export default About;
