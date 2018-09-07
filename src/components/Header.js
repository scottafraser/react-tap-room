import React from "react";
import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./App.css";

function Header() {
  return (
    <Switch>
      <div>
        <h1 className={styles.header}>Beers!</h1>
        <h4 className={styles.nav}>
          <Link to="/">Home </Link>
          <Link to="/kegList">Keg List </Link>
          <Link to="/newKegForm">Add a Keg</Link>
        </h4>
      </div>
    </Switch>
  );
}

export default Header;
