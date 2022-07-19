import MapBox from "../mapbox/MapBox";
import InfoCard from "../utils/InfoCard";
import Header from "../utils/Header";
import React , { useState, useEffect } from "react";
import {Splash} from "../utils/splash";

export function Connection() {
    // Loading state
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        // Wait for 3 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    // Custom css for loader
    const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
    return (
        isLoading ?
            <div className="grid h-screen place-items-center mr-80">
                <Splash/>
            </div>:
        <>
            <Header/>
            <main>
                <div className="m-10 flex flex-col h-200">
                    <h1 className="text-ukrYellow text-center bg-ukrBlue">Previously Reported Explosive Hazards:</h1>
                    <MapBox/>
                </div>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    <InfoCard/>
                </div>
            </main>
        </>
    );
}