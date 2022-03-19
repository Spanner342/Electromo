import React from "react";
import styles from "./Supply.module.css";
import watch from "../../assets/img/watch.png";
import headphones from "../../assets/img/headphones.png";
import { NavLink } from "react-router-dom";

function Supply() {
  return (
    <div className={styles.supply}>
      <div className={styles.supplyItem}>
        <div className={styles.supplyInfo}>
          <h2>
            new <br /> arrivals
          </h2>
          <NavLink to="/product/1">Shop now</NavLink>
        </div>

        <img className={styles.bcgImg} src={headphones} alt="" />
      </div>
      <div className={styles.supplyItem}>
        <h6 to="/product/2">FREE SHIPPING & REFUND GUARANTEE!</h6>
      </div>
      <div className={styles.supplyItem}>
        <div className={styles.supplyInfo}>
          <h5>20% OFF</h5>
          <h4>
            smart <br /> watches
          </h4>
        </div>

        <img className={styles.bcgImg} src={watch} alt="" />
      </div>
    </div>
  );
}

export default Supply;
