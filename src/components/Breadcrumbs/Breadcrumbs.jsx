import React from "react";
import { useSelector } from "react-redux";
import { useLocation, NavLink, useParams } from "react-router-dom";
import { API_URL } from "../../utils/utils";
import style from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const { productId, id } = useParams();
  const categories = useSelector((state) => state.categories.items);
  const [currentProduct, setCurrentProduct] = React.useState(null);

  React.useEffect(() => {
    if (productId) {
      fetch(`${API_URL}/products/${productId}`)
        .then((res) => res.json())
        .then((product) => setCurrentProduct(product[0]))
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [productId]);

  const getCategoryName = (categoryId) => {
    if (!categories || !categories[categoryId]) return "Categories";
    return categories[categoryId].title;
  };

  const breadcrumbs = [];

  breadcrumbs.push(
    <li key="home">
      <NavLink to="/">Main Page</NavLink>
    </li>
  );

  if (location.pathname.startsWith("/categories")) {
    breadcrumbs.push(
      <li key="categories">
        <NavLink to="/categories">All categories</NavLink>
      </li>
    );
  }

  if (location.pathname.startsWith("/categories") && id && !productId) {
    const categoryName = getCategoryName(id);
    breadcrumbs.push(<li key="category">{categoryName}</li>);
  }

  if (currentProduct) {
    breadcrumbs.push(
      <li key="categories">
        <NavLink to="/categories">All categories</NavLink>
      </li>
    );
    const categoryName = getCategoryName(currentProduct.categoryId);

    breadcrumbs.push(
      <li key="category">
        <NavLink to={`/categories/${currentProduct.categoryId}`}>
          {categoryName}
        </NavLink>
      </li>
    );

    breadcrumbs.push(<li key="product">{currentProduct.title}</li>);
  }
  if (location.pathname.startsWith("/discount")) {
    breadcrumbs.push(
      <li key="discount">
        <NavLink to="/discount">All salles</NavLink>
      </li>
    );
  }
  if (location.pathname === "/products") {
    breadcrumbs.push(
      <li key="allProducts">
        <NavLink to="/products">All products</NavLink>
      </li>
    );
  }

  return (
    <nav className={style.nav}>
      <div className={style.line}></div>
      <ul className={style.breadcrumbs}>{breadcrumbs}</ul>
    </nav>
  );
};

export default Breadcrumbs;
