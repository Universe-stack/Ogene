import React from "react";
import './Navigation.css';
import {NavLink} from 'react-router-dom';
//import {motion} from "framer-motion";


const navigation=(props)=>(
    <div
    className="Navigation"
    >
        <h3 className="Navigation__a"><NavLink to={props.Link} className={({isActive})=>isActive?"Navigation__active":"Navigation__normal"}>{props.Name}</NavLink>
        </h3>
    </div>
)

export default navigation;