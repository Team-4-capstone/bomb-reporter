import {Routes, Route, Link} from "react-router-dom";
import {Home} from "./Home.js";
import {Connection} from "./Connection";
import {Report} from "./Report";
import {Login} from "./Login"
import {Register} from "./Register"
import Header from "./Header";
import React from "react";


export default function App() {
    return (
        <div className="App fill-window">
            <Header className="sm:invisible"/>
            <Routes>
                <Route path="/" element={<Home/> }/>
                <Route path="connection" element={<Connection/>}/>
                <Route path="report" element={<Report/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    )
}


