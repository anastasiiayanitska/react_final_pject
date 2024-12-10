import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useProductFilter = (originalData) => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!originalData || originalData.length === 0) {
      setFilteredData([]);
      return;
    }

    let result = [...originalData];

    const minPrice = searchParams.get("min");
    if (minPrice) {
      result = result.filter((product) => {
        const priceToCompare = product.discont_price ?? product.price;
        return priceToCompare >= parseFloat(minPrice);
      });
    }

    const maxPrice = searchParams.get("max");
    if (maxPrice) {
      result = result.filter((product) => {
        const priceToCompare = product.discont_price ?? product.price;
        return priceToCompare <= parseFloat(maxPrice);
      });
    }

    const discountOnly = searchParams.get("discountOnly") === "1";
    if (discountOnly) {
      result = result.filter((product) => product.discont_price);
    }

    const sortType = searchParams.get("sort");
    switch (sortType) {
      case "newest":
        result.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        break;
      case "desc":
        result.sort((a, b) => {
          const priceA = a.discont_price || a.price;
          const priceB = b.discont_price || b.price;
          return priceB - priceA;
        });
        break;
      case "asc":
        result.sort((a, b) => {
          const priceA = a.discont_price || a.price;
          const priceB = b.discont_price || b.price;
          return priceA - priceB;
        });
        break;
    }

    setFilteredData(result);
  }, [originalData, searchParams]);

  return filteredData;
};
