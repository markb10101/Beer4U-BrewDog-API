import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import SideBar from './components/SideBar';
import DashBoard from './components/DashBoard';
import Routes from "./components/Routes";
import firebase, { provider } from "./firebase";

const App = () => {

  const [searchText, updateSearchText] = useState("");
  const [beers, setBeers] = useState([]);
  const [user, setUser] = useState(null);

  const [abvFilter, setAbvFilter] = useState(false);
  const [classicFilter, setClassicFilter] = useState(false);
  const [acidFilter, setAcidFilter] = useState(false);

  const signInOut = () => {
    if (!user) {
      // sign in
      firebase.auth().signInWithRedirect(provider);
    } else {
      // sign out
      firebase
        .auth()
        .signOut()
        .then(() => {
          setUser(null);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  const getApiData = (searchTerm) => {

    let urlString = 'https://api.punkapi.com/v2/beers?&per_page=80';

    if (abvFilter) {
      urlString += '&abv_gt=6.0';
    }
    if (classicFilter) {
      urlString += '&brewed_before=01-2010';
    }
    if (searchTerm !== "") {
      urlString += '&beer_name=' + searchTerm;
    }

    console.log(urlString);

    fetch(urlString)
      .then(response => response.json())
      .then(response => {

        // filter returned beers where acidity filter matches
        const filteredBeers = acidFilter ?
          response.filter(beer => {
            return (beer.ph < 4.0 && beer.ph != null)
          })
          :
          response;

        setBeers(filteredBeers);

      })

      .catch((err) => {
        console.log(err);
      });

  }

  useEffect(() => {
    getApiData(searchText);
    getUser();
  }, [abvFilter, classicFilter, acidFilter, searchText])

  const userName = () => {
    return user ? (
      <span>Hello {user.displayName}</span>
    ) : (
        <span>Hello Guest</span>
      )
  }

  const logInOutButtonText = () => {
    return user ? "Log Out" : "Log In"
  }




  return (

    <div className={styles.pageContainer}>
      <header>
        <h1>Beer4U - BrewDog Beer Selector</h1>
        
      </header>
      <div>{userName()}<span className={styles.logInButton}><button onClick={signInOut}>{logInOutButtonText()}</button></span>
      <section><a href="/specialdeals">SPECIAL DEALS THIS WAY</a></section></div>
      <div className={styles.mainContainer}>
        <div className={styles.sideBar}>
          <SideBar
            updateSearchText={updateSearchText}
            abvFilter={abvFilter}
            setAbvFilter={setAbvFilter}
            classicFilter={classicFilter}
            setClassicFilter={setClassicFilter}
            acidFilter={acidFilter}
            setAcidFilter={setAcidFilter} />
        </div>
        <div className={styles.dashBoard}>
          
          <section>
            <Routes user={user} />
          </section>
          <DashBoard beers={beers} />
        </div>
      </div>
    </div>
  );
}

export default App;
