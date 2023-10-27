import "./share.css";
import { MdCancel ,MdPermMedia,MdOutlineLocationOn, MdLabelImportant,MdEmojiEmotions } from "react-icons/md";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("https://churchbackend.onrender.com/api/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("https://churchbackend.onrender.com/api/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          
          <textarea
            placeholder={"Say something here ?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        
        {/*yehe select image senaderg yaderginewn display yadergelenl*/}
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <MdCancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}



        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <MdPermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Upload Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg,."
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
