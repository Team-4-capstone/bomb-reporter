import React from "react";
import {Link} from "react-router-dom";
import './index/App.css';
import './index/button.css';
import Geolocator from "./coordinatesForm/Geolocator";
import {IconContext} from "react-icons";
import {HiChevronDoubleDown} from "react-icons/hi";
import CollapsibleAbout from "./CollapsibleAbout";

export function Report() {

    return (
        <>
            <CollapsibleAbout/>
            <main className="index flex h-full justify-center">
                    <Geolocator/>
            </main>
            <div className="fill-window flex justify-center">
                <nav className="fixed bottom-10">
                    <button className="h-20 w-20 rounded-full border-solid border-solid bg-gradient-to-r from-yellow-400 to-blue-600 text-gray-600 font-bold">HOME
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
