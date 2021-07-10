import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';


export default function MyMap({geoLocation}) {
    let position = [geoLocation.location.lat, geoLocation.location.lng]
    //console.log(position)
    //geoLocation.location.lng, geoLocation.location.lat
    return (
        
        <MapContainer className="map-box" style={{height: "50vw", width: "50vw"}} center={position} zoom={8} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} >
                <Popup>
                    A  {geoLocation.location.lat}<br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
