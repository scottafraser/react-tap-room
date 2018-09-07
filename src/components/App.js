import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Header from "./Header";
import Splash from "./Splash";
import KegList from "./KegList";
import Error404 from "./Error404";
import NewKegForm from "./NewKegForm";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
    return (
      <HashRouter>
        <div className="content">
          <Header />
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route
              path="/kegList"
              render={() => (
                <KegList onNewKegCreation={this.state.masterKegList} />
              )}
            />
            <Route path="/NewKegForm" component={NewKegForm} />
            <Route component={Error404} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
