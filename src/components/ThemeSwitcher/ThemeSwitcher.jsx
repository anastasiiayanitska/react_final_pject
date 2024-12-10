import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../reduser/slices/themeSlice";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggleTheme}
      className={`${styles.themeSwitcher} ${styles[theme]}`}
      aria-label="Переключити тему"
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={styles.sunIcon}
        >
          <defs>
            <linearGradient
              id="sunGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFC200" />
              <stop offset="100%" stopColor="#FF9800" />
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="6" fill="url(#sunGradient)" />
          <path
            d="M12 2V4M12 20V22"
            stroke="url(#sunGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M4 12H2M22 12H20"
            stroke="url(#sunGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M5.64 5.64L4.22 4.22M18.36 18.36L19.78 19.78"
            stroke="url(#sunGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M18.36 5.64L19.78 4.22M5.64 18.36L4.22 19.78"
            stroke="url(#sunGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={styles.moonIcon}
        >
          <defs>
            <linearGradient
              id="moonGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#5D6D7E" />
              <stop offset="100%" stopColor="#2C3E50" />
            </linearGradient>
            <filter
              id="moonShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur
                in="SourceAlpha"
                stdDeviation="1.5"
                result="shadow"
              />
              <feOffset dx="0" dy="1" />
              <feComposite
                in2="SourceAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.2 0"
              />
            </filter>
          </defs>
          <path
            d="M12.01 2C10.3 3.69 9.5 5.7 9.5 7.8c0 4.42 3.58 8 8 8 1.95 0 3.73-.72 5.12-1.88A9.004 9.004 0 0 1 12.01 22C6.48 22 2 17.52 2 12.01S6.48 2 12.01 2z"
            fill="url(#moonGradient)"
            filter="url(#moonShadow)"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
