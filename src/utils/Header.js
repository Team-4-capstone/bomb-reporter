import React from "react";
import bomblogo from "../photos/LogoWeb.png";
import {Link, Route} from "react-router-dom";
import {CgMenu} from 'react-icons/cg';
import {useState} from "react";
import {CgClose} from 'react-icons/cg';
import {GiFrenchFries} from 'react-icons/gi';

function Header() {
    const [open, setOpen] = useState(false);

    // ----- All Nav links -----
    const navLinks = () => {
        return (
            <ul className="flex flex-col absolute top-[52px] list-none right-0 bg-ukrBlue m-0 pl-4
            leading-9 w-full">
                <li className= "w-full">
                    <Link to="/connection">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/report">
                        Report UXO
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/register">
                        Register
                    </Link>
                </li>
            </ul>
        )
    }

    const HamburgerMenu = <CgMenu size='30px' color='#FFDD00' className="absolute right-6 cursor-pointer"
                                  onClick={() =>
                                      setOpen(!open)}/>

    const CloseHamburgerButton = <CgClose size='30px' color='#FFDD00' className="absolute right-6 cursor-pointer"
                                          onClick={() =>
                                              setOpen(!open)}/>


    // ----- JSX -----
    return (
        <nav id="header" className="absolute right-2 sticky top-0 z-50 sticky bg-ukrBlue p-2 flex items-center">

            {/*Left*/}
            <Link className="no-underline" to="/">
                <div className="relative flex items-center my-auto h-10 left-2">
                    <img id="bombLogo" className="h-10 cursor-pointer" src={bomblogo}
                         alt="bomb logo with ukraine colors"/>
                    <div className="pl-4 z-50 font-lato text-ukrYellow text-xl"><p id="nav-text">Bomb
                        Reporter</p></div>
                </div>
            </Link>

            {/*Hamburger Menu Open and Close*/}
            {open ? CloseHamburgerButton : HamburgerMenu}
            {open && navLinks()}
            <GiFrenchFries className={"absolute right-0 fill-yellow-300 text-2xl"}/>
        </nav>
    )
}

export default Header;