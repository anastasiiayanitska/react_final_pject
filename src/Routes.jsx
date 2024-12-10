import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage";
import CategoryProductsPage from "./pages/CategoryProductsPage/CategoryProductsPage";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import DiscountedProductsPage from "./pages/DiscountedProductsPage/DiscountedProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/categories" element={<CategoriesPage />} />

      <Route path="/categories/:id" element={<CategoryProductsPage />} />

      <Route path="/products" element={<AllProductsPage />} />

      <Route path="/discount" element={<DiscountedProductsPage />} />

      <Route path="/products/:productId" element={<ProductPage />} />

      <Route path="/cart" element={<CartPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
