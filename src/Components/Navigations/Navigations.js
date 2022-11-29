import React from "react";
import './Navigations.css';
import Navigation from "./Navigation/Navigation";


export default function navigations(props){
    return(
        <div className="Navigations">
            <div className="Navigations__links">
                <Navigation Link ="/home" Name="Home"/>
                <Navigation Link ="/headline" Name="About"/>
                <Navigation Link ="/playcontroller" Name="Music"/>
                <Navigation Link ="/shop" Name="Shop"/>
            </div>
        </div>
    )
}