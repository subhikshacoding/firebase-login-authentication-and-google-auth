import React, { useState } from 'react'
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';


const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

    const HandleLogin = async (e) =>{
        e.preventDefault();

        try{
            await signInWithEmailAndPassword(auth, email , password)
            console.log("signedin");
            navigate("/home")
            
        }catch(error){
            console.log(error);
        }
    }

  return (
    <>
    <form onSubmit={HandleLogin}>
      
        <label>Email</label>
        <input type='email' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='email'></input>
        <br/>
        <label >Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'></input>

            <br/>

            <button>Login </button>
  
    </form>
    </>
  )

}

export default Login