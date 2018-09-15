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

// import React from "react";
// import PropTypes from "prop-types";
// import styles from "./App.css";
// import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
// import FlatButton from "material-ui/FlatButton";
// import beerkeg from "../assets/images/beer-keg.png";
// import { Link } from "react-router-dom";

// class Keg extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.handleKegDelete = this.handleKegDelete.bind(this);
//     this.handleKegEdit = this.handleKegEdit.bind(this);
//   }

//   handleKegDelete(event) {
//     event.preventDefault();
//     this.props.onKegDelete({
//       id: this.id
//     });
//   }

//   handleKegEdit(event) {
//     event.preventDefault();
//     this.props.findKeg({
//       id: this.id
//     });
//   }

//   render() {
//     return (
//       <div className={styles.kegCard}>
//         <Card>
//           <CardHeader
//             avatar={beerkeg}
//             title={this.props.name}
//             subtitle={this.props.brewer}
//             actAsExpander={true}
//             showExpandableButton={true}
//           />
//           <CardActions>
//             <Link
//               id={this.props.id}
//               onClick={this.handleKegEdit}
//               to={"/editKegForm/:id"}
//             >
//               <FlatButton label="Edit" />
//             </Link>
//             <FlatButton
//               label="Delete"
//               id={this.props.id}
//               onClick={this.handleKegDelete}
//             />
//           </CardActions>
//           <CardText expandable={true}>
//             {this.props.description} <p> {this.props.abv} ABV </p>
//             <p>$ {this.props.price}</p>
//           </CardText>
//         </Card>
//       </div>
//     );
//   }
// }

// Keg.propTypes = {
//   name: PropTypes.string,
//   brewer: PropTypes.string,
//   description: PropTypes.string,
//   abv: PropTypes.string,
//   price: PropTypes.string,
//   id: PropTypes.string,
//   onKegDelete: PropTypes.func,
//   onKegEdit: PropTypes.func,
//   findKeg: PropTypes.func
// };

// export default Keg;
