import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Header from "./Header";
import Splash from "./Splash";
import KegList from "./KegList";
import Error404 from "./Error404";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="content">
          <Header />
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/kegList" component={KegList} />
            <Route component={Error404} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
