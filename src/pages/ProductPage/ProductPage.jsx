import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuantityControl from "../../components/QuantityControl/QuantityControl";
import { API_URL } from "../../utils/utils";
import style from "./ProductPage.module.css";
import BtnCard from "../../components/BtnCard/BtnCard";
import SaleMath from "../../components/SaleMath/SaleMath";
import PriceBlock from "../../components/PriceBlock/PriceBlock";
import { fetchData } from "../../utils/axiosFunc";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const ProductPage = () => {
  const { productId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [localQuantity, setLocalQuantity] = useState(1);

  const handleIncrease = () => setLocalQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (localQuantity > 1) setLocalQuantity((prev) => prev - 1);
  };

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const productsData = await fetchData(
          `${API_URL}/products/${productId}`
        );
        setData(productsData[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDataProducts();
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={style.page}>
      <Breadcrumbs />

      <div className={style.product}>
        <div className={style.productImage}>
          <img src={API_URL + data.image} alt="" />
        </div>
        <div className={style.productInfo}>
          <h1>{data.title}</h1>

          <div className={style.price}>
            <PriceBlock
              discountPrice={data.discont_price}
              originalPrice={data.price}
            />
            <SaleMath
              discountPrice={data.discont_price}
              originalPrice={data.price}
              style="fontSize:20px"
            />
          </div>
          <div className={style.addToCard}>
            <QuantityControl
              quantity={localQuantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <BtnCard
              label="Add to cart"
              product={data}
              quantity={localQuantity}
              className="btnCard"
              click="handleAddToCart"
            />
          </div>
          <div className={style.description}>
            <h2>Description</h2>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
