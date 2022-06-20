import React, {useEffect} from "react";
import {useState} from "react";
import './form.css';
import '../index/button.css';
import {ControlledModal} from "../index/ControlledModal";
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

                const res = fetch(`http://localhost:8081/api/reports`, options)
                    .then(res => res.json())
                    .then(json => {
                        localStorage.setItem("PUT", JSON.stringify(json));
                    })
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    return lat ? (
        <>
            <ControlledModal
                shouldShow={shouldShowModal}
                onClose={() => setShouldShowModal(false)}
            />

            {lat ? <div className="add-deets mb-3">
                        <button className="wave" disabled={false}
                               onClick={() => setShouldShowModal(!shouldShowModal)}>
                            <span className="btnText">ADD MORE DETAILS</span>
                        </button>
                    </div> : ""}
            <MapBox lat={lat} lng={lng}/>
        </>
    ) :
        <button className="inline-block h-72 w-72 rounded-full text-gray-700  border-solid bg-gradient-to-r from-yellow-400 to-blue-600
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium
    text-2xl px-5 py-2.5 text-center mr-2 mb-2" onClick={getLocation}>Submit Location</button>

}


