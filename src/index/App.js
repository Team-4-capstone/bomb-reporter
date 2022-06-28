import {Routes, Route} from "react-router-dom";
import {Home} from "../pages/Home.js";
import {Connection} from "../pages/Connection";
import {Report} from "../pages/Report";
import {Login} from "../pages/Login"
import {Register} from "../pages/Register"
import React from "react";
import CollapsibleAbout from "../utils/CollapsibleAbout";


export default function App() {

    return (
        <div className="App">

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