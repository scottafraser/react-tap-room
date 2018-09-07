import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import styles from "./App.css";

function NewKegForm(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
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

  return (
    <div className={styles.form}>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          ref={input => {
            _name = input;
          }}
        />
        <br />
        <br />
        <input
          type="text"
          id="brewer"
          placeholder="Brewery"
          ref={input => {
            _brewer = input;
          }}
        />
        <br />
        <br />
        <textarea
          id="description"
          placeholder="Describe the beer"
          ref={textarea => {
            _description = textarea;
          }}
        />
        <br />
        <br />
        <textarea
          id="abv"
          placeholder="Describe your abv."
          ref={textarea => {
            _abv = textarea;
          }}
        />
        <br />
        <br />
        <textarea
          id="price"
          placeholder="Set a price"
          ref={textarea => {
            _price = textarea;
          }}
        />
        <br />
        <br />
        <textarea
          id="remaining"
          placeholder="Quantity left"
          ref={textarea => {
            _remaining = textarea;
          }}
        />
        <br />
        <br />
        <button type="submit">Add Keg</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
