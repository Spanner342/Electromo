import React, { useRef, useContext } from "react";
import { AppContext } from "../../App";
import styles from "./Search.module.css";

function Search() {
  const { setProducts } = useContext(AppContext);

  const searchElem = useRef();

  function search() {
    let localData = localStorage.getItem("data");
    if (localData) localData = JSON.parse(localData);
    if (!localData || localData.length === 0) {
      return;
    }

    const value = searchElem.current.value.toLowerCase();

    let productsTmp = localData.filter((product) => {
      return product.title.toLowerCase().indexOf(value) !== -1;
    });

    setProducts([...productsTmp]);
  }

  return (
    <div className={styles.search}>
      <input
        ref={searchElem}
        onChange={search}
        type="text"
        placeholder="Search"
      />
      {/* <button>Search</button> */}
    </div>
  );
}

export default Search;
