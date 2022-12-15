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
      <NavLink to="/About/">
        <img src={wish} alt="#" />
        <span>About Us</span>
      </NavLink>
      <NavLink to="/Privacy">
        <img src={user} alt="#" />
        <span>Privacy Policy</span>
      </NavLink>
      {/* <a href="#">
        <img src={logIn} alt="#" />
        <span>Log In</span>
      </a> */}
      <a href="#">
        <img src={checkout} alt="#" />
        <span>Contact Us</span>
      </a>
    </nav>
  );
}

export default Nav;
