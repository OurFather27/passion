import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import "./contact.css"
import Helmet from 'react-helmet';

function Contact() {
  return (
    <div>
     <Topbar/>
<Helmet bodyAttributes={{style: "background-image : url('./1.jpeg')"}}/>

      <div className="contact-contnair">
      <br></br>      <br></br>      <br></br>
        <h1 className="">CONTACT</h1>
         <p>
           <h4>Future Leaders Foundation</h4><br/>
            909 Third Avenue, #986<br/>

            New York, NY  10150<br/>

            info@fortissociety.org
         </p>
         </div>
       <div className="footer_height">
      </div>
     
      <Footer/>
    </div>
  );
}
export default Contact;
