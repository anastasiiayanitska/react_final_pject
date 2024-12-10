import React from "react";
import { NavLink } from "react-router-dom";
import style from "./TitleWithLine.module.css";

const TitleWithLine = ({ title, linkText, linkUrl }) => {
  return (
    <div className={style.header}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.line}></div>

      <NavLink to={linkUrl} className={style.button}>
        {linkText}
      </NavLink>
    </div>
  );
};

export default TitleWithLine;
