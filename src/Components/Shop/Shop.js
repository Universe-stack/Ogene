import React from "react";
import './Shop.css';
import ShopItem from "./ShopItem/ShopItem";
import products from "../../api/Data/Data";


export default function Shop(props){
    return(
        <div className="Shop">
            <div className="Shop__inner">
                <h2>Shop sounds</h2>
                <div className="Shop__showcase">
                    <ShopItem name="Midi keyboards" />
                    <ShopItem name="Guitars"/>
                    <ShopItem name="Vocals"/>
                    <ShopItem name="Environment sounds"/>
                    <ShopItem name="Drums"/>
                    <ShopItem name="Percussions"/>
                    <ShopItem name="VFX"/>
                    <ShopItem name="Synth"/>
                    <ShopItem name="Bells"/>
                    <ShopItem name="VFX"/>
                    <ShopItem name="Synth"/>
                    
                </div>

                <div className="Shop__list">
                    <h3 style={{color:"#333", fontFamily:"Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", margin:"5px", padding:"5px"}}> Hot & Trending</h3>
                    <div className="Shop__details">
                        {
                            products.map((product)=>{
                                return <ShopItem key={product.id} name={product.name} link={product.id}/>
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
};