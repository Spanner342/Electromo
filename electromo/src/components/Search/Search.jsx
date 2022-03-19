import React from "react";
import styles from "./Search.module.css";

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" />
      <button>Search</button>
    </div>
  );
}

export default Search;
