import React from "react";

import './DrawToggle.css';

const drawToggle = (props)=>(
    <div className="DrawToggle" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
        
    </div>
);

export default drawToggle;