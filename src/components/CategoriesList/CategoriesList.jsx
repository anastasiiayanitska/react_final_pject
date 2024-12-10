import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../reduser/slices/categorySlice";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import style from "./CategoriesList.module.css";
import TitleWithLine from "../TitleWithLine/TitleWithLine";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const {
    items: categories,
    status,
    error,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Загрузка...</p>;
  }

  if (status === "failed") {
    return <p>Ошибка: {error}</p>;
  }

  if (!categories || categories.length === 0) {
    return <p>Категории не найдены.</p>;
  }

  return (
    <div className={style.categories}>
      <TitleWithLine
        title="Categories"
        linkText="All categories"
        linkUrl="/categories"
      />
      <div className={style.categoriesList}>
        {categories.map(
          (category, index) =>
            index < 4 && (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.title}
                image={category.image}
              />
            )
        )}
      </div>
    </div>
  );
};

export default CategoriesList;
