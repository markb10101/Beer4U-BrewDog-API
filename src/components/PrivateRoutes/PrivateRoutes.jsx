import React, { useEffect } from 'react';
import firebase from '../../firebase';
import { navigate } from "@reach/router";


const PrivateRoutes = (props) => {
  const { children, user } = props;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(!user) {
        alert('You must be logged in to see Special Deals!');
        navigate('/');
      }
    })
  }, [])

  if(user){
  return (
    <>
      {children}
    </>
  )
}else{
    return <></>
}
}


export default PrivateRoutes;