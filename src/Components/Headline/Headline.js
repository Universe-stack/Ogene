import React from "react";
import './Headline.css';
import { images } from "../constants";



export default function headline(props){

   

    return(
        <div className="Headline">
            <div className="Headline__inner">
                <div className="Headline__text">
                    <h2>OUR STORY</h2>
                    <p>Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled.</p>
                 </div>

                <div className="Headline__media">
                    <div class="container">
                        <input type="radio" name="slider" id="item-1" checked/>
                        <input type="radio" name="slider" id="item-2"/>
                        <input type="radio" name="slider" id="item-3"/>
                        <div class="cards">
                            <label class="card" for="item-1" id="song-1">
                            <img src={images.recordhorizontal} alt="song"/>
                            </label>
                            <label class="card" for="item-2" id="song-2">
                            <img src={images.show} alt="song"/>
                            </label>
                            <label class="card" for="item-3" id="song-3">
                            <img src={images.studio} alt="song"/>
                            </label>
                        </div>
                        <div class="player">
                            <div class="upper-part">
                                <div class="play-icon">
                                    <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-play" viewBox="0 0 24 24">
                                    <defs/>
                                    <path d="M5 3l14 9-14 9V3z"/>
                                    </svg>
                                </div>
                            <div class="info-area" id="test">
                                <label class="song-info" id="song-info-1">
                                <div class="title">Last Last</div>
                                <div class="sub-line">
                                    <div class="subtitle">Burna Boy</div>
                                    <div class="time">4.05</div>
                                </div>
                                </label>
                                <label class="song-info" id="song-info-2">
                                <div class="title">Electricity</div>
                                <div class="sub-line">
                                    <div class="subtitle">Pheelz(ft. Davido)</div>
                                    <div class="time">3.05</div>
                                </div>
                                </label>
                                <label class="song-info" id="song-info-3">
                                <div class="title">Apollo</div>
                                <div class="sub-line">
                                    <div class="subtitle">Victony</div>
                                    <div class="time">3.24</div>
                                </div>
                                </label>
                            </div>
                            </div>
                            <div class="progress-bar">
                            <span class="progress"></span>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );

}