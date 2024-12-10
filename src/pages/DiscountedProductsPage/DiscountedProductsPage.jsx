import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import style from "./DiscountedProductsPage.module.css";
import { fetchData } from "../../utils/axiosFunc";
import { API_URL } from "../../utils/utils";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useProductFilter } from "../../utils/useProductFilter";
import FilterNav from "../../components/FilterNav/FilterNav";
import notFound from "../../images/ProductNotFound.png";

const DiscountedProductsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredProducts = useProductFilter(data);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await fetchData(`${API_URL}/products/all`);
        setData(productsData);
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

  return (
    <div className={style.allProducts}>
      <Breadcrumbs />

      <h1>Discounted items</h1>
      <FilterNav />

      <div className={style.productsList}>
        {filteredProducts.length > 0 ? (
          filteredProducts
            .filter((product) => product.discont_price)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        ) : (
          <img src={notFound} alt="" />
        )}
      </div>
    </div>
  );
};

export default DiscountedProductsPage;
