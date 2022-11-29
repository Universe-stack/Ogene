import React from "react";
import './Layout.css';
import Bux from "../Bux/Bux";
import Toolbar from "../../../Components/Toolbar/Toolbar";
import Footer from "../../../Components/Footer/Footer";
import SideBar from "../../../Components/SideBar/SideBar";


export default function Layout(props){
    
    const [showSideDraw, setshowSideDraw]= React.useState(false);

    function setSideDrawHandler(){
        setshowSideDraw(prevState=>prevState=false)
    }

    function sideDrawShow(){
        setshowSideDraw(prevState=>prevState=true)
    }


    return(
        <Bux>
            <Toolbar clickedToggle={sideDrawShow}/>
            <SideBar showBackdrop={showSideDraw} backdropClicked={setSideDrawHandler}/>
            <main className="Content">
                {props.children}
            </main>
            <Footer/>
        </Bux>

    )
};