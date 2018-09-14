import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Header from "./Header";
import Splash from "./Splash";
import KegList from "./KegList";
import Error404 from "./Error404";
import NewKegForm from "./NewKegForm";
import styles from "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import masterKegList from "./KegListService";
import EditKegForm from "./EditKegForm";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addKegList: masterKegList.map(keg => keg),
      currentKeg: "nothing"
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleDeleteingKeg = this.handleDeleteingKeg.bind(this);
    this.handleEditKeg = this.handleEditKeg.bind(this);
    this.findKeg = this.findKeg.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    let newAddKegList = this.state.addKegList.slice();
    newAddKegList.push(newKeg);
    this.setState({ addKegList: newAddKegList });
  }

  findKeg(thisKeg) {
    console.log(thisKeg.id);
    let newDeleteKegList = this.state.addKegList.slice();
    newDeleteKegList.forEach(function(keg) {
      if (thisKeg.id === keg.id) {
        let newKeg = keg;
        this.setState({ currentKeg: newKeg });
      }
    });
    console.log(this.state.currentKeg);
  }

  handleDeleteingKeg(thisKeg) {
    let newDeleteKegList = this.state.addKegList.slice();
    newDeleteKegList.forEach(function(keg) {
      if (thisKeg.id === keg.id) {
        newDeleteKegList.splice(0, 1);
        alert(keg.name + " deleted");
      }
    });
    this.setState({ addKegList: newDeleteKegList });
  }

  handleEditKeg(thisKeg) {
    var newDeleteKegList = this.state.addKegList.slice();
    newDeleteKegList.forEach(function(keg) {
      if (thisKeg.id === keg.id) {
        newDeleteKegList.splice(0, 1);
        alert(keg.name + " deleted");
      }
    });
    this.setState({ addKegList: newDeleteKegList });
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
                render={() => (
                  <KegList
                    deleteKeg={this.handleDeleteingKeg}
                    kegList={this.state.addKegList}
                    findKeg={this.findKeg}
                  />
                )}
              />
              <Route
                path="/NewKegForm"
                render={() => (
                  <NewKegForm
                    onNewKegCreation={this.handleAddingNewKegToList}
                  />
                )}
              />
              <Route
                path="/editKegForm/"
                render={() => <EditKegForm findKeg={this.findKeg} />}
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
