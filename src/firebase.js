import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKOokT4ngM7fuOcYohfAcj_UCO0nmVttI",
    authDomain: "beerdog4u.firebaseapp.com",
    databaseURL: "https://beerdog4u.firebaseio.com",
    projectId: "beerdog4u",
    storageBucket: "beerdog4u.appspot.com",
    messagingSenderId: "396904543729",
    appId: "1:396904543729:web:25fc7943bc45481980c050",
    measurementId: "G-EKP36X53J7"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
