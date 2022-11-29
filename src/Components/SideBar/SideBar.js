import React from "react";
import './SideBar.css';
import Bux from "../../Containers/hoc/Bux/Bux";
import Logo from "../UI/Logo/Logo";
import Navigations from "../Navigations/Navigations";
import BackDrop from "../UI/BackDrop/BackDrop";

const sideBar =(props)=>{

    let attachedClasses=['SideBar','Close'].join(' ');
    
    if(props.showBackdrop){
        attachedClasses=['SideBar','Open'].join(' ');
    }
    
    return(
        <Bux>
            <BackDrop show={props.showBackdrop} clickedBackdrop={props.backdropClicked}/>
            <div className={attachedClasses}>
                <div className="Logo">
                    <Logo/>
                </div>

                <Navigations/>
            </div>
        </Bux>
        
    )
}

export default sideBar;