import React, {Component, useEffect} from "react";
import {useState} from "react";
import './form.css'
import {SelectDropdownMenu} from "./SelectDropdownMenu";
import {ControlledModal} from "../index/ControlledModal";


export default function Geolocator() {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null)
    const [shouldShowModal, setShouldShowModal] = useState(false);
    useEffect(() => {
        // storing input name
        localStorage.setItem("lat", JSON.stringify(lat));
        localStorage.setItem("lon", JSON.stringify(lng));
    }, [lat]);

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
            <ControlledModal
                shouldShow={shouldShowModal}
                onClose={() => setShouldShowModal(false)}
            />

            {lat ? <button className="" disabled={false}
                    onClick={() => setShouldShowModal(!shouldShowModal)}>
                <span className="btnText">Add More Details</span>
            </button> : ""}
        </>
    )
}


