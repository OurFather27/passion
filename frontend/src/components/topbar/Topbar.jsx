import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext , useState} from "react";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../../components/logout/Logout"
import { MdEmojiEmotions } from "react-icons/md";
import { NavLink } from 'react-router-dom'

export default function Topbar() {
   const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


  return (
    <nav className="topbarContainer">
      <div className="logo">
        <Link to="/#" style={{ textDecoration: "none" }}>
          <span className="logo">Church</span>
        </Link>
      </div>
      <div className="menu-icon"onClick={handleShowNavbar}>
       <MdEmojiEmotions />
      </div>

        <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <div className="NavLinks">

        <ul>
        <li>
        <NavLink to="/" style={{ textDecoration: "none" }}>Home</NavLink>
          </li>
          <li>
          <NavLink to="/Minstry"style={{ textDecoration: "none" }}>Minstrey</NavLink>
          </li>
          <li>
          <NavLink to="/Watch"style={{ textDecoration: "none" }}>Watch</NavLink>
          </li>
          <li>
          <NavLink to="/about"style={{ textDecoration: "none" }}>About</NavLink>
          </li>
          <li>
          <NavLink className="contact"to="/Contact"style={{ textDecoration: "none" }}>Contact</NavLink>
          </li>
          <li>
          <NavLink className="contact"to="/Contact"style={{ textDecoration: "none" }}>Donate</NavLink>
          </li>
        <li>
          <Logout/>
          </li>
          </ul>
         
        </div> 
        

      </div>
    </nav>
  );
}
