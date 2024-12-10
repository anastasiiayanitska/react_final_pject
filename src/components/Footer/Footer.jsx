import React from "react";
import style from "./Footer.module.css";
import contactLogo from "../../images/contacts_logo.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <h1>Contact</h1>
      <div className={style.contacts}>
        <div className={style.contactsPhone}>
          <p>Phone</p>
          <h2>+49 30 915-88492</h2>
        </div>
        <div className={style.contactsSocials}>
          <p>Socials</p>
          <div>
            <img src={contactLogo} alt="social" />
          </div>
        </div>
        <div className={style.contactsAdress}>
          <p>Adress</p>
          <h2>Wallstraẞe 9-13, 10179 Berlin, Deutschland</h2>
        </div>
        <div className={style.contactsHours}>
          <p>Working Hours</p>
          <h2>24 hours a day</h2>
        </div>
      </div>
      <div className={style.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.230265544563!2d13.402068476533838!3d52.51117177205894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e27db3d613b%3A0x8fa6d253500b289f!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin!5e0!3m2!1suk!2sde!4v1732712963219!5m2!1suk!2sde"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </footer>
  );
};

export default Footer;
