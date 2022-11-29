import React from "react";
import './SingleProduct.css';
import products from "../../api/Data/Data";
import {Link,useParams} from 'react-router-dom';

export default function SingleProduct(){
    const {productId}= useParams();
    const product= products.find((product)=>product.id === productId);

    const{name} = product


    return(
        <div className="SingleProduct" >
            <Link to='/shop'>Back to products</Link>

            <img src="" alt="" style={{width:"100px" ,height:"100px"}}/>
            <h1>{name}</h1>
        </div>
    )
}