import React from "react";
import styles from "./DashBoard.module.scss";
import BeerCard from "../BeerCard";

const DashBoard = (props) => {

  const { beers } = props;

  const getBeerJsx = (beer) => <BeerCard beer={beer} />

  return (
    <>
      <div>{beers.map(getBeerJsx)}</div>
    </>
  );
};

export default DashBoard;
