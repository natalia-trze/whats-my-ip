import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Box from '@material-ui/core/Box';
import "./App.css";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});

export default function MyMap({ geoLocation, countryInfo }) {
    let position = [geoLocation.location.lat, geoLocation.location.lng]

    return (
        <Box component="span" m={1}>
            <MapContainer style={{ height: "80vh", width: "100vw", margin: "0" }} center={position} zoom={5} scrollWheelZoom={false}>
                <TileLayer className="tilelayer"
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
