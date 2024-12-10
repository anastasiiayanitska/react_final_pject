import React from "react";
import { useForm } from "react-hook-form";
import style from "../../pages/CartPage/CartPage.module.css";

const OrderForm = ({ onSubmit, errors, register }) => {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.inputWrapper}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "Minimum 2 characters" },
          })}
        />
        {errors.name && (
          <span className={style.error}>{errors.name.message}</span>
        )}
      </div>

      <div className={style.inputWrapper}>
        <input
          type="tel"
          placeholder="Phone number"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value:
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              message: "Invalid phone number",
            },
          })}
        />
        {errors.phone && (
          <span className={style.error}>{errors.phone.message}</span>
        )}
      </div>

      <div className={style.inputWrapper}>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className={style.error}>{errors.email.message}</span>
        )}
      </div>

      <button type="submit" className={style.submitButton}>
        Order
      </button>
    </form>
  );
};

export default OrderForm;
