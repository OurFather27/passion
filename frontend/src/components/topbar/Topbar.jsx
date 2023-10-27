import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Logout from "../../components/logout/Logout"
export default function Topbar() {
  const { user } = useContext(AuthContext);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;



  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/#" style={{ textDecoration: "none" }}>
          <span className="logo">Glory Church</span>
        </Link>
      </div>
    
      <div className="topbarRight">
        <div className="topbarLinks">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="topbarLink">Home</span>
          </Link>
          <Link to="/Minstry"style={{ textDecoration: "none" }}>
          <span className="topbarLink">Minstrey</span>
          </Link>
          <Link to="/Watch"style={{ textDecoration: "none" }}>
          <span className="topbarLink">Watch</span>
          </Link>
          <Link to="/about"style={{ textDecoration: "none" }}>
          <span className="topbarLink">About us</span>
          </Link>
          <Link className="contact"to="/Contact"style={{ textDecoration: "none" }}>
          <span className="topbarLink">Contact</span>
          </Link>
          <Link className="contact"to="/Contact"style={{ textDecoration: "none" }}>
          <span className="topbarLink">Donate</span>
          </Link>
          <Link className="profileLink"to={`/profile/${user.profile}`}style={{ textDecoration: "none", color:"white" }}>
          {/*<img
            src={
              user.profilePicture
                ? PF + user.profilePicture 
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />*/}{user.username}
        </Link>
         <Logout/>
        </div> 
        

      </div>
    </div>
  );
}
