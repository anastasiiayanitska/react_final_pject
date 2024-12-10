import React from "react";
import { NavLink } from "react-router-dom";
import BtnCard from "../../components/BtnCard/BtnCard";
import style from "./NotFoundPage.module.css";
import notFound from "../../images/404.png";

const NotFoundPage = () => {
  return (
    <div className={style.content}>
      <img src={notFound} alt="" />
      <h1>Page Not Found</h1>
      <p>
        We’re sorry, the page you requested could not be found. <br />
        Please go back to the homepage.
      </p>
      <NavLink to="/">
        <BtnCard className="btnCard" label="Go Home" />
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
