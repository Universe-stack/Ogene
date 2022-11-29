import React from "react";
import './PlayController.css';
import Bux from "../../Containers/hoc/Bux/Bux";

import ControllerInfo from "./ControllerInfo/ControllerInfo";
import {images} from "../constants";
import PlayItems from "./PlayItems/PlayItems";
//import {motion} from "framer-motion";
import {useInView} from 'react-intersection-observer';
import { useAnimation } from "framer-motion";
//import { motion } from "framer-motion";


export default function PlayController(props){


    const{ref,inView}= useInView({threshold:0.2});
    const animation = useAnimation();

    React.useEffect(()=>{
        if(inView){
            animation.start({
                y:0,
                transition:{
                    type:'spring',
                    duration:1,
                    ease:"easeIn"
                }
            })
        }
        if(!inView){
            animation.start({
                y:'1000vh'

            })
        }
    },[inView,animation])

   

    const[optionA, setOptionA]= React.useState(false);
    const[optionB, setOptionB]= React.useState(false);
    const[optionC, setOptionC]= React.useState(false);

    let attachedClassesA=['BottomDivA','Close'].join(' ');
    let attachedClassesB=['BottomDivA','Close'].join(' ');
    let attachedClassesC=['BottomDivA','Close'].join(' ');

//OPTION A

    if(optionA){
        attachedClassesA=['BottomDivA', 'Open'].join(' ');
    }

    function toggleOptionA(){
        setOptionA((prevState)=>prevState = !prevState)
    }


//OPTION B

    if(optionB){
        attachedClassesB=['BottomDivB', 'Open'].join(' ');
    }

    function toggleOptionB(){
        setOptionB((prevState)=>prevState = !prevState)
    }


//OPTION C
    if(optionC){
        attachedClassesC=['BottomDivC', 'Open'].join(' ');
    }

    function toggleOptionC(){
        setOptionC((prevState)=>prevState = !prevState)
    }


    return(
    <Bux>    
        <h2 style={{margin:"0 32px",marginTop:"32px", fontFamily:"cursive", color:"#333"}}> Library...</h2>
        <div className="PlayController">
           <div
           className="PlayController__inner" >
                <div className="PlayController-left">
                        <ul style={{width:"100%",padding:"12px", position:"relative"}}>

                            <li className="list" style={{display:"flex", listStyle:"none",flexDirection:"column", backgroundColor:"#eff2f5",margin:"5px"}}>
                                <span style={{display:"flex"}}>
                                    <a href="/" style={{display:"flex", alignItems:"center",padding:"0.75rem 0",flexGrow:1,textDecoration:"none", cursor:"pointer", gap:"5px"}}> 
                                        <span title="Music" className="drawer-icon"><span title="Music" className="drawer-icon" style={{display:"flex", alignItems:"center"}}><img src={images.homeIcon} style={{width:'25px',height:"25px"}} alt=""/>  </span></span>
                                        <span className="drawer-title" style={{flexGrow:"1", textAlign:"left",display:"block",whiteSpace:"nowrap",color:"#333",fontWeight:500}}>Songs</span> 
                                    </a>
                                    <div onClick={toggleOptionA} className="btn-toggle"><img src= {optionA? images.playIcon : images.downIcon}alt="down" style={{width:"15px"}}/></div>
                                </span>

                                <div className={attachedClassesA} style={{position:"absolute",top:"29%", width:"100%"}}>
                                        <ul>
                                            <li>Button</li>
                                            <li>Button</li>
                                            <li>Button</li>
                                            <li>Button</li>
                                            <li>Button</li>
                                        </ul>
                                </div>
                            </li>

                            <li className="list" style={{display:"flex", listStyle:"none",flexDirection:"column", backgroundColor:"#eff2f5",margin:"5px"}}>
                                 <span style={{display:"flex"}}>
                                <a href="/" style={{display:"flex", alignItems:"center",padding:"0.75rem 0",flexGrow:1,textDecoration:"none", cursor:"pointer", gap:"6px"}}> 
                                    <span title="Music" className="drawer-icon" style={{display:"flex", alignItems:"center"}}><img src={images.homeIcon} style={{width:'25px',height:"25px"}} alt=""/>  </span>
                                    <span className="drawer-title" style={{flexGrow:"1", textAlign:"left",display:"block",whiteSpace:"nowrap",color:"#333",fontWeight:500}}>Beats</span> 
                                </a>
                                <div onClick={toggleOptionB} className="btn-toggle"><img src= {optionB? images.playIcon : images.downIcon}alt="down" style={{width:"15px"}}/></div>
                                </span>

                                <div className={attachedClassesB} style={{position:"absolute",top:"49%", width:"100%"}}>
                                    <ul>
                                        <li>Button</li>
                                        <li>Button</li>
                                        <li>Button</li>
                                        <li>Button</li>
                                        <li>Button</li>
                                    </ul>
                                </div>
                            </li>

                            <li className="list" style={{display:"flex", listStyle:"none",flexDirection:"column", backgroundColor:"#eff2f5",margin:"5px"}}>
                                <span style={{display:"flex"}}>
                                <a href="/" style={{display:"flex", alignItems:"center",padding:"0.75rem 0",flexGrow:1,textDecoration:"none", cursor:"pointer", gap:"5px"}}> 
                                <span title="Podcasts" className="drawer-icon" style={{display:"flex", alignItems:"center"}}><img src={images.homeIcon} style={{width:'25px',height:"25px"}} alt=""/>  </span>
                                    <span className="drawer-title" style={{flexGrow:"1", textAlign:"left",display:"block",whiteSpace:"nowrap",color:"#333",fontWeight:500}}>Podcasts</span> 
                                </a>
                                <div onClick={toggleOptionC} className="btn-toggle"><img src= {optionC? images.playIcon : images.downIcon}alt="down" style={{width:"15px"}}/></div>
                                </span>

                                <div className={attachedClassesC} style={{position:"absolute",top:"69%", width:"100%"}}>
                                    <ul>
                                    
                                        <li>Button</li>
                                        <li>Button</li>
                                        <li>Button</li>
                                        <li>Button</li>
                                    </ul>
                                </div>
                            </li>

                            <li className="list" style={{display:"flex", listStyle:"none",flexDirection:"column", backgroundColor:"#eff2f5",margin:"5px"}}>
                                <a href="/" style={{display:"flex", alignItems:"center",padding:"0.75rem 0",flexGrow:1,textDecoration:"none", cursor:"pointer",gap:"5px" }}> 
                                    <span title="Music" className="drawer-icon"><span title="Music" className="drawer-icon" style={{display:"flex", alignItems:"center"}}><img src={images.homeIcon} style={{width:'25px',height:"25px"}} alt=""/>  </span></span>
                                    <span className="drawer-title" style={{flexGrow:"1", textAlign:"left",display:"block",whiteSpace:"nowrap",color:"#333",fontWeight:500}}>Trending</span>
                                </a>


                            </li>

                            
                            
                        </ul>
                        
                </div>

                <div className="PlayController-right">
                   <div className="PCR__first">

                        <div className="PCR1">
                                <ControllerInfo img={images.show} header="Afrobeats" paragraph="
Note that the development build is not optimized.
To create a production build, use npm run build.."/>
                        </div>

                        <div className="PCR2">
                            <PlayItems img={images.model2} artist="Selena Gomez" song="Feathers" duration="3.06"/>
                            <PlayItems img={images.image1} artist="Beyonce" song="Halo" duration="4.06"/>
                            <PlayItems img={images.recordverrtical} artist="Jon Bellion" song="iRobot" duration="3.27"/>
                            <PlayItems img={images.studio} artist="Rema" song="Dumebi" duration="3.35"/> 
                            <PlayItems img={images.model2} artist="Selena Gomez" song="Feathers" duration="3.06"/>
                            <PlayItems img={images.model2} artist="Selena Gomez" song="Feathers" duration="3.06"/> 
                            <PlayItems img={images.model2} artist="Selena Gomez" song="Feathers" duration="3.06"/>
                            <PlayItems img={images.model2} artist="Selena Gomez" song="Feathers" duration="3.06"/>
                            <PlayItems img={images.model2} artist="Selena Gomez" song="Feathers" duration="3.06"/> 
                            <PlayItems img={images.model2} artist="Selena Gomez" song="Feathers" duration="3.06"/>
                            <PlayItems img={images.model2} artist="Selena Gomez" song="Feathers" duration="3.06"/>    
                        </div>
                    </div>

                    <div className="PCR3"> </div>
                </div> 
           </div>
        </div>

    </Bux>
    )
}