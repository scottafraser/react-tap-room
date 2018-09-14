import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import styles from "./App.css";
import Snackbar from "./Snackbar";
import KegList from "./KegList";

class EditKegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kegToEdit: props.id
    };
    this.handleEditKegFormSubmission = this.handleEditKegFormSubmission.bind(
      this
    );
  }

  handleEditKegFormSubmission(event) {
    let editKeg = this.state.kegToEdit;
    let _name = editKeg.name;
    let _brewer = editKeg.brewer;
    let _description = editKeg.description;
    let _abv = editKeg.abv;
    let _price = editKeg.price;
    let _remaining = editKeg.remaining;
    event.preventDefault();
    this.onKegEdit({
      name: _name.value,
      brewer: _brewer.value,
      description: _description.value,
      abv: _abv.value,
      price: _price.value,
      remaining: _remaining.value,
      id: v4()
    });
    _name.value = "";
    _brewer.value = "";
    _description.value = "";
    _abv.value = "";
    _price.value = "";
    _remaining.value = "";
  }

  render() {
    return (
      <div className={styles.form}>
        <form onSubmit={this.handleEditKegFormSubmission}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            ref={input => {
              this._name = input;
            }}
          />
          <br />
          <br />
          <input
            type="text"
            id="brewer"
            placeholder="Brewery"
            ref={input => {
              this._brewer = input;
            }}
          />
          <br />
          <br />
          <textarea
            id="description"
            placeholder="Describe the beer"
            ref={textarea => {
              this._description = textarea;
            }}
          />
          <br />
          <br />
          <textarea
            id="abv"
            placeholder="Describe your abv."
            ref={textarea => {
              this._abv = textarea;
            }}
          />
          <br />
          <br />
          <textarea
            id="price"
            placeholder="Set a price"
            ref={textarea => {
              this._price = textarea;
            }}
          />
          <br />
          <br />
          <textarea
            id="remaining"
            placeholder="Quantity left"
            ref={textarea => {
              this._remaining = textarea;
            }}
          />
          <br />
          <br />
          <Snackbar />
        </form>
      </div>
    );
  }
}

EditKegForm.propTypes = {
  onKegEdit: PropTypes.func
};

export default EditKegForm;
