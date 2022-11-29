import React from "react";
import './Dashboard.css';

export default function dashboard({user}){
    return(
        <div className="Dashboard">
            <h2>Hello, {user?.name}</h2>
        </div>
    )
}