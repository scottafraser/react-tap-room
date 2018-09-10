import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import styles from "./App.css";
import Snackbar from "./Snackbar";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";

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

  const style = {
    marginLeft: 20
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleNewKegFormSubmission}>
        <Paper zDepth={2}>
          <TextField
            hintText="Name"
            style={style}
            underlineShow={false}
            ref={input => {
              _name = input;
            }}
          />
          <Divider />
          <TextField
            hintText="Brewery"
            style={style}
            underlineShow={false}
            ref={input => {
              _brewer = input;
            }}
          />
          <Divider />
          <TextField
            hintText="Description"
            style={style}
            underlineShow={false}
            ref={input => {
              _description = input;
            }}
          />
          <Divider />
          <TextField
            hintText="ABV"
            style={style}
            underlineShow={false}
            ref={input => {
              _abv = input;
            }}
          />
          <Divider />
          <TextField
            hintText="Price"
            style={style}
            underlineShow={false}
            ref={input => {
              _price = input;
            }}
          />
          <Divider />
          <TextField
            hintText="Volume"
            style={style}
            underlineShow={false}
            ref={input => {
              _remaining = input;
            }}
          />
          <Divider />
        </Paper>
        <br />
        <Snackbar />
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;

// <form onSubmit={handleNewKegFormSubmission}>
//   <input
//     type="text"
//     id="name"
//     placeholder="Name"
//     ref={input => {
//       _name = input;
//     }}
//   />
//   <br />
//   <br />
//   <input
//     type="text"
//     id="brewer"
//     placeholder="Brewery"
//     ref={input => {
//       _brewer = input;
//     }}
//   />
//   <br />
//   <br />
//   <textarea
//     id="description"
//     placeholder="Describe the beer"
//     ref={textarea => {
//       _description = textarea;
//     }}
//   />
//   <br />
//   <br />
//   <textarea
//     id="abv"
//     placeholder="Describe your abv."
//     ref={textarea => {
//       _abv = textarea;
//     }}
//   />
//   <br />
//   <br />
//   <textarea
//     id="price"
//     placeholder="Set a price"
//     ref={textarea => {
//       _price = textarea;
//     }}
//   />
//   <br />
//   <br />
//   <textarea
//     id="remaining"
//     placeholder="Quantity left"
//     ref={textarea => {
//       _remaining = textarea;
//     }}
//   />
//   <br />
//   <br />
//   <Snackbar />
// </form>;
