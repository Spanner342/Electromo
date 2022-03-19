import React from "react";
import styles from "./Info.module.css";
import iphone from "../../assets/img/iphone.png";
import arrowBlack from "../../assets/img/arrowBlack.png";

function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.iLeft}>
        <h3>iphone X</h3>
        <p>iOS 11 makes iPhone so smart, it learns from you.</p>
        <a>Shop now!</a>
      </div>
      <div className={styles.iRight}>
        <img className={styles.bcg} src={iphone} alt="#" />
        {/* <button className={styles.btnLeft}></button>
        <button className={styles.btnRight}></button> */}
      </div>
    </div>
  );
}

export default Info;
