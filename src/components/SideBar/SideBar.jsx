import React from "react";
import styles from "./SideBar.module.scss";
import SearchBar from '../SearchBar';
import Filters from '../Filters';

const SideBar = (props) => {

  const {
    updateSearchText,
    abvFilter,
    setAbvFilter,
    classicFilter,
    setClassicFilter,
    acidFilter,
    setAcidFilter
  } = props;

  return (
    <div className={styles.sideBar}>
      <SearchBar updateSearchText={updateSearchText} />
      <Filters
        abvFilter={abvFilter}
        setAbvFilter={setAbvFilter} 
        classicFilter={classicFilter}
        setClassicFilter={setClassicFilter}
        acidFilter={acidFilter}
        setAcidFilter={setAcidFilter}/>
    </div>
    
  );
};

export default SideBar;
