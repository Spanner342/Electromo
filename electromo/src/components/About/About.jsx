import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./About.module.css";
import homeIco from "../../assets/img/homeico.png";
import people1 from "../../assets/img/people1.jpg";
import people2 from "../../assets/img/people2.jpg";
import people3 from "../../assets/img/people3.jpg";
import people4 from "../../assets/img/people4.jpg";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.bar}>
        <NavLink to="/">
          <img src={homeIco} alt="" />
        </NavLink>

        <span className={styles.barArrow}>></span>

        <span className={styles.barName}>About Us</span>
      </div>
      <div className={styles.aboutPage}>
        <div className={styles.aboutItem}>
          <div className={styles.photo}>
            <img src={people1} alt="" />
          </div>
          <h3>Robert Johnson</h3>
          <p>
            Senior salesman with 15 years of experience. He knows everything
            about the products he offers.
          </p>
        </div>
        <div className={styles.aboutItem}>
          <div className={styles.photo}>
            <img src={people2} alt="" />
          </div>
          <h3>Jessica Priston</h3>
          <p>
            Mega positive shop assistant always ready to help you make the right
            choice and charm you with a smile.
          </p>
        </div>
        <div className={styles.aboutItem}>
          <div className={styles.photo}>
            <img src={people3} alt="" />
          </div>
          <h3>Sam Kromstain</h3>
          <p>
            Wholesale manager. Contact him if you want to buy a batch of the
            products offered at our store.
          </p>
        </div>
        <div className={styles.aboutItem}>
          <div className={styles.photo}>
            <img src={people4} alt="" />
          </div>
          <h3>Edna Barton</h3>
          <p>
            Quality control manager. Her mission is to check the products we
            ship and settle quality issues if any.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
