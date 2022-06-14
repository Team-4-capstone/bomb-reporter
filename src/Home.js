import {ControlledModal} from "./index/ControlledModal";
import {Link} from "react-router-dom"
import React, {useState} from "react";
import './index/App.css';

export function Home() {
    // const [shouldShowModal, setShouldShowModal] = useState(false);
    return (
        <>
            <main className="index">
                {/*<ControlledModal*/}
                {/*    shouldShow={shouldShowModal}*/}
                {/*    onClose={() => setShouldShowModal(false)}*/}
                {/*/>*/}
                <div className="container">
                    <Link to="/report"><button>Rapid Report</button></Link>

                </div>
            </main>
            <nav>
                <Link to="/connection">Connection</Link>
            </nav>
        </>
    );
}