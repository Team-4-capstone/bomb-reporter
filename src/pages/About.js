import React from "react";
import Header from "../utils/Header";
import {Card} from "flowbite-react";
import Uziel from "../photos/Uziel.jpg";

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
                <div className={"grid-cols-6 m-10"}>
                    <Card className={"m-10 grid-cols-4"}>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="mb-3 h-32 w-32 rounded-full shadow-lg"
                                src={Uziel}
                                alt="Uziel's profile picture"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Uziel Carranza
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add friend
                                </a>

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add friend
                                </a>

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add friend
                                </a>

                            </div>
                        </div>
                    </Card>
                </div>
                <div className={"grid-cols-6 m-10"}>
                    <Card className={"m-10 grid-cols-4"}>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                alt="Bonnie image"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Bonnie Green
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add friend
                                </a>

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add friend
                                </a>

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add friend
                                </a>

                            </div>
                        </div>
                    </Card>
                </div>

                <div className={"col-span-2 m-10"}>
                    <Card>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                alt="Bonnie image"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Bonnie Green
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add friend
                                </a>

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add friend
                                </a>

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add friend
                                </a>

                            </div>
                        </div>
                    </Card>
                </div>
                <div className={"col-span-2 m-10"}>
                    <Card>
                        <div className="flex flex-col items-center pb-10">
                            <img
                                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                alt="Bonnie image"
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                Bonnie Green
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add friend
                                </a>

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add friend
                                </a>

                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add friend
                                </a>

                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}