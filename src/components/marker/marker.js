import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import houseImage from '../../utils/house-image';

const MapMarker = ({ house, position, name }) => {
    const icon = L.icon({
        iconUrl: houseImage(house),
        iconSize: [40, 40],
        iconAnchor: [40, 40],
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null
    });

    return (
        <Marker position={position} icon={icon}>
            <Popup>{name}</Popup>
        </Marker>
    );
};

export default MapMarker;
