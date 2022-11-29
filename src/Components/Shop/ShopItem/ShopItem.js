import React from "react";
import './ShopItem.css';
import {motion} from "framer-motion";
import {Link} from 'react-router-dom';

export default function shopItem(props){
    return(
        <Link to={`/shop/${props.link}`}>

            <motion.div whileHover={{scale:1.1, boxShadow:"0px 0px 2px black",cursor:"pointer"}} className=" ShopItem" style={{width:"160px", height:"180px", padding:"8px", backgroundColor:"white", margin:"6px",borderRadius:"0px", display:"flex", flexDirection:"column",flex:"0 0 auto", boxShadow:"0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)"}}>

                        
            <div style={{width:"100%",height:"50%"}}>
                <img src={props.img} alt="" style={{width:"100%",height:"100%"}}/>
            </div>
            <h4 style={{margin:0, padding:"5px 0"}}>{props.name}</h4>
            <p style={{margin:0, padding:"2px",fontSize:"14px"}}>{props.rating}</p>
            <p style={{margin:0, padding:"2px",fontSize:"12px"}}>{props.price}</p>

            </motion.div>

        </Link>
    )
}