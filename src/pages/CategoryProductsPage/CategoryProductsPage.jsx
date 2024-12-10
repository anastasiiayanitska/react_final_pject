import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import style from "./CategoryProductspage.module.css";
import { fetchData } from "../../utils/axiosFunc";
import { API_URL } from "../../utils/utils";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useProductFilter } from "../../utils/useProductFilter";
import FilterNav from "../../components/filterNav/filterNav";
import notFound from "../../images/ProductNotFound.png";

const CategoryProductsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredProducts = useProductFilter(data);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await fetchData(`${API_URL}/categories/${id}`);
        setData(productsData.data);
        setCategoryTitle(productsData.category.title);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={style.categoryProducts}>
      <Breadcrumbs />

      <h1>{categoryTitle}</h1>
      <FilterNav />

      <div className={style.listProducts}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>
            <img src={notFound} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProductsPage;
