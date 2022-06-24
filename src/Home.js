import {Link} from "react-router-dom"
import React from "react";
import './index/App.css';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { IconContext } from "react-icons";
import Geolocator from "./coordinatesForm/Geolocator";

export function Home() {
    return (
        <>
            <main className="index flex h-full justify-center">
                    <Geolocator/>
            </main>
            <div className="fill-window flex justify-center">
                <nav className=" fixed bottom-10">
                    <button className="h-16 w-16 rounded-full border-solid bg-gray-300 text-gray-700 font-bold">HOME
                        <IconContext.Provider value={{color: "#5A5560", size: "2em"}}>
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