import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./FilterNav.module.css";

const FilterNav = ({ showDiscountFilter = true, showSortFilter = true }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const filterRef = useRef(null);

  const minPrice = searchParams.get("min") || "";
  const maxPrice = searchParams.get("max") || "";
  const discountOnly = searchParams.get("discountOnly") === "1";
  const sortType = searchParams.get("sort") || "none";
  const handleParamChange = (param, newValue) => {
    const newSP = new URLSearchParams(searchParams);

    if (param === "discountOnly") {
      if (newValue) {
        newSP.set("discountOnly", "1");
      } else {
        newSP.delete("discountOnly");
      }
    } else {
      newValue ? newSP.set(param, newValue) : newSP.delete(param);
    }

    setSearchParams(newSP);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.filterNav}>
      <div className={style.burgerMenu} onClick={toggleMenu}>
        <span>Filters</span>
        <div className={style.burgerIcon}>☰</div>
      </div>

      <div
        ref={filterRef}
        className={`${style.filterContainer} ${isMenuOpen ? style.open : ""}`}
      >
        <div className={style.row}>
          <label className={`${style.filterLabel} ${style.price}`}>
            Price:
            <input
              type="number"
              className={style.filterInput}
              value={minPrice}
              onChange={(e) => handleParamChange("min", e.target.value)}
              placeholder="from"
            />
            <input
              type="number"
              className={style.filterInput}
              value={maxPrice}
              onChange={(e) => handleParamChange("max", e.target.value)}
              placeholder="to"
            />
          </label>
        </div>

        {!location.pathname.startsWith("/discount") && showDiscountFilter && (
          <div className={style.row}>
            <label className={style.filterLabel}>
              Discounted items
              <input
                className={style.filterCheck}
                type="checkbox"
                checked={discountOnly}
                onChange={(e) =>
                  handleParamChange("discountOnly", e.target.checked)
                }
              />
            </label>
          </div>
        )}
        {showSortFilter && (
          <div className={style.row}>
            <label className={style.filterLabel}>
              Sorted:
              <select
                className={style.filterSelect}
                value={sortType}
                onChange={(e) => handleParamChange("sort", e.target.value)}
              >
                <option value="none">By default</option>
                <option value="newest">newest</option>
                <option value="desc">price: high-low</option>
                <option value="asc">price: low-high</option>
              </select>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterNav;
