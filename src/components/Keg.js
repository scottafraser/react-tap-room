import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.brewer}</h3>
      <p>Style: {props.description}</p>
      <p>{props.abv} ABV </p>
      <p>$ {props.price}</p>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string
};

export default Keg;
