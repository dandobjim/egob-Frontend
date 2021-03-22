import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { geolocated } from "react-geolocated";
import React from "react";
import IconLocation from "./IconLocation";
import IconMarker from "./IconMarker";

const DEFAULT_LAT = -27.36619;
const DEFAULT_LNG = -55.89117;

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

class Map extends React.Component {

  render() {
    const long = this.props.coords ? this.props.coords.longitude : DEFAULT_LNG;
    const lat = this.props.coords ? this.props.coords.latitude : DEFAULT_LAT;
    const markers = this.props.marcadores;

    return (
      
      <section
        className="pb-8 pt-md-12 pb-md-10"
        style={{ paddingTop: "5rem" }}
      >
        <MapContainer center={[lat, long]} zoom={12} scrollWheelZoom={true}>
          <ChangeView center={[lat, long]} zoom={12} />
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {!this.props.coords ? (
            <div className="loading">Loading</div>
          ) : (
            <Marker position={[lat, long]} icon={IconLocation}>
              <Popup>You are here!</Popup>
            </Marker>
          )}
          {markers.map((item,index)=>{
            console.log(item);
            return(
              <Marker position={[item["latitud"]["value"], item["longitud"]["value"]]} icon = {IconMarker}>
                <Popup>
                  <hr/>
                  Domicilio: {item["domicilio"]["value"]}
                  <br/>
                  Edificio: {item["edificio"]["value"]}
                  <br/>
                  Responsable: {item["responsable"]["value"]}
                  <br/>
                  Teléfono: {item["telefono"]["value"]}
                  <hr/>
                </Popup>
              </Marker>
            )
          })}
        </MapContainer>
      </section>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  userDecisionTimeout: 10000,
})(Map);
