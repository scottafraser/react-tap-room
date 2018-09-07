import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.brewer}</h3>
      <p>
        {props.description}
        {props.abv}
        {props.price}
      </p>
    </div>
  );
}

Keg.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Keg;
