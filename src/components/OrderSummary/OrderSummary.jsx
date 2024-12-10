import React from "react";
import style from "../../pages/CartPage/CartPage.module.css";

const OrderSummary = ({ totalQuantity, totalPrice }) => {
  return (
    <div>
      <h2>Order details</h2>
      <h3>{totalQuantity} Items</h3>
      <div className={style.totalPrice}>
        <h3>Total</h3>
        <h4>${totalPrice}</h4>
      </div>
    </div>
  );
};

export default OrderSummary;
