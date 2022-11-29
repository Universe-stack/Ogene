import React from "react";
import './ControllerInfo.css';


export default function controllerInfo(props){
    return(
        <div className="controllerInfo">
            <div style={{width:"100%", height:"55%"}}>
                <img src={props.img} alt="" style={{width:"100%", height:"100%",objectFit:"cover"}}/>
            </div>
            <h3>{props.header}</h3>
            <p>{props.paragraph}</p>
        </div>
    )
}