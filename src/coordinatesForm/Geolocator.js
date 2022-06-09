import React, {Component} from "react";
import {useState} from "react";
import {GetGeo} from "./GetGeo";
import './form.css'

export default function Geolocator() {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null)

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    return (

        <div className="App">
            <button onClick={getLocation}>Get Location</button>
            <h1>Coordinates</h1>
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
            <GetGeo lat={lat}
                    lon={lng}
            />
        </div>

    )


}
