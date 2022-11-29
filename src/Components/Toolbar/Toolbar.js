import React from "react";
import './Toolbar.css';
import Logo from "../UI/Logo/Logo";
import SearchBar from "../UI/SearchBar/SearchBar";
import Navigations from "../Navigations/Navigations";
import DrawToggle from "../UI/DrawToggle/DrawToggle";
import { NavLink } from "react-router-dom";




export default function Toolbar(props){
    return(
        <div className="Toolbar">
            <div className="Toolbar__left">
                <Logo>
                    <DrawToggle clicked={props.clickedToggle}/>
                </Logo>
                <SearchBar/>
            </div>
            <div className="Toolbar__right">
                <nav className="DeskTopOnly">
                    <Navigations/>
                </nav>
                
                <div className="Toolbar__buttons">
                    <button><NavLink to='/signUp' style={({isActive})=>{ return {color: isActive ? 'yellow':'#333'}}}>Sign Up</NavLink></button>
                    <button><NavLink to='/login' style={({isActive})=>{ return {color: isActive ? 'yellow':'#333'}}}>Log in</NavLink></button>
                </div>
                
            </div>
        </div>
    )
};