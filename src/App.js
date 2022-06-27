import {Routes, Route} from "react-router-dom";
import {Home} from "./Home.js";
import {Connection} from "./Connection";
import {Report} from "./Report";
import {Login} from "./Login"
import {Register} from "./Register"
import React from "react";
import CollapsibleAbout from "./CollapsibleAbout";


export default function App() {

    return (
        <div className="App fill-window">

            {/*<Header className=""/>*/}
            <Routes>
                <Route path="/" element={<Home/> }/>
                <Route path="connection" element={<Connection/>}/>
                <Route path="report" element={<Report/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="CollapsibleAbout" element={<CollapsibleAbout/>}/>
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