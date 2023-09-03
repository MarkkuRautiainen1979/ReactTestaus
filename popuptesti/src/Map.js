import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Description from "./Description";
import haversine from "./Haversine-formula.js"

let tulos = haversine([62.59246,29.76896],[60.17035,24.95129],"km")

const Map = (props) => {
  return (
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      zoom={6}
      center={[62.59246,29.76896]}
    >
      <h3>Joensuun ja Helsingin etäisyys on : {tulos} </h3>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri"
      />
      <Description
        title={"Riveria"}
        markerPosition={[62.59246,29.76896]}
        description="Riveria"
      />
      <Description
        title={"Helsinki"}
        markerPosition={[60.17035,24.95129]}
        description="Helsinki"
      />
      <Description
        title={"Oulu"}
        markerPosition={[65.01381,25.46416]}
        description="Oulu"
      />
      <Description
        title={"Hanko"}
        markerPosition={[59.82742,22.96813]}
        description="Hanko"
      />
    </MapContainer>
  );
};

export default Map;