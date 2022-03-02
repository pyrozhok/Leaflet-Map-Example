import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";

export default function Maps({ location, zoom, markers, trackGeoJson }) {
  return (
    <MapContainer center={location} zoom={zoom} style={{ height: "100vh" }}>
      {trackGeoJson && <GeoJSON data={trackGeoJson} />}

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers &&
        markers.length > 0 &&
        markers.map(marker => (
          <Marker key={marker.title} position={marker.latLng}>
            <Popup>
              <span>
                <h2>{marker.title}</h2>
                <br />
                <img
                  src={marker.image}
                  alt=""
                  style={{
                    width: "286px",
                    height: "114px",
                    objectFit: "cover",
                  }}
                />
              </span>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}

{
}
