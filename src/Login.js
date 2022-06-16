import {Link} from "react-router-dom"
import React from "react";
import './index/App.css';

export function Login() {
    return (
        <>
            <main className="index">
            </main>
            <nav>
                <Link to="/connection">Connection</Link>
            </nav>
        </>
    );
}