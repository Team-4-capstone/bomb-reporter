import {Link} from "react-router-dom"
import React from "react";
import './index/App.css';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { IconContext } from "react-icons";
import Geolocator from "./coordinatesForm/Geolocator";

export function Home() {
    return (
        <>
            <main className="index">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Link to="/report">
                    {/*<button className="inline-block h-72 w-72 rounded-full text-gray-700 bg-gradient-to-r from-yellow-400 to-blue-600*/}
                    {/*    hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium*/}
                    {/*    text-2xl px-5 py-2.5 text-center mr-2 mb-2">*/}
                    {/*    Rapid Report <hr /> швидкий звіт*/}
                    {/*</button>*/}
                    <Geolocator/>

                </Link>
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