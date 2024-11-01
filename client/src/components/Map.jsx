import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
    const position = [67.8558, 20.2253]; //Kiruna coordinates

    return (
        <MapContainer center={position} zoom={13} style={{ height: '500px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    Ciao! Questa è Roma.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
