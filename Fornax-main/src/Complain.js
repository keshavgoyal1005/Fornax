import Maps from "./Maps";
import { Link } from "react-router-dom";
import GoogleMaps from "./GoogleMaps";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useCallback, useState } from "react";

const Complain = () => {
    const [chain,setChain] = useState()
    const [username,setName] = useState()
    const [location,setLocation] = useState()
    const [tag,setTag] = useState()
    const [description,setDescription] = useState()
    const [img, setImg] = useState()


    const data = useCallback(async () => {
        const res = await fetch('http://localhost:5000/api/transaction', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        })

        const result = await res.json()
        setChain(result.chain)
    },[])

    useEffect(() => {
        data()
    }, [data])


    const Submit = async ()=>{
        const state = false
        console.log(tag)
        const res = await fetch('http://localhost:5000/api/transactions',{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            credentials : "include",
            body: JSON.stringify({
                username, tag, description, state, img, location
            })
        })

        const results = await res.json()
        console.log(results)
    }



    return (
        <div className="sign">
            <div className="container" style={{ width: "70%" }}>


                <div className="navbar">
                    <h2 style={{ textAlign: "center", color: "cyan", margin: "10px", fontSize: "2em" }}>Complain</h2>
                    <input type="checkbox" id="click" />
                    <label for="click" className="menu-btn">
                        <FontAwesomeIcon icon={faBars} className="i"></FontAwesomeIcon>
                    </label>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </ul>
                </div>



                <form>
                    <input type="text" className="contact" placeholder="Name" autoComplete="off" onChange={(e)=>{setName(e.target.value)}} />
                    <input type="text" className="contact" placeholder="Location" autoComplete="off" onChange={(e)=>{setLocation(e.target.value)}}/>
                    <select className="contact" placeholder="Problem Type" autoComplete="off" onChange={(e)=>setTag(e.target.value)}>
                        <option value="Road">Road</option>
                        <option value="Garbage">Garbage</option>
                        <option value="Crime">Crime</option>
                        <option value="Services">Services(electricity,water)</option>
                        <option value="Other">Other</option>
                    </select>
                    <textarea type="text" name="Message" className="contact text-area" placeholder="Desription" onChange={(e)=>{setDescription(e.target.value)}} autoComplete="off"></textarea>
                    <input type="file" name="fileToUpload" id="fileToUpload" className="contact" onChange={(e)=>{console.log(setImg(e.target.value))}} />
                    {/* <input type="button" value="Upload Image" name="submit" className="contact send" style={{ height: "30px", fontSize: "1em" }} /> */}

                    <input type="button" className="contact send" value="Submit" onClick={Submit}/>
                </form>



                <div style={{ position: "relative", marginBottom: "30px" }}>
                    <GoogleMaps />
                </div>



            </div>
        </div>

    );
}

export default Complain;