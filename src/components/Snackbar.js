import React from "react";
import Snackbar from "material-ui/Snackbar";
import RaisedButton from "material-ui/RaisedButton";
import styles from "./App.css";

export default class SnackbarExampleSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div className={styles.kegButton}>
        <RaisedButton
          type="submit"
          onClick={this.handleClick}
          label="Add to my Keg List"
        />
        <Snackbar
          open={this.state.open}
          message="Keg Added to System"
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}
