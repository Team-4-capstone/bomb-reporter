import React, {Component, useEffect} from "react";
import {useState} from "react";
import './form.css'
import {SelectDropdownMenu} from "./SelectDropdownMenu";
import {ControlledModal} from "../index/ControlledModal";
import log from "tailwindcss/lib/util/log";
import MapBox from "../Mapbox/MapBox";


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
                const objectToFetch = {
                    "category": 'N/A',
                    "lat": position.coords.latitude,
                    "lon": position.coords.longitude,
                    "moreDetails": 'N/A',
                    "img_path": 'N/A',
                    "size": 'NA',
                    "color": 'N/A',
                    "quantity": 'N/A',
                    "secondaryColor": 'N/A'

                }
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(objectToFetch),
                };

                console.log(options)
                const res = fetch(`http://localhost:8081/api/reports`, options)
                    .then(res => res.json())
                    .then(json => {
                        console.log(json)

                        localStorage.setItem("PUT", JSON.stringify(json));
                    })

            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }
    return (
        <>
            <button className="bg-ukrBlue text-ukrYellow drop-shadow-xl" onClick={getLocation}>Get Location</button>
            <ControlledModal
                shouldShow={shouldShowModal}
                onClose={() => setShouldShowModal(false)}
            />

            {lat ? <button className="animate-bounce my-2" disabled={false}
                           onClick={() => setShouldShowModal(!shouldShowModal)}>
                <span className="btnText">Add More Details</span>
            </button> : ""}
            <MapBox lat={lat} lng={lng}/>
        </>
    )
}


