import React from "react";
import PhoneIcon from "../../assets/img/phone.png";
import styles from "./Phone.module.css";

function Phone() {
  return (
    <div className={styles.phone}>
      <img src={PhoneIcon} alt="" />
      <span>800-2345-6789</span>
    </div>
  );
}

export default Phone;
