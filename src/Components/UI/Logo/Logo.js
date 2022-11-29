import React from "react";
import './Logo.css';


const logo =(props)=>(
    <div className="Logo" style={{height:"67%"}}>
        <h1 style={{fontFamily:"Verdana, Geneva, Tahoma, sans-serif",margin:0,padding:5, color:"#ce462e",fontSize:"20px"}}>Sound<span style={{color:"yellow", fontWeight:300}}>Lab</span></h1>
        {props.children}
    </div>
)

export default logo;
