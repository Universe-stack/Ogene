import React from "react";
import './BodyBuilder.css';
import {images} from '../../Components/constants';

//importing page components
import Headline from "../../Components/Headline/Headline";
import PlayController from "../../Components/PlayController/PlayController";
import Shop from "../../Components/Shop/Shop";
import Testimonials from "../../Components/Testimonials/Testimonials";

export default function BodyBuilder(props){
    
    return(
        <div className="BodyBuilder">
            <div className="Body__hero">
               <div className="Body__heroInner">
                    <div className="Body__heroImg">
                        <img src={images.image1} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                    </div>

                    <div className="Body__heroText">
                        <div className="Body__heroTextInner">
                            <h1 style={{color:"#333"}}> Music & Vibes</h1>
                            <p style={{color:"#333"}}>  Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled.</p>
                        </div>
                    </div>
               </div>
            </div>
            
            <Headline/>
            <PlayController/>
            <Shop/>
            <h3 style={{color:"#333", margin:"20px 0",padding:"5px",marginLeft:"30px", fontSize:"24px", fontFamily:"cursive"}}>Testimonials...</h3>
            <Testimonials img={images.model2} name="Olga Merisht" job="Cinematographer/Universal pictures, LA." message="This has been an incredible journey with you guys. You guys are the best!!"/>
            <Testimonials img={images.image1} name="Mandy Fortenight" job="Audio engineer/Sony music, UK" message="I've worked with em a couple of times. Service is top-notch."/>
        </div>
    )
};