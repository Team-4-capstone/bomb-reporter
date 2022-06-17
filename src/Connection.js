import React from "react";
import {Link} from "react-router-dom";
import MapBox from "./Mapbox/MapBox";

export function Connection() {
    return (
        <>
            <main>
                   <MapBox/>
            </main>
            <nav>
                <Link to="/report">Report</Link>
            </nav>
        </>
    );
}