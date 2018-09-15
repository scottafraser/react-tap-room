import React from "react";
import PropTypes from "prop-types";
import styles from "./App.css";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import beerkeg from "../assets/images/beer-keg.png";
import { Link } from "react-router-dom";

function Keg(props) {
  function handleKegDelete(event) {
    event.preventDefault();
    props.onKegDelete({
      id: this.id
    });
  }

  function handleKegEdit(event) {
    event.preventDefault();
    props.findKeg({
      id: this.id
    });
  }

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
          <Link to={"/editKegForm/:id"} params={{ id: 1 }}>
            <FlatButton label="Edit" id={props.id} onClick={handleKegEdit} />
          </Link>
          <FlatButton label="Delete" id={props.id} onClick={handleKegDelete} />
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
  price: PropTypes.string,
  id: PropTypes.string,
  onKegDelete: PropTypes.func,
  onKegEdit: PropTypes.func,
  findKeg: PropTypes.func
};

export default Keg;
