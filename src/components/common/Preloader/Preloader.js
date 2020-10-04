import React from "react";
import { Spinner } from "react-bootstrap";
import s from "./Preloader.module.css";
const Preloader = () => {
  return (
    <div className={s.spinner}>
      <Spinner animation="border" />
    </div>
  );
};

export default Preloader;
