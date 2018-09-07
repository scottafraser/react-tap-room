import React from "react";
import { Link } from "react-router-dom";
import Keg from "./Keg";
import styles from "./App.css";

const masterKegList = [
  {
    name: "Ruby Zozzle",
    brewer: "Hi-Wheel",
    description: "Sparkling Wine & Grapefruit",
    abv: "6.8%",
    price: "7",
    remaining: "20"
  },
  {
    name: "Tart N Juicy",
    brewer: "Epic",
    description: "Sour IPA",
    abv: "4.5%",
    price: "6",
    remaining: "60"
  },
  {
    name: "Hamm's",
    brewer: "Miller/Coors",
    description: "American Lager",
    abv: "4.7%",
    price: "3",
    remaining: "65"
  },
  {
    name: "Prismatic",
    brewer: "Ninkasi",
    description: "Juicy IPA",
    abv: "5.9%",
    price: "6",
    remaining: "75"
  },
  {
    name: "Juicy Haze",
    brewer: "New Belgium",
    description: "India Pale Ale",
    abv: "7.5%",
    price: "6",
    remaining: "18"
  },
  {
    name: "8 Hop",
    brewer: "New Belgium",
    description: "Pale Ale",
    abv: "5.5%",
    price: "6",
    remaining: "58"
  }
];

function KegList() {
  var kegListStyles = {
    backgroundColor: "#ecf0f1",
    fontFamily: "sans-serif",
    paddingTop: "50px",
    textAlign: "center"
  };

  return (
    <div style={kegListStyles}>
      <h2>LIST OF KEGS</h2>
      <div className={styles.list}>
        {masterKegList.map((keg, index) => (
          <Keg
            name={keg.name}
            brewer={keg.brewer}
            description={keg.description}
            abv={keg.abv}
            price={keg.price}
            remaining={keg.remaining}
            key={index}
          />
        ))}
      </div>
      <h3>
        Would you like to return <Link to="/">Home</Link> instead?
      </h3>
    </div>
  );
}

export default KegList;
