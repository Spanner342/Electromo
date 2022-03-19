import React from "react";
import styles from "./Nav.module.css";
import home from "../../assets/img/home.png";
import checkout from "../../assets/img/checkout.png";
import logIn from "../../assets/img/logIn.png";
import user from "../../assets/img/user.png";
import wish from "../../assets/img/wish.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">
        <img src={home} alt="#" />
        <span>Home</span>
      </NavLink>
      <a href="#">
        <img src={wish} alt="#" />
        <span>Wish list (0)</span>
      </a>
      <a href="#">
        <img src={user} alt="#" />
        <span>My Account</span>
      </a>
      <a href="#">
        <img src={logIn} alt="#" />
        <span>Log In</span>
      </a>
      <a href="#">
        <img src={checkout} alt="#" />
        <span>Checkout</span>
      </a>
    </nav>
  );
}

export default Nav;
