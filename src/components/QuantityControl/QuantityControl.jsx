import React from "react";
import style from "./QuantityControl.module.css";
const QuantityControl = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className={style.priceBlock}>
      <button
        className={style.btnQuantity}
        onClick={onDecrease}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className={style.span}>{quantity}</span>
      <button className={style.btnQuantity} onClick={onIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityControl;
