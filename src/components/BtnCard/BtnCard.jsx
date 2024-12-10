import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "../../reduser/slices/cartSlice";
import style from "./BtnCard.module.css";

const BtnCard = ({
  className = "btnCard",
  label = "Add to Cart",
  product,
  quantity = 1,
  cart,
}) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    if (product) {
      const productToAdd = { ...product, quantity };
      dispatch(addToCart(productToAdd));

      setIsAdded(true);
      setTimeout(() => {
        setIsAdded(false);
      }, 2000);
    }
  };

  const buttonClass = isAdded ? style.btnCardAdded : style[className];

  return (
    <button className={buttonClass} onClick={handleClick}>
      {isAdded ? "Added" : label}
    </button>
  );
};

export default BtnCard;
