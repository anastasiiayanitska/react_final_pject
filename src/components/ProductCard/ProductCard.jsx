import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./ProductCard.module.css";
import { API_URL } from "../../utils/utils";
import BtnCard from "../../components/BtnCard/BtnCard";
import PriceBlock from "../PriceBlock/PriceBlock";
import SaleMath from "../SaleMath/SaleMath";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div className={style.card}>
      <div className={style.btn}>
        <BtnCard
          className="btnCard"
          label="Add to Cart"
          product={product}
          quantity={1}
        />
      </div>
      <div className={style.productCard} onClick={handleClick}>
        <div className={style.productImage}>
          <img src={API_URL + product.image} alt={product.title} />
        </div>
        <div className={style.productInfo}>
          <p>{product.title}</p>
          <div className={style.price}>
            <PriceBlock
              discountPrice={product.discont_price}
              originalPrice={product.price}
            />
            <SaleMath
              discountPrice={product.discont_price}
              originalPrice={product.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
