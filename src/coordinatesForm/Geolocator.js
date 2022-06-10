import React, {Component} from "react";
import {useState} from "react";
import {FormWIthGeoLocation} from "./FormWIthGeoLocation";
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
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    return (
        <>
            <button onClick={getLocation}>Get Location</button>
            <FormWIthGeoLocation lat={lat}
                                 lon={lng}
            />
        </>


    )


}
