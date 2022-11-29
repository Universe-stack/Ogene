import React from "react";
import './PlayId.css';
import { Link, useParams} from "react-router-dom";



export default function PlayId(){
    console.log(useParams());
    const {playId} = useParams()

    return(
        <div className="PlayId">
            <h4> {playId}</h4>
            <Link to='/playController'>Back to music</Link>
        </div>
    )
} 