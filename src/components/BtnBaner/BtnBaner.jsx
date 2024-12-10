import React from "react";
import style from "./BtnBaner.module.css";
import { useState } from "react";

const BtnBaner = ({ className, label }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };
  const buttonClass = isAdded ? style.done : style[className];

  return (
    <button className={buttonClass} onClick={handleClick}>
      {isAdded ? "Request Submitted" : label}
    </button>
  );
};

export default BtnBaner;
