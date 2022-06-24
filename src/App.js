import {Routes, Route} from "react-router-dom";
import {Home} from "./Home.js";
import {Connection} from "./Connection";
import {Report} from "./Report";
import {Login} from "./Login"
import {Register} from "./Register"
import Header from "./Header";
import React , { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";


export default function App() {
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
            {/*If page is still loading then splash screen*/}
            <PacmanLoader color={'#36D7B7'} isLoading={isLoading}
                          css={override} size={150} />
            </div>:

        <div className="App fill-window">

            {/*<Header className=""/>*/}
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


