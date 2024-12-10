import React from "react";
import style from "./Promo.module.css";
import BtnCard from "../BtnCard/BtnCard";
import { NavLink } from "react-router-dom";

const Promo = () => {
  return (
    <div className={style.promo}>
      <h1>
        Amazing Discounts on <br />
        Pets Products!
      </h1>
      <NavLink to="/discount">
        <BtnCard className="btnCard" label="Check out" />
      </NavLink>
    </div>
  );
};

export default Promo;
