import React, { Component } from "react";
import elephant from "./elephant.svg";
import gun from "./gun.svg";
 
 
class Kuvia extends Component {
  render() {
    return (
      <div>
        <h2>Lisätään kuvia</h2>
        <img src={elephant} alt="Elefantin kuva" width="200px" height="150px"/>
        <img src={gun} alt="pyssy" width="50px" height="50px" />
      </div>
    );
  }
}
 
export default Kuvia;