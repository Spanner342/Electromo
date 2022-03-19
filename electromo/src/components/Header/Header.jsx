import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Cart from "../Cart/Cart";
import Catigories from "../Categories/Catigories";
import Nav from "../Nav/Nav";
import Phone from "../Phone/Phone";
import Search from "../Search/Search";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.hTop}>
          <NavLink to="/">
            <img className={styles.electromoLogo} src={Logo} alt="" />
          </NavLink>
          <Search />
          <Phone />
        </div>
        <div className={styles.hBottom}>
          <Catigories />
          <Nav />
          <Cart />
        </div>
      </div>
    </header>
  );
}

export default Header;
