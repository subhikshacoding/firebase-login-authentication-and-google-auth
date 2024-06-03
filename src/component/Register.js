import React, { useState } from 'react'
import "./Register.css"
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
            alert("signup successfully")
            navigate("/login")
        }
        catch(error){
            alert(error,"occurs");
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
    <div className='signwrapper'>
    <form onSubmit={HandleRegister}>

            <h1 className='signup'>Sign up</h1>
        <input type='email' className='logininput' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='email'></input>
        <br/>
        <input type='password' className='logininput' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'></input>

            <br/>
            <button>Register </button>

            <button  className=" buttongoogle"onClick={handlegooglesign}> Gooogle Sign up</button>
    </form>
    </div>
    </>
  )

}

export default Register