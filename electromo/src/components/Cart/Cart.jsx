import { AppContext } from "../../App";
import React, { useContext } from "react";
import styles from "./Cart.module.css";
import cartIco from "../../assets/img/cart.png";
import arrow from "../../assets/img/arrow.png";

function Cart() {
  const { cart } = useContext(AppContext);
  return (
    <div className={styles.cart}>
      <button>
        <img src={cartIco} alt="" />
        <span>{cart.length}</span>
        <span>item(s)</span>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}

export default Cart;
