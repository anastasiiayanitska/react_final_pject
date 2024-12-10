import React, { useState, useEffect } from "react";
import { useProductFilter } from "../../utils/useProductFilter";
import { fetchData } from "../../utils/axiosFunc";
import { API_URL } from "../../utils/utils";
import FilterNav from "../../components/FilterNav/FilterNav";
import ProductCard from "../../components/ProductCard/ProductCard";
import style from "./AllProductPage.module.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import notFound from "../../images/ProductNotFound.png";

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredProducts = useProductFilter(products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await fetchData(`${API_URL}/products/all`);
        setProducts(productsData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={style.allProducts}>
      <Breadcrumbs />

      <h1>All Products</h1>

      <FilterNav />

      <div className={style.productsList}>
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

export default AllProductsPage;
