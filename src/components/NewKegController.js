import React from "react";
import PropTypes from "prop-types";
import ConfirmationQuestions from "./ConfirmationQuestions";
import NewKegForm from "./NewKegForm";

class NewKegController extends React.Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <div>
        <NewKegForm onNewKegCreation={this.props.onNewKegCreation} />
      </div>
    );
  }
}

NewKegController.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegController;
