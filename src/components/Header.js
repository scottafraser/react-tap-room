import React from "react";
// import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./App.css";
import FlatButton from "material-ui/FlatButton";
import beers from "../assets/images/beers.png";

function Header() {
  return (
    // <Switch>
    <div>
      <img className={styles.beerLogo} src={beers} alt="beer" />
      <div className={styles.nav}>
        <Link to="/">
          <FlatButton label="Home" default={true} />
        </Link>
        <Link to="/kegList">
          <FlatButton label="Keg List" default={true} />
        </Link>
        <Link to="/newKegForm">
          <FlatButton label="Add Keg" default={true} />
        </Link>
      </div>
    </div>
    // </Switch>
  );
}

export default Header;
