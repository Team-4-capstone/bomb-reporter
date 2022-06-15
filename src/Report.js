import React from "react";
import {Link} from "react-router-dom";
import {ControlledModal} from "./index/ControlledModal";
import {useState} from "react";
import './index/App.css';
import Geolocator from "./coordinatesForm/Geolocator";

export function Report() {
    // const [shouldShowModal, setShouldShowModal] = useState(false);
    return (
        <>
            <main>
                <Geolocator/>
                <h2><button>Submit</button> current location/ Report Rapid UXO</h2>
                {/*<ControlledModal*/}
                {/*    shouldShow={shouldShowModal}*/}
                {/*    onClose={() => setShouldShowModal(false)}*/}
                {/*/>*/}
                {/*<button className=""*/}
                {/*        onClick={() => setShouldShowModal(!shouldShowModal)}>*/}
                {/*    <span className="btnText">Add More Details</span>*/}
                {/*</button>*/}

                <h2>MapBOX</h2>

            </main>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/connection">Connection</Link>
            </nav>
        </>
    );
}