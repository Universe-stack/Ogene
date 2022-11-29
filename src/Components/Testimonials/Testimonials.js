import React from "react";
import './Testimonials.css';

export default function testimonials(props){
    return(
        <div className="Testimonials">

            <div className="Testimonials__inner">
                <div style={{width:"20%", height:"100%", borderRadius:"999px", display:"flex",alignItems:"center", flexDirection:"column"}}>
                    <img src={props.img} alt="" style={{width:"100%", height:"100%" , borderRadius:"999px"}}/>
                    <h3 style={{margin:"5px"}}> {props.name}t</h3>
                    <p style={{color:"#333", margin:"5px", fontSize:"100%", height:"100%" , width:"100%"}}>{props.job}</p>
                </div>

                <div className="Testimonials__text">
                    <h1>" <span style={{margin:0, color:"#333"}} >{props.message}</span> "</h1>
                </div>
            </div>
        </div>
    )
}