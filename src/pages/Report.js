import React from "react";
import {Link} from "react-router-dom";
import '../css/App.css';
import '../css/button.css';
import Geolocator from "../utils/Geolocator";
import {IconContext} from "react-icons";
import {HiChevronDoubleDown} from "react-icons/hi";
import CollapsibleAbout from "../utils/CollapsibleAbout";

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
                        <IconContext.Provider value={{color: "#5A5560", size: "2.2em"}}>
                            <Link className="animate-bounce" to="/connection">
                                <HiChevronDoubleDown/>
                            </Link>
                        </IconContext.Provider>
                    </button>
                </nav>
            </div>
        </>
    );
}
