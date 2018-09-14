import React from "react";
import Keg from "./Keg";
import styles from "./App.css";
import PropTypes from "prop-types";
import masterKegList from "./KegListService";

function KegList(props) {
  function findKeg(newKeg) {
    props.foundKeg({
      id: newKeg.id
    });
    console.log(newKeg.id);
  }

  return (
    <div>
      <div className={styles.list}>
        {props.kegList.map((keg, id) => (
          <Keg {...keg} key={id} onKegDelete={findKeg} />
        ))}
      </div>
      <div className={styles.list}>
        {masterKegList.map((keg, index) => (
          <Keg {...keg} key={index} />
        ))}
      </div>

      <hr />
      <h3> All the beer</h3>
    </div>
  );
}

KegList.propTypes = {
  foundKeg: PropTypes.func,
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default KegList;
