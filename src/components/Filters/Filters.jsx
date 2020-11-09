import React from "react";
import styles from "./Filters.module.scss";

const Filters = (props) => {

  const {
    abvFilter,
    setAbvFilter,
    classicFilter,
    setClassicFilter,
    acidFilter,
    setAcidFilter
  } = props;

  const optionTextAbv = "High ABV (>6.0%)";
  const optionTextClassic = "Classic Range";
  const optionTextAcid = "Acidic (Ph<4.0)";

  const handleClickAbv = () => {
    setAbvFilter(!abvFilter);
  }

  const handleClickClassic = () => {
    setClassicFilter(!classicFilter);
  }

  const handleClickAcid = () => {
    setAcidFilter(!acidFilter);
  }

  return (
    <div className={styles.sidePanel}>
      <p>Filter:</p>
      <div className={styles.listContainer}>
        <ul>
          <li><span className={styles.optionText}>{optionTextAbv}: </span><input onClick={handleClickAbv} type="checkbox" /></li>
          <li><span className={styles.optionText}>{optionTextClassic}: </span><input onClick={handleClickClassic} type="checkbox" /></li>
          <li><span className={styles.optionText}>{optionTextAcid}: </span><input onClick={handleClickAcid} type="checkbox" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
