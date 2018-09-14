import React from "react";
import Keg from "./Keg";
import styles from "./App.css";
import PropTypes from "prop-types";

function KegList(props) {
  function deleteKeg(newKeg) {
    props.deleteKeg({
      id: newKeg.id
    });
  }

  function editKeg(newKeg) {
    props.findKeg({
      id: newKeg.id
    });
  }

  return (
    <div>
      <div className={styles.list}>
        {props.kegList.map((keg, id) => (
          <Keg {...keg} key={id} onKegDelete={deleteKeg} findKeg={editKeg} />
        ))}
      </div>
      <hr />
      <h3> All the beer</h3>
    </div>
  );
}

KegList.propTypes = {
  deleteKeg: PropTypes.func,
  findKeg: PropTypes.func,
  editKeg: PropTypes.func,
  kegList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default KegList;
