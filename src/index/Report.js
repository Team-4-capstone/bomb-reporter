import {ControlledModal} from "./ControlledModal";
import {useState} from "react";
import './App.css';
import Geolocator from "../Geolocator";

export const Report = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    const [shouldShowModal, setShouldShowModal] = useState(false);
    return (
        <section className="index">
            <h1 className="index--h1">Do you want to make a rapid report?</h1>

            <ControlledModal
                shouldShow={shouldShowModal}
                onClose={() => setShouldShowModal(false)}
            />
            <div className="container">
                <button className="yes"
                        onClick={() => setShouldShowModal(!shouldShowModal)}>Yes</button>

                <button className="no" onClick={() => console.log("no")}>No</button>
            </div>

        </section>
    )
}