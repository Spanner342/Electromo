import React from "react";
import styles from "./Footer.module.css";
import footerLogo from "../../assets/img/footerLogo.png";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footerTop}>
          <ul className={styles.footerItem}>
            <li>Information</li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Delivery Information</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
          </ul>
          <ul className={styles.footerItem}>
            <li>My Account</li>
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">Order History</a>
            </li>
            <li>
              <a href="">Wish List</a>
            </li>
            <li>
              <a href="">Newsletter</a>
            </li>
          </ul>
          <ul className={styles.footerItem}>
            <li>Customer Service</li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Returns</a>
            </li>
            <li>
              <a href="">Site Map</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.footerLine}></span>
          <div className={styles.footerInfo}>
            <img src={footerLogo} alt="" />
            <span>Powered By OpenCart Electromo © 2017</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
