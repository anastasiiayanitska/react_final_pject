import React from "react";
import style from "./Modal.module.css";
import closeLogo from "../../images/x.svg";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={style.modalOverlay} onClick={handleOverlayClick}>
      <div className={style.modal}>
        <div>
          <h2>Congratulations</h2>
          <p>
            Your order has been successfully placed on the website. <br />{" "}
            A manager will contact you shortly to confirm your order.
          </p>
        </div>
        <button onClick={onClose} className={style.closeButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className={style.icon}
          >
            <path d="M12 10.586l3.293-3.293 1.414 1.414L13.414 12l3.293 3.293-1.414 1.414L12 13.414l-3.293 3.293-1.414-1.414L10.586 12 7.293 8.707 8.707 7.293 12 10.586z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
