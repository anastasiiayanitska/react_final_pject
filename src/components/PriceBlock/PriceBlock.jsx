import React from "react";
import style from "./PriceBlock.module.css";

const PriceBlock = ({ discountPrice, originalPrice, showSaleBadge = true }) => {
  return (
    <div className={style.priceWrapper}>
      {discountPrice ? (
        <>
          <h3 className={style.discountPrice}>${discountPrice}</h3>
          <p className={style.originalPrice}>${originalPrice}</p>
        </>
      ) : (
        <h3 className={style.discountPrice}>${originalPrice}</h3>
      )}
    </div>
  );
};

export default PriceBlock;
