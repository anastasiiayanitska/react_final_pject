import React from "react";
import { NavLink } from "react-router-dom";
import BtnCard from "../BtnCard/BtnCard";

const EmptyCart = () => {
  return (
    <div>
      <p style={{ marginBottom: "40px" }}>
        Looks like you have no items in your basket currently.
      </p>
      <NavLink to="/products">
        <BtnCard className="btnCard" label="Continue Shopping" />
      </NavLink>
    </div>
  );
};

export default EmptyCart;
