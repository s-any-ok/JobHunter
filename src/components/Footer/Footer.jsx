import React from "react";
import s from "./Footer.module.css";
import tg from '../../assets/img/icons/telegram.svg';
import instagram from '../../assets/img/icons/instagram.svg'
import twitter from '../../assets/img/icons/twitter.svg'
import youtube from '../../assets/img/icons/youtube.svg'
import facebook from '../../assets/img/icons/facebook.svg'

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.logo}>JobHunter.com</div>
        <div className={s.medias}>
            <img src={tg} alt={"telegram"} width={24} height={24}/>
            <img src={instagram} alt={"instagram"} width={24} height={24}/>
            <img src={twitter} alt={"twitter"} width={24} height={24}/>
            <img src={youtube} alt={"youtube"} width={24} height={24}/>
            <img src={facebook} alt={"facebook"} width={24} height={24}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
