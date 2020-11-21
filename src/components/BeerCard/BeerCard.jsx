import React from "react";
import styles from "./BeerCard.module.scss";

const BeerCard = (props) => {

  const { name, image_url, tagline, description, first_brewed, abv, ph } = props.beer;

  return (
    <div className={styles.cardContainer}>
      <h2>{name}</h2>
      <span className={styles.firstBrewed}>First Brewed: {first_brewed}</span>
      <div className={styles.beerCard}>

        <div className={styles.picture}>
          <img src={image_url} alt={name} />
          <span className={styles.data}>ABV:{abv} Ph:{ph}</span>
        </div>

        <span className={styles.info}>
          <h3>{tagline}</h3>
          <div className={styles.description}>{description}</div>
        </span>
      </div>
    </div>
  );
};

export default BeerCard;
