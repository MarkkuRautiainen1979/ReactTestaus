import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import CameraSelection from './CameraSelection/camera-selection'
import CameraView from './CameraView/CameraView'

const position1 = [62.59246,29.76896];
const position2 = [62.05345,29.60732]; //Hoilolan kamera id="C0750301"
const position3 = [62.53088,29.86225]; //Reijolan kamera id="C0854701"
const position4 = [62.43334,30.03642]; //Honkavaaran kamera id="C0854901"
const position5 = [62.59094,29.81336]; // Repokallion kamera id="C0857601"
 
class Kartta extends Component {
 
  constructor() {
    super();
    this.state = { selectedPresetId: 'C0854701' }
  }
 
  cameraSelected = (value) => {
    this.setState({ selectedPresetId: value });
  }
 
  render = () => {
    const { selectedPresetId } = this.state;
    return (
      <div className="app">
        <MapContainer style={{ height:"500px" }} center={position1} zoom={8}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={position1}>
                <Popup>Riveria</Popup>
            </Marker>
            <Marker position={position2}>
                <Popup>Hoilolan tiekamera</Popup>
            </Marker>
            <Marker position={position3}>
                <Popup>Reijolan tiekamera</Popup>
            </Marker>
            <Marker position={position4}>
                <Popup>Honkavaaran tiekamera</Popup>
            </Marker>
            <Marker position={position5}>
                <Popup>Repokallion tiekamera</Popup>
            </Marker>
        </MapContainer>
        <div className="app-header">
          <center><h2>Tiekameran näkymä</h2></center>
        </div>
        <CameraSelection
          selectedPresetId={this.state.selectedPresetId}
          onSelect={(value) => this.cameraSelected(value)}
        />
        {selectedPresetId ?
          <div className="camera-container">
            <CameraView presetId={selectedPresetId} />
          </div>
          : null
        }
      </div>
    );
  }
}
 
Kartta.propTypes = {
    selectedPresetId: PropTypes.string.isRequired
}
 
export default Kartta;