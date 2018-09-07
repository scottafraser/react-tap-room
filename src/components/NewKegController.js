import React from "react";
import PropTypes from "prop-types";
import ConfirmationQuestions from "./ConfirmationQuestions";
import NewKegForm from "./NewKegForm";

class NewKegController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(
      this
    );
  }

  handleTroubleshootingConfirmation() {
    this.setState({ formVisibleOnPage: true });
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = (
        <NewKegForm onNewKegCreation={this.props.onNewKegCreation} />
      );
    } else {
      currentlyVisibleContent = (
        <ConfirmationQuestions
          onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}
        />
      );
    }
    return <div>{currentlyVisibleContent}</div>;
  }
}

NewKegController.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegController;
