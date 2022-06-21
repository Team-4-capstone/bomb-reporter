import {Link} from "react-router-dom"
import React from "react";
import './index/App.css';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { IconContext } from "react-icons";
import Geolocator from "./coordinatesForm/Geolocator";

export function Home() {
    return (
        <>
            <main className="index flex h-full justify-center mt-10">
                    <Geolocator/>
            </main>
            <div className="fill-window flex justify-center">
                <nav className=" fixed bottom-10">
                    <button className="noselect">
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