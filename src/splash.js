import React , { useState, useEffect } from "react";
// import PacmanLoader from "react-spinners/PacmanLoader";

function LoadingMessage() {
    return (
        <div className="splash-screen text-center text-2xl">
            Welcome to Bomb Reporter <br/><br/><br/><br/>
            This is an Unexploded Ordnance (UXO) Reporting App <br/><br/>
            We want to help individuals that are exposed to explosive hazards in Ukraine by recording UXOs submitted by you<br/>
            {/*First - Record the location of the explosive hazard. <br/>*/}
            {/*Second - Be able to locate other explosives in your area. <br/>*/}
            {/*Lastly - Get the heck outta there.*/}
            <div className="loading-dot">.</div>
        </div>
    );
}


export function Splash() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        // Wait for 3 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 8000);
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
                <LoadingMessage isLoading={isLoading}/>
            </div>: null
    );
}