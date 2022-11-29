import React from "react";
import './PlayItems.css';
import {motion} from "framer-motion";
import {images} from '../../constants';

export default function playItems(props){
    return(
        <motion.div whileTap={{backgroundColor:"rgb(14, 154, 205)",scale:0.9, transition:{duration:0.2}}} whileHover={{scale:1.1, boxShadow:"0px 0px 0px 3px white", cursor:"pointer", backgroundColor:"#fe8c00", color:"white"}}    className="PlayItems" style={{width:"100%", height:"180px", padding:"5px", backgroundColor:"white", margin:"5px",borderRadius:"14px",display:"flex", flexDirection:"column", flex:"0 0 auto", boxShadow:"0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)"}}>
            <div style={{width:"100%",height:"50%"}}>
                <img src={props.img} alt="" style={{width:"100%",height:"100%"}}/>
            </div>
            <h4 style={{margin:0, padding:"5px", fontSize:"100%"}}>{props.song}</h4>
            <p style={{margin:0, padding:"2px",fontSize:"70%"}}>{props.artist}</p>
            <p style={{margin:0, padding:"2px",fontSize:"70%"}}>{props.duration}</p>
            <img src={images.playIcon} alt="play icon" className="PlayItems__img"/>
        </motion.div>
    )
}