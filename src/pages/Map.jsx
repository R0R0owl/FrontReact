import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 35.3196,
  lng: 139.5507,
};

const markerPosition = {
  lat: 35.3143,
  lng: 139.5473,
};

const markerPosition2 = {
    lat: 35.3153,
    lng: 139.5509,
  };

const Map = () => (
  <LoadScript googleMapsApiKey="AIzaSyAm2dLHKMwVRPkBoXJfOx4YZ8sC2WqgPiQ">
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
    >
      {/* マーカーを追加 */}
      <Marker position={markerPosition} />
      <Marker position={markerPosition2} />
    </GoogleMap>
  </LoadScript>
);

export default Map;
