import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router';
import {Link} from "react-router-dom";
import Footer from "./Footer";

const SignUp = () => {
    let navigate = useNavigate();
    const [username,setName] = useState()
    const [email,setEmail] = useState()
    const [address,setAddress] = useState()
    const [phone, setPhone] = useState()
    const [city,setCity] = useState()
    const [password,setPassword] = useState()
    const [conpassword,setconPassword] = useState()

    const singup = async (e)=>{
        const res = await fetch("http://localhost:5000/api/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                username,email,address,phone,city,password,conpassword
            })
        })

        const data = await res.json()

        if (res.status === 422 || !data) {
            window.alert("Invalid Registratrion")
        } else {
            window.alert("Registration Successfull");
            navigate('/signin')
        }

    }


    return ( 
        <div className="sign">
        <div className="glowing">
        <span style={{'--i':1}}></span>
        <span style={{'--i':2}}></span>
        <span style={{'--i':3}}></span>
       
    </div>
    <div className="glowing">
        <span style={{'--i':1}}></span>
        <span style={{'--i':2}}></span>
        <span style={{'--i':3}}></span>
       
    </div>
    <div className="container">
        <div className="nav">
            <h1>FORNAX</h1>
      </div>
        <p>Sign Up</p>
        <form>
            
            <input type="text" className="contact" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input type="email" className="contact" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" className="contact" placeholder="Address" onChange={(e)=>setAddress(e.target.value)} />
            <input type="tel" className="contact" placeholder="Contact Number" onChange={(e)=>setPhone(e.target.value)} />
            <input type="text" className="contact" placeholder="City" onChange={(e)=>setCity(e.target.value)} />
            <input type="password" className="contact" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            <input type="password" className="contact" placeholder="Confirm Password" onChange={(e)=>setconPassword(e.target.value)} />
            <input type="button" className="contact send" value="Sign Up" onClick={singup} />
        </form>
       <div className="link">
           <div className="footer"> <p>Already have account ?<span><Link to="/signin">  Sign In</Link></span></p></div>
       
    </div>
    <Footer />
    </div>
    </div>
     );
}
 
export default SignUp;