import React from "react";
import CartItem from "../CartItem/CartItem";
import style from "../../pages/CartPage/CartPage.module.css";

const CartItemsList = ({ items }) => {
  return (
    <div className={style.cartList}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartItemsList;
