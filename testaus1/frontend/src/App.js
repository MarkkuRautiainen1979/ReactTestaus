import React, { Component } from "react";
import {
  HashRouter, Routes, Route, NavLink
} from "react-router-dom";
// import import 'leaflet/dist/leaflet.css';   ! Älä import leaflet.css yksittäiseen komponenttiin, sotkee grafiikat. Laita Index.html tiedostoon leaflet.css
import Sivu1 from "./Sivu1";
import Sivu2 from "./Sivu2";
import Sivu3 from "./Sivu3";
import Sivu4 from "./Sivu4";
import Sivu5 from "./Sivu5";
import Sivu6 from "./Sivu6";
import Sivu7 from "./Sivu7";
import Sivu8 from "./Sivu8";

//<Route path="/Sivu7" element={<Sivu7/>}/>
//<li><NavLink to="/Sivu7">Haku2</NavLink></li>

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <center><h1>Valitse </h1></center>
          
          <div className="content">
          <Routes>
            <Route path="/" element={<Sivu1 />}/>
            <Route path="/Sivu2" element={<Sivu2/>}/>
            <Route path="/Sivu3" element={<Sivu3/>}/>
            <Route path="/Sivu4" element={<Sivu4/>}/>
            <Route path="/Sivu5" element={<Sivu5/>}/>
            <Route path="/Sivu6" element={<Sivu6/>}/>
            <Route path="/Sivu7" element={<Sivu7/>}/>
            <Route path="/Sivu8" element={<Sivu8/>}/>
          </Routes>
          </div>
          <ul className="header">
            <li><NavLink exact to="./">Kartta1</NavLink></li>
            <li><NavLink to="/Sivu2">Kartta2</NavLink></li>
            <li><NavLink to="/Sivu3">Pohjoisin paikka Suomessa, Nuorgam</NavLink></li>
            <li><NavLink to="/Sivu4">Eteläisin paikka Suomessa, Hanko</NavLink></li>
            <li><NavLink to="/Sivu5">Testikamera</NavLink></li>
            <li><NavLink to="/Sivu6">Hakutesti</NavLink></li>
            <li><NavLink to="/Sivu7">Haku2</NavLink></li>
            <li><NavLink to="/Sivu8">Karttapop</NavLink></li>
          </ul>
        </div>
      </HashRouter>
    );
  }
}

 
export default App;