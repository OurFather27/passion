import "./post.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import data from "./data";


export default function Post({ post }) {
  const [ user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

////////////////////////////////////////////////////
var [showFullDescription, setFullDescription] = useState(false);
const showFullDescriptionHandler =()=>{
  setFullDescription(!showFullDescription);
};
const description = showFullDescription
    ? post.desc
    : post.desc.slice(0, 20);
/////////////////////////////////////////////////////
  
  return (
  <>
{/*      <div className="postWrapper">
        <div className="postCenter">
        <span className="postText">{description}</span>
        <button className="btn-readMore" onClick={showFullDescriptionHandler}>
               {showFullDescription ? "...<<" : "...>>"}
          </button>
          <a href={`https://react-icons.github.io/react-icons/icons?name=md`}>
          <img className="postImg"src={PF + post.img}/>
          </a>
        </div>
      </div>*/}
    </>
  );
}
