import useCollapse from 'react-collapsed';
import React from "react";
import '../css/App.css';

function Collapsible() {
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Tap Here to Hide Info...' : 'Tap Here for More Info..'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <p><strong>Ukraine Collective Awareness to Unexploded Ordnance (Ukraine CAT-UXO) Together
                        our knowledge
                        saves lives </strong></p>
                    <p> This is a new website to help support individuals who are exposed to explosive hazards in
                        Ukraine.
                        <ul>
                            <li>
                                Firstly, to educate and reduce your risk to the explosive hazard.
                            </li>
                            <li>
                                Secondly, to record the location of the explosive hazard.
                            </li>
                        <li>
                            Finally, to report the explosive hazard to a suitable clearance authority.
                        </li>
                        </ul>
                    </p>
                    <br/><br/>
                    <p>Also...</p>
                    Click this I promise you will be happy!
                    <br/><br/>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ ">THIS</a>
                    <p> or </p>
                    <a href="https://www.misterrogers.org/">THAT</a>
                </div>
            </div>
        </div>
    )
        ;
}

function CollapsibleAbout() {
    return (
        <Collapsible/>
    );
}

export default CollapsibleAbout;