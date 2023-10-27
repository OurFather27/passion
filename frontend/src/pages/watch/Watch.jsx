import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"
import "./watch.css"

function Watch() {
  return (
    <div>
    <Topbar/>
    <header>
          <video src="./1.mp4" loop autoPlay muted></video>
      <h1>God is for you,<br/>
            and so are we.
</h1>
      <div className="headerbg"></div>
    </header>
    <Footer/>
    </div>
  );
}
export default Watch;
