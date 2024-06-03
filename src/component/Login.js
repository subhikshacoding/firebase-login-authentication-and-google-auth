import React, { useState } from 'react'
import './Login.css'
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
            <div className='loginwrapper'>

    <form onSubmit={HandleLogin}>
        <h1 className='login'> Login</h1>
        <input  className="logininput "type='email' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='email'></input>
        <br/>
        <input  className=" logininput "type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'></input>

            <br/>

            <button >Login </button>
    </form>
    </div>

    </>
  )

}

export default Login