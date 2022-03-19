import React, { Component, useEffect, useRef } from "react";
import styles from "./Products.module.css";
import homeIco from "../../assets/img/homeico.png";
import { useContext } from "react";
import { AppContext } from "../../App";
import { NavLink, useParams } from "react-router-dom";
import Tabs from "../Tabs/Tabs";

export default function Products() {
  const { id } = useParams();

  const { products, addCart } = useContext(AppContext);

  const data = products.find((product) => +product.id === +id);

  return (
    <div className={styles.product}>
      <div className={styles.productBar}>
        <NavLink to="/">
          <img src={homeIco} alt="" />
        </NavLink>

        <span className={styles.barArrow}>></span>

        <span className={styles.barName}>{data.title}</span>
      </div>
      <div className={styles.productPage}>
        <div className={styles.productImg}>
          <img src={data.image} alt="" />
        </div>
        <div className={styles.productInfo}>
          <h2>{data.title}</h2>
          <ul>
            <li>Categories: {data.category} </li>
            <li>Product Code: Classic</li>
            <li>Reward Points: 1000</li>
            <li>Availability: In Stock</li>
          </ul>
          <div className={styles.productPrice}>${data.price}</div>
          <div className={styles.productPoint}>
            Price in reward points: 1000
          </div>
          <div className={styles.productLine}></div>
          <button
            onClick={() => {
              addCart(data.id);
            }}
            className={styles.productBtn}
          >
            Add cart
          </button>
        </div>
      </div>
      <Tabs description={data.description} />
    </div>
  );
}

function ProductPreview(props) {
  const { setViewActive, setCurrentProduct, setProdElem } =
    useContext(AppContext);
  const liElem = useRef();

  useEffect(() => {
    setProdElem(liElem);
  }, []);

  return (
    <li ref={liElem} className={styles.cProdct}>
      <div className={styles.pImg}>
        <a href={"/product/" + props.id + "/"}>
          <img src={props.image} alt="#" />
        </a>
      </div>
      <div className={styles.pInfo}>
        <div>${props.price}</div>
        <p className={styles.pName}>
          <a href={`/product/${props.id}/`}>{props.name}</a>
        </p>
        <div className={styles.pDesc}>{props.description}</div>
      </div>
      <div className={styles.pBtn}>
        <button
          onClick={() => {
            props.add(props.id);
          }}
          className={"cartBtn" + props.added}
        ></button>
        <button className={styles.wishBtn}></button>
        <button className={styles.compareBtn}></button>
        <button
          onClick={() => {
            setViewActive(true);
            setCurrentProduct(props.prod);
          }}
          className={styles.viewBtn}
        ></button>
      </div>
    </li>
  );
}

export { ProductPreview };
