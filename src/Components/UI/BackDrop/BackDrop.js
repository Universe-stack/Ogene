import React from "react";
import './BackDrop.css';

const backDrop=(props)=>(
    props.show?<div className="backdrop" onClick={props.clickedBackdrop}></div>:null
)

export default backDrop;