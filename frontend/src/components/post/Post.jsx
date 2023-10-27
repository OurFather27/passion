import "./post.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";


export default function Post({ post }) {
  const [ user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

/////////////////////////////////////////////////////
  var [ViewPost, setModal] = useState(false); // yehegnaw post yehonwon content imge senka view yadergal
  const ZoomPost =()=>{
    setModal(!ViewPost)

  }
///////////////////////////////////////////////////// read more or read less
var [showFullDescription, setFullDescription] = useState(false);

const showFullDescriptionHandler =()=>{
  setFullDescription(!showFullDescription);
};

const description = showFullDescription
    ? post.desc
    : post.desc.slice(0, 20);
/////////////////////////////////////////////////////

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`https://churchbackend.onrender.com/api/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);
  
  
  return (
  <>
      <div className="postWrapper">
        

        <div className="postCenter">
        <span className="postText">{description}</span>
        <button className="btn-readMore" onClick={showFullDescriptionHandler}>
               {showFullDescription ? "...<<" : "...>>"}
          </button>
          <a href={`https://react-icons.github.io/react-icons/icons?name=md`}>
          <img className="postImg"onClick={ZoomPost}src={PF + post.img}/>
          </a>
        </div>
      </div>


    {ViewPost && (
        <div className="modal">
          <div onClick={ZoomPost} className="overlay"></div>
          <div className="modal-content">
      
        <button className="postCenter">
        <span className="postText">{post?.desc}</span>
          
          <img className="postImg" src={PF + post.img}/>
        </button>
            <button className="close-modal" onClick={ZoomPost}>
              CLOSE
            </button>
          </div>
        </div>
      )}


    </>
  );
}
