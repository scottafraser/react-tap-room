import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Switch>
      <div>
        <h1>Beers!</h1>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/kegList">Keg List</Link>
          </li>
          <li>
            <Link to="/contact" />
          </li>
        </ul>
      </div>
    </Switch>
  );
}

export default Header;
