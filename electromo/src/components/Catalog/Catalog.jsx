import { useContext, useRef } from "react";
import styles from "./Catalog.module.css";
import { ProductPreview } from "../Products/Products";
import { AppContext } from "../../App";

function Catalog() {
  const { products, setProducts, ulElem, cart, addCart, prodElem } =
    useContext(AppContext);

  const btnNextElem = useRef();

  console.log(prodElem);
  function cScroll(event) {
    const dir = event.target !== btnNextElem.current ? "prev" : "next";

    const ul = ulElem.current;
    const prodElemWitdh = prodElem.current.offsetWidth;

    console.log(prodElemWitdh);
    let x = ul.style.transform;
    x = x.replace("translateX(", "").replace("px)", "");

    if (!x) x = 0;
    x = Math.abs(+x);

    x += (prodElemWitdh - 0.1) * (dir === "prev" ? -1 : 1);

    let stop = products.length * prodElemWitdh - ul.offsetWidth;

    if (x <= stop) ul.style.transform = `translateX(-${x}px)`;
  }

  return (
    <div className={styles.catalog}>
      <div className={styles.cLine}>
        <span>Products</span>
        <div className={styles.cBtn}>
          <button onClick={cScroll} className={styles.cBtnLeft}></button>
          <button
            ref={btnNextElem}
            onClick={cScroll}
            className={styles.cBtnRight}
          ></button>
        </div>
      </div>
      <ul ref={ulElem} className={styles.cList}>
        {products.map((product, index) => {
          let added = cart.indexOf(product.id) !== -1 ? " added" : "";
          return (
            <>
              <ProductPreview
                key={index}
                added={added}
                image={product.image}
                name={product.title}
                description={product.description}
                id={product.id}
                price={product.price}
                add={addCart}
                prod={product}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Catalog;
