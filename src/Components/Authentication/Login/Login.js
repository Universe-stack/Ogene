import React from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";


export default function Login({setUser}){

    const[name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const navigate = useNavigate();
    
    const handleSubmit= async (e)=>{
        e.preventDefault();
        if(!name || !email) return;
        setUser({name:name,email:email});
        navigate('/dashboard');

    }

    return(
        <div className="Dashboard">
            <h2>Form..</h2>
        </div>
    )
}