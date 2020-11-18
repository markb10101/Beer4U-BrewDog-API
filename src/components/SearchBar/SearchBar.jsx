import React from "react";
import styles from "./SearchBar.module.scss";


const SearchBar = (props) => {

  const { updateSearchText } = props;

  return (
    <div className={styles.searchContainer}>
      <p>Search:</p>
      <span className={styles.searchBar}><input onChange={e => updateSearchText(e.target.value)} type="text" placeholder="Search Beers" /></span>
    </div>
  );
};

export default SearchBar;
