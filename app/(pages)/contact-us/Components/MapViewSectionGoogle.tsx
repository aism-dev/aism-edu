import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const center = { lat: 40.712776, lng: -74.005974 };
export default function MapViewSectionGoogle() {
    return (
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '400px' }}
            center={center}
            zoom={14} // Adjust zoom level as needed
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      );
}
