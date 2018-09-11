import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Header from "./Header";
import Splash from "./Splash";
import KegList from "./KegList";
import Error404 from "./Error404";
import NewKegForm from "./NewKegForm";
import styles from "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    var newAddKegList = this.state.addKegList.slice();
    newAddKegList.push(newKeg);
    this.setState({ addKegList: newAddKegList });
  }

  render() {
    return (
      <HashRouter>
        <MuiThemeProvider>
          <div className={styles.content}>
            <Header />
            <Switch>
              <Route exact path="/" component={Splash} />
              <Route
                path="/kegList"
                render={() => <KegList kegList={this.state.addKegList} />}
              />
              <Route
                path="/NewKegForm"
                render={() => (
                  <NewKegForm
                    onNewKegCreation={this.handleAddingNewKegToList}
                  />
                )}
              />
              <Route component={Error404} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default Main;
