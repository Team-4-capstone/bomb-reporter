import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';  // eslint-disable-line import/no-webpack-loader-syntax
import Map, {Marker} from "react-map-gl";
import bomblogo from "./LogoWeb.png";
import {MAPBOX} from "../Config";
import axios from "axios";
import {DataSource} from "../DataSource";
import {Markers} from "../coordinatesForm/Markers";
import {Clusters} from './Clusters'

mapboxgl.accessToken = MAPBOX;

const getServerData = url => async () => {
    const response = await axios.get(url);
    return response.data;

}

export default function MapBox(props) {
    const [viewport, setViewport] = useState(() => ({
                width: "100vw",
                height: "100vh",
                latitude: props.lat,
                longitude: props.lng,
                zoom: 8,
            }
        )
    );

    useEffect(() => {
        if (props.lat) {
            setViewport({
                width: "100vw",
                height: "100vh",
                latitude: props.lat,
                longitude: props.lng,
                zoom: 8,
            })
        }
    }, [props.lat, props.lng]);


    return props.lng ? (
        <Map
            {...viewport}

            style={{height: 400}}

            // map.flyTo={{center: [props.lng, props.lat]};
            mapStyle="mapbox://styles/mapbox/streets-v9"

        >

            <DataSource getDataFunc={getServerData('http://localhost:8081/api/reports')} resourceName="reports">
                <Markers/>
            </DataSource>
            <Clusters/>



        </Map>
    ) : (
        <Map
            initialViewState={{
                latitude: 48.3794,
                longitude: 31.1656,
                zoom: 4
            }
            }

            style={{height: 400}}
            // map.flyTo={{center: [props.lng, props.lat]};
            mapStyle="mapbox://styles/mapbox/streets-v9">
            <DataSource getDataFunc={getServerData('http://localhost:8081/api/reports')} resourceName="reports">
                <Markers/>
            </DataSource>


        </Map>)

}












































