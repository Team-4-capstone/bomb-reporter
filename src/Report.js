import React from "react";
import {Link} from "react-router-dom";
import './index/App.css';
import './index/button.css';
import Geolocator from "./coordinatesForm/Geolocator";
import {IconContext} from "react-icons";
import {HiChevronDoubleDown} from "react-icons/hi";

export function Report() {

    return (
        <>
            <main className="index">
                <Geolocator/>
            </main>
            <div className="fill-window flex justify-center">
                <nav className="fixed bottom-10">
                    <button className="noselect">
                        <IconContext.Provider value={{ color: "#5A5560", className: "global-class-name", size: "2em"}}>
                            <Link to="/connection">
                                <HiChevronDoubleDown/>
                            </Link>
                        </IconContext.Provider>
                    </button>
                </nav>
            </div>
        </>
    );
}