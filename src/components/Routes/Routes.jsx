import React from "react";
import { Router } from "@reach/router";
//import { firestore } from "../../firebase";
import SpecialDeals from "../SpecialDeals";
import PrivateRoutes from "../PrivateRoutes";


const Routes = (props) => {
   
    const { user } = props;
  
    return (

      <Router>    

        <PrivateRoutes path="/" user={user}>
          <SpecialDeals path="specialdeals" user={user}/>
        </PrivateRoutes>

      </Router>

    );
  };
  
  export default Routes;