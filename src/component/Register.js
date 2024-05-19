import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();


    const HandleRegister = async (e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email , password)
            const user = auth.currentUser;
            console.log(user);
            console.log("created ");
            navigate("/login")
        }
        catch(error){
            console.log(error);
        }
    }

    const handlegooglesign =() =>{
        signInWithPopup(auth,provider).then((res) =>console.log(res,"userdata"))
        navigate("/login")
        .catch((error)=>{
            console.log(error);
        })
        
       
        
    
    }
  return (
    <>
    <form onSubmit={HandleRegister}>
       
        <label>Email</label>
        <input type='email' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='email'></input>
        <br/>
        <label >Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'></input>

            <br/>

            <button>Register </button>

            <button onClick={handlegooglesign}> Gooogle Sign up</button>
  
    </form>
    </>
  )

}

export default Register