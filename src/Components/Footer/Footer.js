import React from "react";
import './Footer.css';
import {images} from '../constants';

export default function footer(props){
    return(
        <div className="Footer">
            <div className="Footer__inner">
                <div className="Footer__logo" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}> <h2 style={{color:"white"}}>SoundLab</h2> 
                <div className="Footer__sm">
                        <span><img src={images.instagram} alt="instagram" style={{width:"30px"}}/></span>
                        <span><img src={images.twitter} alt="twitter" style={{width:"30px"}}/></span>
                        <span><img src={images.facebook} alt="facebook" style={{width:"30px"}}/></span>
                </div>
                </div>
                <div className="Footer__links">
                    <div>
                        <ul>
                            <li> <h3 style={{color:"gray", margin:0, padding:"10px 0"}}> Company</h3></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact us</a></li>
                            <li><a href="/">Plans and Pricing</a></li>
                            <li><a href="/">What's new</a></li>
                        </ul>

                        <ul>
                            <li> <h3 style={{color:"gray", margin:0, padding:"10px 0"}}> Content</h3></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact us</a></li>
                            <li><a href="/">Plans and Pricing</a></li>
                            <li><a href="/">What's new</a></li>
                        </ul>

                        <ul>
                            <li> <h3 style={{color:"gray", margin:0, padding:"10px 0"}}> Help</h3></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Contact us</a></li>
                            <li><a href="/">Plans and Pricing</a></li>
                            <li><a href="/">What's new</a></li>
                        </ul>

                       
                    </div>

                    
                     
                </div>
                <div className="Footer__footer">
                    <div >
                    <ul>
                        <li><a href="/">Legal</a></li>
                        <li><a href="/">Privacy Center</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Cookies</a></li>
                        <li><a href="/">Ads</a></li>
                    </ul>
                    </div>

                    <div style={{display: "flex", flexDirection:"column"}}>
                        <p style={{color:"grey", fontSize:"12px", margin:"5px 0"}}>@Nigeria</p>
                        <p style={{color:"grey", fontSize:"12px",  margin:"5px 0"}}>c  2022 SoundLab prod </p>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
};