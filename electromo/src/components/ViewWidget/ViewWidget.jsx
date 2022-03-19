import React, { useContext } from "react";
import { AppContext } from "../../App";
import "./View.css";

export const ViewWidget = () => {
  const { viewActiv, setViewActive, currentProduct, addCart } =
    useContext(AppContext);
  return (
    <div
      onClick={() => setViewActive(false)}
      className={viewActiv ? "viewWidget activ" : "viewWidget"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={viewActiv ? "viewContent activ" : "viewContent"}
      >
        <div className="productImg">
          <img src={currentProduct.image} alt="" />
        </div>
        <div className="productInfo">
          <h2>{currentProduct.title}</h2>
          <ul>
            <li>Categories: {currentProduct.category} </li>
            <li>Product Code: Classic</li>
            <li>Reward Points: 1000</li>
            <li>Availability: In Stock</li>
          </ul>
          <div className="productPrice">${currentProduct.price}</div>
          <div className="productPoint">Price in reward points: 1000</div>
          <div className="productLine"></div>
          <button
            onClick={() => {
              addCart(currentProduct.id);
            }}
            className="productBtn"
          >
            Add cart
          </button>
        </div>
      </div>
    </div>
  );
};
