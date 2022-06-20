import React from "react";
import {Link} from "react-router-dom";
import MapBox from "./Mapbox/MapBox";
import {IconContext} from "react-icons";
import {HiChevronDoubleDown} from "react-icons/hi";
import {Carousel, Card} from "flowbite-react";

export function Connection() {
    return (
        <>
            <main>
                <div className="m-10">
                    <MapBox/>
                </div>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        <Card className="rounded overflow-hidden shadow-lg"
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </Card>
                        <Card className="rounded overflow-hidden shadow-lg"
                              imgAlt="Meaningful alt text for an image that is not purely decorative"
                              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                            </p>
                        </Card>
                    <Card className="rounded overflow-hidden shadow-lg"
                          imgAlt="Meaningful alt text for an image that is not purely decorative"
                          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                    >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </Card>
                </div>
            </main>
            <div className="fill-window flex justify-center">
                <nav className="fixed bottom-10">
                    <button className="noselectRep">
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