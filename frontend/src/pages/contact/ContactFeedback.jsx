import './contact.css'
import { MdCancel ,MdPermMedia,MdOutlineLocationOn, MdLabelImportant,MdEmojiEmotions } from "react-icons/md";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useHistory } from "react-router";


export default function ContactFeedback() {
  const fristname = useRef();
  const lastname = useRef();
  const email = useRef();
  const phone_Number = useRef();
  const history = useHistory();

  const submitFeedBack = async (e) => {
    e.preventDefault();

      const NewContact = {
        fristname: fristname.current.value,
        lastname: lastname.current.value,
        email: email.current.value,
        phone_Number: phone_Number.current.value,
      }
      try {
        await axios.post("http://localhost:8800/api/auth/contact", NewContact);
        alert('succss')
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
  };

  return (
    <>
    <div className="contactFeedbackContinaire">
        <form className="contact-Feedback-box" onSubmit={submitFeedBack}>
        <input className="contact-Feedback-input"required type="text"placeholder="frist name"ref={fristname}/>
        <input className="contact-Feedback-input"required type="text"placeholder="last name"ref={lastname}/>
        <input className="contact-Feedback-input"required type="email"placeholder="Email"ref={email}/>
        <input className="contact-Feedback-input"required type="number"placeholder="Phone Number"ref={phone_Number}/>
        <br></br>
        {/*<textarea className="textarea" placeholder="description"></textarea>*/}
          <button className="ContactButton" type="submit">
            Submit
          </button>
        </form>
        </div>
    </>
  );
}
