import React from "react";
import {Link} from "react-router-dom";
import MapBox from "./Mapbox/MapBox";
import {IconContext} from "react-icons";
import {HiChevronDoubleDown} from "react-icons/hi";
import InfoCard from "./InfoCard";
import Header from "./Header";

export function Connection() {
    return (
        <>
            <Header/>
            <main>
                <div className="m-10">
                    <h1 className="text-ukrYellow text-center bg-ukrBlue h-20 flex justify-center items-center m-0">Previously Reported Explosive Hazards:</h1>
                    <MapBox/>
                </div>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <InfoCard/>
                </div>
            </main>
            <div className="fill-window flex justify-center">
                <nav className="fixed bottom-10">
                    <button className="h-20 w-20 rounded-full border-solid border-solid bg-gradient-to-r from-yellow-400 to-blue-600 text-gray-600 font-bold">REPORT
                        <IconContext.Provider value={{ color: "#5A5560", className: "global-class-name", size: "2em"}}>
                            <Link to="/report">
                                <HiChevronDoubleDown/>
                            </Link>
                        </IconContext.Provider>
                    </button>
                </nav>
            </div>
        </>
    );
}