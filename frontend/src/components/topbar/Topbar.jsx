import "./topbar.css";
import "../../components/logout/logout.css"
import { Link } from "react-router-dom";
import { useContext , useState} from "react";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../../components/logout/Logout"
import { MdMenu } from "react-icons/md";
import { NavLink } from 'react-router-dom'

export default function Topbar() {
   const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


  return (
    <nav className="NavContainer">
      <div className="">
        <Link to="/#" style={{ textDecoration: "none" }}>
          <span className="Navlogo">Logo oo</span>
        </Link>
      </div>
      <div className="NavMenuIcon"onClick={handleShowNavbar}>
       <MdMenu />
      </div>

        <div className={`NavList_Elements  ${showNavbar && 'active'}`}>
        <div className="NavLinks">

        <ul>
        <li>
        <NavLink to="/" style={{ textDecoration: "none" }}>Home</NavLink>
          </li>
          <li>
          <NavLink to="/Minstry"style={{ textDecoration: "none" }}>Minstrey</NavLink>
          </li>
          <li>
          <NavLink to="/Location"style={{ textDecoration: "none" }}>Location</NavLink>
          </li>
          <li>
          <NavLink to="/about"style={{ textDecoration: "none" }}>About</NavLink>
          </li>
          <li>
          <NavLink className="contact"to="/Contact"style={{ textDecoration: "none" }}>Contact</NavLink>
          </li>
          <li>
          <NavLink className="contact"to="/give"style={{ textDecoration: "none" }}>Give</NavLink>
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
