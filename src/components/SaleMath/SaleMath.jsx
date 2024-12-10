import React from "react";
import style from "./SaleMath.module.css";

const SaleBadge = ({ discountPrice, originalPrice }) => {
  if (!discountPrice || !originalPrice || discountPrice >= originalPrice) {
    return null;
  }

  const sale = Math.round((1 - discountPrice / originalPrice) * 100);

  return <h6 className={style.sale}>{sale}%</h6>;
};

export default SaleBadge;
