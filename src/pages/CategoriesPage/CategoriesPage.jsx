import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../../reduser/slices/categorySlice";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import style from "./CategoriesPage.module.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
const CategoriesPage = () => {
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
      <Breadcrumbs />

      <h1>Categories</h1>
      <div className={style.categoriesList}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.title}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
