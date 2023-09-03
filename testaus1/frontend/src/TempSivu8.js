import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Description from "./Description";

function Map(props) {
  return (
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      zoom={12}
      center={[62.59246,29.76896]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      <Description
        title={"Paina tästä"}
        markerPosition={[62.60001924465725, 29.765277134156438]}
        description="Tänne se tulee"
      />
    </MapContainer>
  );
};

export default Map;