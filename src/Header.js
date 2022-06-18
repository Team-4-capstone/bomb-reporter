import React from "react";
import bomblogo from "./Mapbox/LogoWeb.png";
import {Link} from "react-router-dom";

function Header() {


    return (
        <nav id="header" className="relative sticky top-0 z-50 grid grid-cols-2
        sticky bg-ukrBlue opacity-80 p-2 md:px-3">

            {/*Left*/}
            <Link className="no-underline" to="/">
                <div className="relative flex items-center my-auto h-10">
                    <img id="bombLogo" className="h-10 cursor-pointer" src={bomblogo} alt="bomb logo with ukraine colors"/>
                    <div className="pl-4 z-50"><p id="nav-text" className="sm:text-3xl dropshadowtext font-lato text-ukrYellow">Bomb Reporter</p></div>
                </div>
            </Link>

            {/*right*/}
            <div className="flex items-center justify-end">
                <svg id="dropDownDots" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#FFDD00" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
            </div>

        </nav>
    )
}

export default Header;