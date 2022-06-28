import {Link} from "react-router-dom"
import React from "react";
import './index/App.css';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { IconContext } from "react-icons";
import Geolocator from "./coordinatesForm/Geolocator";
import {Splash} from './splash';
import {DiMongodb} from "react-icons/di";

export function Home() {
    return (
        <>
            <Splash/>
            <main className="index flex h-full ">
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
                <p className="fixed poweredBy text-sm ">Powered by<DiMongodb/>MongoDB</p>
            </div>

        </>
    );
}

