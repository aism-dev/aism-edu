"use client"
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { myAPi } from '@/lib/Variables/useful';
import { AnimatedEntrance } from '@/app/general components/AnimatedEntrance';

const customIcon = L.icon({
    iconUrl: "https://aism-edu.sirv.com/icons/AISM-thick.png",
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [0, -30],
});

export default function MapViewSection() {
    const position: LatLngExpression = [33.826806, -84.118446];

    return (
        <AnimatedEntrance>
            <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }} scrollWheelZoom={false} className='z-0'>
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${myAPi}`}
                    attribution='&copy; <a href="https://fabiconcept.online">Fabiconcept</a>'
                    id="mapbox/streets-v11" // You can choose different map styles like 'streets-v11', 'satellite-v9', etc.
                    tileSize={512}
                    zoomOffset={-1}
                />
                <Marker icon={customIcon} position={position}>
                    <Popup>We are located here</Popup>
                </Marker>
            </MapContainer>
        </AnimatedEntrance>
    )
}
