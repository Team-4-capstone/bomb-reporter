import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';  // eslint-disable-line import/no-webpack-loader-syntax
import Map, {Marker} from "react-map-gl";
import bomblogo from "./LogoWeb.png";
import {MAPBOX} from "../Config";
import axios from "axios";
import {DataSource} from "../DataSource";
import {Markers} from "../coordinatesForm/Markers";


mapboxgl.accessToken = MAPBOX;

const getServerData = url => async () => {
    const response = await axios.get(url);
    return response.data;

}

export default function MapBox(props) {

    return (
        <Map
            initialViewState={{
                longitude: props.lng ?? 30.5234,
                latitude: props.lat ?? 50.4501,
                zoom: 9
            }}
            style={{height: 400}}
            // map.flyTo={{center: [props.lng, props.lat]};
            mapStyle="mapbox://styles/mapbox/streets-v9">
            mapboxAccessToken=MAPBOX;
            <DataSource getDataFunc={getServerData('http://localhost:8081/api/reports')} resourceName="reports">
                <Markers/>
            </DataSource>
        </Map>
    );
}














































