import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
// import import 'leaflet/dist/leaflet.css';   ! Älä import leaflet.css yksittäiseen komponenttiin, sotkee grafiikat. Laita Index.html tiedostoon leaflet.css
import "./styles.css";
import icon from "./constants";

function Markers({ data }) {
  const map = useMap();
  return (
    data.length > 0 &&
    data.map((marker, index) => {
      return (
        <Marker
          eventHandlers={{
            click: () => {
              map.setView(
                [
                  marker.geometry.coordinates[1],
                  marker.geometry.coordinates[0]
                ],
                14
              );
            }
          }}
          key={index}
          position={{
            lat: marker.geometry.coordinates[1],
            lng: marker.geometry.coordinates[0]
          }}
          icon={icon}
        >
          <Popup>
            <span>{marker.properties.label}</span>
          </Popup>
        </Marker>
      );
    })
  );
}

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api-adresse.data.gouv.fr/search/?q=paris&type=street")
      .then((response) => response.json())
      .then((response) => {
        setData(response.features);
      });
  }, []);

  return (
    <MapContainer
      center={[47.217324, 13.097555]}
      zoom={4}
      scrollWheelZoom={false}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Markers data={data} />
    </MapContainer>
  );
}