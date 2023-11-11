import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import Watch from "../../pages/watch/Watch"

  


export default function Feed() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
 
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

    <div className="feed">
   <Share />
      <div className="feedWrapper">
        
        {/*{posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}*/}
      </div>
    </div>
     
</>
  );

}
