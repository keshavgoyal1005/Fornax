import {Link} from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="sign">
        <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"50px",width:"70%"}}>
            <h1 style={{color:"white",}}>Page Not Found...</h1>
            <Link to="/" style={{color:"cyan",fontSize:"20px"}}>Back to homepage....</Link>
        </div>
            </div>
     );
}
 
export default NotFound;