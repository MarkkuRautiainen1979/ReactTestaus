import React, { Component } from "react";
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'

const position = [62.59246,29.76896];
const position2 = [62.60001924465725, 29.765277134156438];

class Kartta extends Component {
    render() {
        return (
        <MapContainer style={{ height:"800px" }} center={position} zoom={13}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={position}>
                <Popup>Riveria</Popup>
            </Marker>
            <Marker position={position2}>
                <Popup>Kaupungintalo</Popup>
            </Marker>
        </MapContainer>
        );
    }
}
export default Kartta;