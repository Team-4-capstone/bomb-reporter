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
                  <p> Ukraine Collective Awareness to Unexploded Ordnance (Ukraine CAT-UXO) Together our knowledge
                      saves lives
                      This is a new website to help support individuals who are exposed to explosive hazards in
                      Ukraine.
                      Firstly, to educate and reduce your risk to the explosive hazard.
                      Secondly, to record the location of the explosive hazard.
                      Finally, to report the explosive hazard to a suitable clearance authority.
                      <br/>
                      Also...

                      Click this I promise you will be happy!
                        <br/><br/>
                      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ ">THIS</a>
                      <p> or </p>
                      <a href="https://www.misterrogers.org/">THAT</a>
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