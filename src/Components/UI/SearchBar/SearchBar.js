import React from "react";
import './SearchBar.css';
import {images} from '../../constants';

const searchBar=(props)=>{
    return(
        <div className="SearchBar">
               <input type="text"
                value={props.value}
                onChange={props.changed}
                onKeyPress={props.pressed}
                placeholder="Find a sound..."
                onKeyDown={props.keyDown}/>
               <button onClick={props.submit} style={{backgroundPosition:"center"}}><img style={{width:"100%", height:"80%",padding:"1px", marginRight:"3px"}}  src={images.search} alt=""/>  </button>
        </div>
    )
}

export default searchBar;