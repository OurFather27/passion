import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import './about.css'
import Helmet from 'react-helmet';

function About() {
  return (
    <>
    <Topbar/>
    <Helmet bodyAttributes={{style: "background-image : url('./7.jpeg')"}}/>
      <div className="container-about">
            <h2 className="">ABOUT</h2>
        </div>
        <div className="ourMission">
        <h2 className="">Our Mission</h2>
        <p className="">
The mission of the Fortis Society is to propel potential prominent changemakers toward increasingly 
higher levels of influence, so as to magnify Members’ collective future positive impact on the world.
We, the Members of the Fortis Society, form a community of leaders, innovators, and experts from humble
 beginnings who all strive to reach increasingly higher levels of 
<br></br><br></br>
<br></br>

 influence with the objective to become 
 inent changemakers.The mission of the Fortis Society is to propel potential prominent changemakers toward increasingly 
higher levels of influence, so as to magnify Members’ collective future positive impact on the world.
We, the Members of the Fortis Society, form a community of leaders, innovators, and experts from humble
 beginnings who all strive to reach increasingly higher levels of influence with the objective to become 
 inent changemakers.</p>
        </div>

        <div className="OUR-VALUES">
        <h2 className="">OUR VALUES
</h2>
        <p className="">
The mission of the Fortis Society is to propel potential prominent changemakers toward increasingly 
higher levels of influence, so as to magnify Members’ collective future positive impact on the world.
We, the Members of the Fortis Society, form a community of leaders, innovators, and experts from humble
 beginnings who all strive to reach increasingly higher levels of 
<br></br><br></br>
<br></br>

 influence with the objective to become 
 inent changemakers.The mission of the Fortis Society is to propel potential prominent changemakers toward increasingly 
higher levels of influence, so as to magnify Members’ collective future positive impact on the world.
We, the Members of the Fortis Society, form a community of leaders, innovators, and experts from humble
 beginnings who all strive to reach increasingly higher levels of influence with the objective to become 
 inent changemakers.</p>
        </div>
       <div className="footer_height">
       </div>
      <Footer/>
    </>
  );
}
export default About;
