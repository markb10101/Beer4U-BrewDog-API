import React, { useEffect } from 'react';
import styles from "./SpecialDeals.module.scss";

const SpecialDeals = (props) => {
  
const { user } = props;

let displayName = "";
let displayEmail = "";


if(user){
    console.log(user);
    displayName = user.displayName;
    displayEmail = user.email;
}

const specialDealSectionJSX = () => <a href="/">HIDE SPECIAL DEALS</a>


  return (
    <div className={styles.specialDeals}>
      <h2>Wow!!! Here are some Special Deals for you {displayName}!!!</h2>
      <p>GET THESE INCREDIBLE BEER-RELATED OFFERS:</p>
      <p>1: Cheap Beer!</p>
      <p>2: Inexpensive Pork Scratchings!</p>
      <p>3: Reduced Yeast!</p>
      <p>4: OFFER: Demijohns @ £1!</p>
      <p>We have emailed a magic beer voucher to: {displayEmail}</p>
      
      
    </div>
  )
}

export default SpecialDeals;