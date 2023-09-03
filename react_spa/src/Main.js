import React, { Component } from "react";
import {
  HashRouter, Routes, Route, NavLink
} from "react-router-dom";
import Koti from "./Koti";
import Tarina from "./Tarina";
import Yhteys from "./Yhteys";
import Kartta from "./Kartta";
import Kuvia from "./Kuvia";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Perus Single Page Application (SPA)</h1>
          <ul className="header">
            <li><NavLink exact to="./">Koti</NavLink></li>
            <li><NavLink to="/Tarina">Tarina</NavLink></li>
            <li><NavLink to="/Kartta">Kartta</NavLink></li>
            <li><NavLink to="/Yhteys">Yhteys</NavLink></li>
            <li><NavLink to="/Kuvia">Kuvia</NavLink></li>
          </ul>
          <div className="content">
          <Routes>
            <Route path="/" element={<Koti />}/>
            <Route path="/Tarina" element={<Tarina/>}/>
            <Route path="/Yhteys" element={<Yhteys/>}/>
            <Route path="/Kartta" element={<Kartta/>}/>
            <Route path="/Kuvia" element={<Kuvia/>}/>
          </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

 
export default Main;
