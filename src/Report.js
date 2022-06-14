import React from "react";
import {Link} from "react-router-dom";

export function Report() {
    return (
        <>
            <main>
                <h2>Make Report</h2>

            </main>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/connection">Connection</Link>
            </nav>
        </>
    );
}