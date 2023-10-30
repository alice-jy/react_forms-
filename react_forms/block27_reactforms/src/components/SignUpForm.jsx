import React from 'react';
import { useState } from 'react';
//create SignUpForm component (default export)
export default function SignUp(){
    //create three state variabes for inputs: username, password, error
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("hello world!");
    }

    return(
        <>
            <h2>Sign Up!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </label>
                <label>
                    Password: <input value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <button>Submit</button>
            </form>
        </>
    );
}



