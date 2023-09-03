
import React, { Component } from "react";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

// koordinaatit Openstreetmap.org
const keskipiste =[64.10505,25.48116] // Suomen keskipiste, Siikalatva Talasneva
const position1 = [62.59246,29.76896]; // Riveria
const position2 = [60.17035,24.95129]; // Helsinki
const position3 = [65.01381,25.46416]; //Oulu
const position4 = [66.50251,25.73048]; // Rovaniemi
const position5 = [70.08175,27.87125]; // Nuorgam
const position6 = [59.82742,22.96813]; // Hanko



class Kartta extends Component {
  render() {
      return (
      <MapContainer style={{ height:"800px" }} center={keskipiste} zoom={5}>
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker position={keskipiste}>
              <Popup>Suomen maantieteellinen keskipiste, Siikalatvan Talasneva</Popup>
          </Marker>   
          <Marker position={position1}>
              <Popup>Riveria</Popup>
          </Marker>   
          <Marker position={position2}>
              <Popup>Helsinki</Popup>
          </Marker>  
          <Marker position={position3}>
              <Popup>Oulu</Popup>
          </Marker>  
          <Marker position={position4}>
              <Popup>Rovaniemi</Popup>
          </Marker>  
          <Marker position={position5}>
              <Popup>Nuorgam</Popup>
          </Marker>  
          <Marker position={position6}>
              <Popup>Hanko</Popup>
          </Marker>  
      </MapContainer>
      );
  }
}

export default Kartta;
