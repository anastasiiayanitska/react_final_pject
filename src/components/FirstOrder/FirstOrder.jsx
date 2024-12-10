import { useState, React } from "react";
import { useForm } from "react-hook-form";
import style from "./FirstOrder.module.css";

import animals from "../../images/animals.png";

const FirstOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const [buttonClass, setButtonClass] = useState(style.btnBaner);
  const onSubmit = () => {
    if (!isValid) return;

    setButtonClass(style.done);
    setTimeout(() => {
      setButtonClass(style.btnBaner);
    }, 2000);

    reset();
  };

  return (
    <div className={style.firstOrder}>
      <h1>5% off on the first order</h1>
      <img src={animals} alt="animals" />
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.inputWrapper}>
          <input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Minimum 2 characters",
              },
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

        <button type="submit" className={buttonClass}>
          {buttonClass === style.done ? "Request Submitted" : "Get a discount"}
        </button>
      </form>
    </div>
  );
};

export default FirstOrder;
