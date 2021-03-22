import Pin from '../assets/pin.svg';
import L from 'leaflet'

const IconLocation = L.icon({
    iconUrl: Pin,
    iconRetinaURL: Pin,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize:[35,35],
    className: "leaflet-venue-icon" 
})

export default IconLocation
