import React , { useState, useEffect } from "react";

function LoadingMessage() {
    return (
        <div className="splash-screen text-center text-2xl">
            Welcome to Bomb Reporter <br/><br/><br/><br/>
            This is an Unexploded Ordnance (UXO) Reporting App <br/><br/>
            We want to help individuals that are exposed to explosive hazards in
            <br/> Ukraine by recording UXO submitted by you<br/>
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
            <div className="grid fill-window h-screen place-items-center mr-80">
                {/*If page is still loading then splash screen*/}
                <LoadingMessage isLoading={isLoading}/>
            </div>: null
    );
}