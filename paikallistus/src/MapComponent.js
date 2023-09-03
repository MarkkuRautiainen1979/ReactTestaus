import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer , Marker, Popup } from 'react-leaflet';
import { useLocation } from './LocationComponent';
import ReactWeather, { useOpenWeather } from "react-open-weather";
import L from 'leaflet';

function MapComponent() {
  const { latitude, longitude } = useLocation();
  console.log(latitude);
  console.log(longitude);

  const customIcon = new L.Icon({
    iconUrl: './infoicon.png', // URL to the custom marker icon
    iconSize: [50, 50], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon (middle bottom)
    popupAnchor: [0, -32], // Anchor point for the popup (top of the icon)
  });

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "a97e7de7f03fde16353def46be2c83e7", // Netistä mukana saatu API-Key, pitää vaihtaa henkilökohtaiseen
    lat: "62.604900",
    lon: "29.759400",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

  console.log(data);
  


  // Extract specific weather data from the "data" object
  const currentWeather = data?.current;
  const temperature = currentWeather?.temperature?.current;
  const wind = currentWeather?.wind;
  const description = currentWeather?.description;
  const humidity = currentWeather?.humidity;
  // const icon = currentWeather?.icon?.current;

  // Conditionally render the MapContainer only when latitude and longitude are available
  return latitude !== null && longitude !== null ? (
    <div>   
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Joensuu"
      unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
      showForecast
    />
   <div>
  <p>Lämpötilä: {temperature} °C</p>
  <p>Tuulen nopeus: {wind} Km/h</p>
  <p>Kuvaus: {description}</p>
  <p>Ilmankosteus: {humidity}%</p>

  </div>
    <MapContainer center={[latitude, longitude]} zoom={15} style={{ height: '800px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} icon={customIcon} >
                <Popup>Tähän kohtaan paikannetiin . Koordinaatit ovat:
                  {latitude} astetta leveyttä, {longitude} astetta pituutta.
                </Popup>
      </Marker>
    </MapContainer>
    </div>

  ) : null;
}

export default MapComponent;