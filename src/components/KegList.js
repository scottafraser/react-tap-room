import React from "react";
import { Link } from "react-router-dom";

function KegList() {
  return (
    <div>
      <h2>LIST OF KEGS</h2>
      <h3>
        Would you like to return <Link to="/">home</Link> instead?
      </h3>
    </div>
  );
}

export default KegList;
