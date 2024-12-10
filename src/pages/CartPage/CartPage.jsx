import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../reduser/slices/cartSlice";
import { useForm } from "react-hook-form";
import CartItemsList from "../../components/CartItemList/CartItemList";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import OrderForm from "../../components/OrderForm/OrderForm";
import Modal from "../../components/Modal/Modal";
import style from "./CartPage.module.css";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import TitleWithLine from "../../components/TitleWithLine/TitleWithLine";
const CartPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = cart.items.reduce((total, item) => {
    const itemPrice = item.discont_price || item.price;
    return total + itemPrice * item.quantity;
  }, 0);

  const totalQuantity = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const onSubmit = async (formData) => {
    if (cart.items.length === 0) {
      return;
    }

    const orderData = {
      ...formData,
      items: cart.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      localStorage.setItem("orderData", JSON.stringify(orderData));

      const response = await fetch("http://localhost:3333/order/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error("Failed to place order.");
      }

      setIsModalOpen(true);
      dispatch(clearCart());
      localStorage.removeItem("orderData");
      reset();
    } catch (error) {
      console.error("Error while placing the order:", error);
    }
  };

  return (
    <div className={style.cart}>
      <TitleWithLine
        title="Shopping cart"
        linkText="Back to the store"
        linkUrl="/products"
      />
      {cart.items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div>
          <div className={style.cartComponent}>
            <CartItemsList items={cart.items} />
            <div className={style.order}>
              <OrderSummary
                totalQuantity={totalQuantity}
                totalPrice={totalPrice}
              />
              <OrderForm
                onSubmit={handleSubmit(onSubmit)}
                errors={errors}
                register={register}
              />
              <button
                type="button"
                className={style.clearButton}
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CartPage;
