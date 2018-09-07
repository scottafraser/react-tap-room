import React from "react";
import { Switch } from "react-router-dom";
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
            <Link to="/newKegForm">Add a Keg</Link>
          </li>
        </ul>
      </div>
    </Switch>
  );
}

export default Header;
