import {Link} from "react-router-dom";
import {useState,useEffect} from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
    const[email,setEmail] = useState()
    const[password,setPassword]= useState()
    const navigate = useNavigate();

    const login = async () =>{
        const res = await fetch('http://localhost:5000/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials:"include",
            body: JSON.stringify({
                email, password
            })
        })

        const data = await res.json()

        if (res.status === 440 || !data) {
            window.alert("Invalid Registratrion")
        } else {
            window.alert("Login Successfull");
            console.log(data)
            if (data.message === "Login Successfuly") {
                localStorage.setItem('login',true)
                navigate('/');
            }else{
                localStorage.setItem('login',false)
                navigate('/signin')
            }
        }
    }

    
    return(
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
        <p>Sign In</p>
        <form>
            <input type="email" className="contact" placeholder="Email"  autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className="contact" placeholder="Password"  autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="button" className="contact send" value="Login" onClick={login}/>
        </form>
       <div className="link">
           <div className="footer"> <p>Don't have account ?<span><Link to="/signup">  Sign Up</Link></span></p></div>
       
    </div>
    <Footer />
    </div>
    </div>
    );
}

export default SignIn;