import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../reduser/slices/cartSlice";
import QuantityControl from "../../components/QuantityControl/QuantityControl";
import PriceBlock from "../../components/PriceBlock/PriceBlock";
import style from "./CartItem.module.css";
import { API_URL } from "../../utils/utils";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className={style.cartItem}>
      <div className={style.image}>
        <img
          src={API_URL + item.image}
          alt={item.title}
          className={style.image}
        />
      </div>
      <div className={style.info}>
        <div className={style.title}>
          <h3>{item.title}</h3>
          <button className={style.removeButton} onClick={handleRemove}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={style.quantity}>
          <QuantityControl
            quantity={item.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
          <PriceBlock
            discountPrice={item.discont_price}
            originalPrice={item.price}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
