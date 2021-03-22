import Pin from '../assets/marker.png';
import L from 'leaflet'

const IconMarker = L.icon({
    iconUrl: Pin,
    iconRetinaURL: Pin,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize:[35,35],
    className: "leaflet-venue-icon" 
})

export default IconMarker