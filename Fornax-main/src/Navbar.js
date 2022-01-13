import {Link} from "react-router-dom";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    return(
      
       <div className="navbar">
        <div className="logo">FORNAX</div>
        <input type="checkbox" id="click" />
        <label for="click" className="menu-btn">
           <FontAwesomeIcon icon={faBars} className="i"></FontAwesomeIcon>
        </label>
    
    <ul>
       
         <li><Link to="/complain">Complain</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#team">Team</a></li>
        <li><Link to="/logout">Logout</Link></li>
    </ul>
    </div>
   
    );
}

export default Navbar;