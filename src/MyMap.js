import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';

export default function MyMap() {
    return (
        
        <MapContainer style={{height: "80vw", width: "80vw"}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker  position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
