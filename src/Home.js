import {Link} from "react-router-dom"
import React from "react";
import './index/App.css';
import { HiChevronDoubleDown } from 'react-icons/hi';

export function Home() {
    return (
        <>
            <main className="index">
                <Link to="/report">
                    <button className="inline-block h-72 w-72 rounded-full text-gray-700 bg-gradient-to-r from-yellow-500 to-blue-500
                        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium
                        text-2xl px-5 py-2.5 text-center mr-2 mb-2">
                        Rapid Report <hr /> швидкий звіт
                    </button>
                </Link>
            </main>
            <nav className="flex justify-center">
                <br/>
                <Link to="/connection"><HiChevronDoubleDown/></Link>
            </nav>
        </>
    );
}