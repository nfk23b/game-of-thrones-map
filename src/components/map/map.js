import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import mapLayer from '../../../images/map/map.png';
import { Map, ImageOverlay } from 'react-leaflet';
import { MapMarker } from '../';

const MapComponent = ({ heroes }) => {
    const mapCenter = [445, 644];
    const zoomLevel = 0;
    const bounds = [
        [0, 0],
        [890, 1288]
    ];

    return (
        <div>
            <Map
                maxZoom={zoomLevel}
                minZoom={zoomLevel}
                maxBounds={bounds}
                center={mapCenter}
                crs={L.CRS.Simple}
                zoom={zoomLevel}
                dragging={false}
                style={{ width: '100%', height: '890px' }}
            >
                <ImageOverlay url={mapLayer} bounds={bounds} />
                {heroes.map(({ hero, house, x, y }, i) => (
                    <MapMarker
                        key={hero}
                        position={[y, x]}
                        name={hero}
                        house={house}
                    />
                ))}
            </Map>
        </div>
    );
};
export default MapComponent;
