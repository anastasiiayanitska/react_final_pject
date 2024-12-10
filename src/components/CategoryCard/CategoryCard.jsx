import React from "react";
import PropTypes from "prop-types";
import style from "./CategoryCard.module.css";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/utils";

const CategoryCard = ({ name, image, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categories/${id}`);
  };
  return (
    <div className={style.categoryCard} onClick={handleClick}>
      <img
        src={`${API_URL}/${image}`}
        alt={name}
        className={style.categoryImage}
      />
      <p className={style.categoryName}>{name}</p>
    </div>
  );
};

export default CategoryCard;
