import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';  // eslint-disable-line import/no-webpack-loader-syntax
import Map, {Marker} from "react-map-gl";
import bomblogo from "./LogoWeb.png";
import {MAPBOX} from "../Config";


mapboxgl.accessToken = MAPBOX;


export default function MapBox(props) {
    // const mapContainer = useRef(null);
    // const map = useRef(null);
    // const [lng, setLng] = useState(33.5);
    // const [lat, setLat] = useState(49);
    // const [zoom, setZoom] = useState(9);
    //
    // useEffect(() => {
    //     if (map.current) return; // initialize map only once
    //     map.current = new mapboxgl.Map({
    //         container: mapContainer.current,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [lng, lat],
    //         zoom: zoom
    //     });
    // });
    //
    // useEffect(() => {
    //     if (!map.current) return; // wait for map to initialize
    //     map.current.on('move', () => {
    //         setLng(map.current.getCenter().lng.toFixed(4));
    //         setLat(map.current.getCenter().lat.toFixed(4));
    //         setZoom(map.current.getZoom().toFixed(2));
    //     });
    // });
    //
    // return (
    //     <div>
    //         <div className="sidebar">
    //             Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    //         </div>
    //         <div ref={mapContainer} className="map-container" />
    //     </div>

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
            <Marker longitude={props.lng ?? 30.5234} latitude={props.lat ?? 50.4501} anchor="bottom">
                <img className="h-10" src={bomblogo}/>
            </Marker>
        </Map>
    );
}























