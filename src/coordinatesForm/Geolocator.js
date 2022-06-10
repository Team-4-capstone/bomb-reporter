import React, {Component} from "react";
import {useState} from "react";
import './form.css'
import {FileUploadPage} from "./FileUploadPage";

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
            <button className="get-location" onClick={getLocation}>Get Location</button>
            <FileUploadPage lat={lat} lon={lng}/>
        </>


    )


}
