import React, { Component } from "react";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

const position = [70.08175,27.87125];

class Kartta extends Component {
    render() {
        return (
        <MapContainer style={{ height:"800px" }} center={position} zoom={10}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={position} >
                <Popup>Pohjoisin paikka</Popup>
            </Marker>
        </MapContainer>
        );
    }
}
export default Kartta;