import React from 'react';
import {useState} from 'react';

export default function Authenticate({token}) {
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null); 


    async function handleClick(){
        try{
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate" , {
                method: "GET", 
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ${token}', 
                }   
            })
            const result = response.json(); 
            const print = setSuccessMessage(result.successMessage);
            console.log(print); 
            
        } catch (err){
            error.message(err); 
        }
    }
    return (
        <>
            <h2>Authenticate!</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenitcation token!</button>
        </>
    );
}