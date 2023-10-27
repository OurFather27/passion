//import { Link, animateScroll as scroll } from 'react-scroll'
import  "./footer.css";
import { Link } from "react-router-dom";

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Glory Church</h1>
                <p className="footer-text">
                  Lorem ipsum Here are thriteen health benefits of apples Lorem
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Information</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >burhankcd@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" > Burhan #3265</Link>
                  </li>
                  <li>
                    <Link to="#" >0212 444 44 44</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Connect</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#" > Youtube</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#" > TikTok</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#"> Instagram</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#"> Facebook</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
export default Footer;
