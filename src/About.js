import React from "react";
import Header from "./Header";

export function About() {

    return (
        <>
            <Header/>
            <main className="flex items-center justify-center h-screen">
                <div className="w-1/2 p-4 leading-8 border-solid border-2 bg-ukrBlue">
                    <p className="text-ukrYellow">Welcome,<br/>
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
        </>
    );
}