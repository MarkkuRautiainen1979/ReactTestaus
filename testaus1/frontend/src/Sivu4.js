import React, { Component } from "react";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

const position = [59.82742,22.96813];

class Kartta extends Component {
    render() {
        return (
        <MapContainer style={{ height:"800px" }} center={position} zoom={10}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={position}>
                <Popup>Eteläisin paikka</Popup>
            </Marker>
        </MapContainer>
        );
    }
}
export default Kartta;