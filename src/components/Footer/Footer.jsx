import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.logo}>JobHunter.com</div>
        <div className={s.medias}>Social medias</div>{" "}
      </div>
    </div>
  );
};

export default Footer;
