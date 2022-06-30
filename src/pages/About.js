import React from "react";
import Header from "../utils/Header";
import {Card} from "flowbite-react";
import Uziel from "../photos/Uziel.jpg";
import George from "../photos/George.jpeg";
import Mark from "../photos/Mark.jpg";
import Matt from "../photos/Matt.png";
import {GiSparkles, GiUzi} from "react-icons/gi";
import {BsFillPencilFill} from "react-icons/bs";
import {GrReactjs} from "react-icons/gr";

export function About() {

    return (
        <>
            <Header/>
            <main className="flex items-center justify-center h-screen">
                <div className="w-3/4 p-4 leading-8 border-solid border-2 bg-ukrBlue">
                    <p className="text-ukrYellow text-sm leading-6">Welcome,<br/>
                        The <em>Bomb Reporter</em> is a tool used to report any type of UXO (unexploded ordnance) found
                        within Ukraine. UXO is any type of military explosive hazard, such as aerial bombs,
                        artillery rounds, landmines, grenades, bomblets, missiles, and rockets.
                        These reports are used to inform people of potential UXO in the area, and to help facilitate future clearance of these
                        hazards. These reports are created based on your location (grid coordinates),
                        picture of the reported item(s), and any discernible characteristics.  Previous reports may also be viewed at
                        'HOME'.
                    </p>
                </div>
            </main>

            {/* ABOUT ME PROFILE CARDS */}
            <div className="flex flex-wrap justify-center">
                {/* UZIEL */}
                <div className={"grid-cols-6 m-10 w-400"}>
                    <Card className={"m-10 grid-cols-4"}>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="mb-3 h-36 w-36 rounded-full shadow-lg"
                                src={Uziel}
                                alt="Uziel's profile picture"
                            />
                            <h2 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
                                Uziel Carranza
                                <GiUzi/>
                            </h2>
                            <span className="text-gray-500 dark:text-gray-400">
                                 Software Developer
                            </span>
                            <div className="text-sm text-gray-900 max-w-md">
                            <br/>
                                Born and raised in Puebla, Mexico, moved to the U.S. at the age of 15. Served in the U.S.
                                Army from 2018 - 2021 as a motor transport operator(88M). Decided to make a career change to
                                Software Development to solve real-world problems and to create products that can change people’s lives.
                            </div>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Github
                                </a>
                                <a href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    LinkedIn
                                </a>
                                {/*<a href="#"*/}
                                {/*    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}
                                {/*    Add friend*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </Card>
                </div>

                {/* George */}
                <div className={"grid-col m-10 "}>
                    <Card className={"m-10 grid-cols-4 w-400"}>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="mb-3 h-36 w-36 rounded-full shadow-lg"
                                src={George}
                                alt="George profile picture"
                            />
                            <h2 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
                                George Puryear
                                <BsFillPencilFill color={'#3396ff'}/>
                            </h2>
                            <span className=" text-gray-500 dark:text-gray-400">
                                Software Developer
                            </span>
                            <div className="text-sm text-gray-900 max-w-md">
                                <br/>
                                I grew up in Austin Texas, then served in the Marine Corps from 2007 to 2016 as a mechanic
                                then as an Explosive Ordnance Disposal (EOD) technician. After medically retiring, I joined Apple
                                as a Fraud Prevention Specialist then decided on a career change to software development. Blue Crayon is my favorite flavor.
                            </div>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Github
                                </a>
                                <a href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    LinkedIn
                                </a>
                                {/*<a href="#"*/}
                                {/*    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}
                                {/*    Add friend*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Mike "Mark" */}
                <div className={"col-span-2 m-10"}>
                    <Card>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="mb-3 h-36 w-36 rounded-full shadow-lg"
                                src={Mark}
                                alt="Mark profile picture"
                            />
                            <h2 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
                                Markle Sparkle
                                <GiSparkles/>
                            </h2>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Software Developer
                            </span>
                            <div className="text-sm text-gray-900 max-w-md">
                                <br/>
                                Born in Texas, served as Medic with 82nd Airborne 2005 - 2010, then with Department of State
                                as Medic and Security Specialist on Diplomatic Security Team in Iraq and Afghanistan,
                                Paramedic in the US. Career Transition to Software Development because creating new
                                things and learning new things constantly drives me.
                            </div>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Github
                                </a>
                                <a href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    LinkedIn
                                </a>
                                {/*<a href="#"*/}
                                {/*    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}
                                {/*    Add friend*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Matt */}
                <div className={"col-span-2 m-10"}>
                    <Card>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="mb-3 h-36 w-36 rounded-full shadow-lg"
                                src={Matt}
                                alt="Matt profile picture"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Matthew "React" Kauff
                                <GrReactjs/>
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                            Software Developer
                            </span>
                            <div className="text-sm text-gray-900 max-w-md">
                                <br/>
                                I grew up in Trenton, MI before I started serving as Mechanic, and now an Instructor in the Army Reserves.
                                I have sharpened my skills not only in problem solving but also by leading in my youth ministries, my soldiers, and my peers.
                                I want to continue to serve and make a difference in the tech field as an aspiring Full Stack Developer.
                            </div>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a href="https://github.com/mkauff1"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Github
                                </a>
                                <a href="https://www.linkedin.com/in/matthew-kauff/"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    LinkedIn
                                </a>
                                {/*<a href="#"*/}
                                {/*    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}
                                {/*    Add friend*/}
                                {/*</a>*/}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}