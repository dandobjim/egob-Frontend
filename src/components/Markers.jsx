import React from 'react'

import {Marker} from "react-leaflet";
import IconLocation from "./IconLocation";

const Markers = () => {
    return (
        <Marker position={{lat: '55.2', lng:'40.1'}} icon={IconLocation}/>
    )
}

export default Markers
