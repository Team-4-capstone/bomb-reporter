import React from "react";
import {Link} from "react-router-dom";

export function Connection() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/report">Report</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </>
    );
}