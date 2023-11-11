import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './watch.css'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar"
import Footer from "../../components/footer/Footer"


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(15 26 63)" }}
      onClick={onClick}
    />
  );
}


function Watch (){
          var settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        
      ]
    };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    const fetchPosts = async () => {
      const res =  await axios.get("https://churchbackend.onrender.com/api/posts");
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, []);

  return (
    <>
    {/*<Topbar/>*/}
        <div className="Header_container_main">
        <div className="header_container">
            <div className="headerbg"></div>

        
        <header className="">
        <h1>God is for you,<br/>
            and so are we.
        </h1>
        <div className="header_video_box">
        <video className="" src="./yoni.mp4" loop autoPlay muted></video>
        </div>
        </header>
        </div>
      </div>


{/*middle page */}
      <div className="middlePage">
      <div className="middlePage_2">
        <div className="middlePage_continaer">
          <div className="middlePage_box">
          <h2>Sundays Service</h2>
          <p>We are a community following Jesus, making him known and seeking renewal in London. 
          Each Sunday we gather together at Central Foundation Boys School at 11am and we’d love to have you join us.</p>
            
          </div>
        </div>
        <div className="middlePage_continaer">
          <img className="middleImage"src="./sundayService.png"/>
        </div>
        </div>
      </div>



      <div className="mainContainer">
     <div className="container">
    <Slider {...settings}>
      {posts.map((post, p)=>(
        <div Key={p}className="Image_container">
            <img className="silderImg"src={PF+post.img}/>
            <p>{post.desc}</p>
             
</div>

        ))}
</Slider>
</div>
</div>
{/*<br></br><br></br>*/}
{/*<Footer/>*/}
 </>
  );









































//         var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 2,
//       nextArrow: <Arrow />,
//       prevArrow: <Arrow />,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
        
//       ]
//     };
//     return (
//   <div className="container">
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div className="silder_card">
//             <img className="silderImg"src="./7.jpeg"/>
//             <div className="card-body">
//             </div>
//             <h3>Slick</h3>
//             <p>We use react -slice</p>
//           </div>
//           <div className="silder_card">
//             <img className="silderImg"src="./2.jpeg"/>
//             <div className="card-body">
//             </div>
//             <h3>Slick</h3>
//             <p>We use react -slice</p>
//           </div>
//           <div className="silder_card">
//             <img className="silderImg"src="./4.jpeg"/>
//             <div className="card-body">
//             </div>
//             <h3>Slick</h3>
//             <p>We use react -slice</p>
//           </div>
//           <div className="silder_card">
//             <img className="silderImg"src="./6.jpeg"/>
//             <div className="card-body">
//             </div>
//             <h3>Slick</h3>
//             <p>We use react -slice</p>
//           </div>
//           <div className="silder_card">
//             <img className="silderImg"src="./5.jpeg"/>
//             <div className="card-body">
//             </div>
//             <h3>Slick</h3>
//             <p>We use react -slice</p>
//           </div>
//           <div className="silder_card">
//             <img className="silderImg"src="./1.jpeg"/>
//             <div className="card-body">
//             </div>
//             <h3>Slick</h3>
//             <p>We use react -slice</p>
//           </div>
//         </Slider>
//       </div>


//   );
}

export default Watch