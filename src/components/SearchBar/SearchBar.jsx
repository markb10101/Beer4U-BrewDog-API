import React from "react";
import styles from "./SearchBar.module.scss";


const SearchBar = (props) => {

  const { updateSearchText } = props;

  return (
    <>
      <span className={styles.searchBar}><input onChange={e => updateSearchText(e.target.value)} type="text" placeholder="Search Beers" /></span>
    </>
  );
};

export default SearchBar;
