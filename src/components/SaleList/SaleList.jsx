import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import style from "./SaleList.module.css";
import { fetchData } from "../../utils/axiosFunc";
import { API_URL } from "../../utils/utils";
import TitleWithLine from "../TitleWithLine/TitleWithLine";
const SaleList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <TitleWithLine title="Sale" linkText="All sales" linkUrl="/discount" />
      <div className={style.productsList}>
        {data
          .filter((product) => product.discont_price)
          .map(
            (product, index) =>
              index < 4 && <ProductCard key={product.id} product={product} />
          )}
      </div>
    </div>
  );
};

export default SaleList;
