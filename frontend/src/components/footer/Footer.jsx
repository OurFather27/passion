//import { Link, animateScroll as scroll } from 'react-scroll'
import  "./footer.css";
import { Link } from "react-router-dom";
import {MdFacebook } from "react-icons/md"
function Footer() {

  return (
    <>
    <footer>
      <div className="footer_main">
    <div className="footer_continaer">

      <div className="footer_1">
        <Link to="/#" style={{ textDecoration: "none" }}>
          <span className="Navlogo">Logo ch</span>
        </Link>
ddi        <p> addis abeba , bole ,<br></br> old street 474ERV 5HDJH</p>
        <div className="media_icon">
                        <a href="#"><i><MdFacebook/></i></a>
                        <a href="#"><i><MdFacebook/></i></a>
                        <a href="#"><i><MdFacebook/></i></a>
                        <a href="#"><i><MdFacebook/></i></a>
                        <a href="#"><i><MdFacebook/></i></a>
        </div>

      </div>
<hr></hr>
    <div className="footer_1">
      <ul>
       <h2>Minsitries</h2>
        <li>Prayer</li>
        <li>kids</li>
        <li>youth</li>
      </ul>
    </div>
        <div className="footer_1">
      <ul>
       <h2>About</h2>
        <li>our story</li>
        <li>leadership Team</li>
        <li>values</li>
      </ul>
    </div>

    <div className="footer_1">
      <ul>
       <h2>community</h2>
        <li>Sundys</li>
        <li>New to Reality</li>
        <li>Events</li>
        <li>Groups</li>

      </ul>

    </div>
      

    </div>
     


    </div>
</footer>
    </>
    
    
  );
}
export default Footer;
