import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  const totalQuantity = cart.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <NavLink to="/" onClick={closeMenu}>
        <img src={logo} alt="logo" />
      </NavLink>

      <button
        className={`${styles.burgerMenu} ${isMenuOpen ? styles.active : ""}`}
        onClick={toggleMenu}
      >
        <p>Menu</p>
      </button>

      <nav
        className={`${styles.navigation} ${
          isMenuOpen ? styles.mobileMenu : ""
        }`}
      >
        <NavLink to="/" onClick={closeMenu}>
          Main Page
        </NavLink>
        <NavLink to="/categories" onClick={closeMenu}>
          Categories
        </NavLink>
        <NavLink to="/products" onClick={closeMenu}>
          All products
        </NavLink>
        <NavLink to="/discount" onClick={closeMenu}>
          All sales
        </NavLink>
      </nav>

      <div className={styles.cart}>
        <NavLink to="/cart" onClick={closeMenu}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26 0C20.4961 0 16.0565 4.37372 16.0565 9.79592V11.7551H8.19492L8.10169 12.6122L4.12429 46.898L4 48H48L47.8757 46.898L43.8983 12.6122L43.8051 11.7551H35.9435V9.79592C35.9435 4.37372 31.5039 0 26 0ZM26 1.95918C30.4396 1.95918 33.9548 5.42219 33.9548 9.79592V11.7551H18.0452V9.79592C18.0452 5.42219 21.5604 1.95918 26 1.95918ZM9.99717 13.7143H16.0565V15.949C15.4622 16.2895 15.0621 16.9094 15.0621 17.6327C15.0621 18.7156 15.9516 19.5918 17.0508 19.5918C18.1501 19.5918 19.0395 18.7156 19.0395 17.6327C19.0395 16.9094 18.6395 16.2895 18.0452 15.949V13.7143H33.9548V15.949C33.3605 16.2895 32.9605 16.9094 32.9605 17.6327C32.9605 18.7156 33.8499 19.5918 34.9492 19.5918C36.0484 19.5918 36.9379 18.7156 36.9379 17.6327C36.9379 16.9094 36.5378 16.2895 35.9435 15.949V13.7143H42.0028L45.7627 46.0408H6.23729L9.99717 13.7143Z" />
          </svg>

          {totalQuantity > 0 && (
            <div className={styles.countCart}>
              <p>{totalQuantity}</p>
            </div>
          )}
        </NavLink>
      </div>
      <div className={styles.theme}>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
