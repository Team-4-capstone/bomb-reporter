import useCollapse from 'react-collapsed';
import React from "react";
import './index/App.css';


function Collapsible() {
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse' : 'Expand'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    Now you can see the hidden content. <br/><br/>
                    Click again to hide...
                  <p> Ukraine Collective Awareness to Unexploded Ordnance (Ukraine CAT-UXO) Together our knowledge
                      saves lives
                      This is a new website to help support individuals who are exposed to explosive hazards in
                      Ukraine.
                      Firstly, to educate and reduce your risk to the explosive hazard.
                      Secondly, to record the location of the explosive hazard.
                      Finally, to report the explosive hazard to a suitable clearance authority.


                      Also...

                      Click this I promise you will be happy!
                      <a>https://www.youtube.com/watch?v=dQw4w9WgXcQ </a>
                  </p>
                </div>
            </div>
        </div>
    );
}

function CollapsibleAbout() {
    return (
        <Collapsible/>
    );
}

export default CollapsibleAbout;