import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Box from '@material-ui/core/Box';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});

export default function MyMap({geoLocation}) {
    let position = [geoLocation.location.lat, geoLocation.location.lng]
    
    return (
        <Box component="span" m={1}>
        <MapContainer className="map-box" style={{height: "40vw", width: "60vw"}} center={position} zoom={8} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} >
                <Popup>
                    You are here :)
                </Popup>
            </Marker>
        </MapContainer>
        
</Box>
    )
}
