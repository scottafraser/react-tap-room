import React from "react";
import PropTypes from "prop-types";
import styles from "./App.css";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import beerkeg from "../assets/images/beer-keg.png";

function Keg(props) {
  return (
    <div className={styles.kegCard}>
      <Card>
        <CardHeader
          avatar={beerkeg}
          title={props.name}
          subtitle={props.brewer}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Edit" />
          <FlatButton label="Delete" />
        </CardActions>
        <CardText expandable={true}>
          {props.description} <p> {props.abv} ABV </p>
          <p>$ {props.price}</p>
        </CardText>
      </Card>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string
};

export default Keg;
