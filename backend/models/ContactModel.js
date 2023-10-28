.contact-body{
	background-color: rgb(0, 0, 0, 1.0);
}
.contact-contnair{
	width: 70%;
	height: auto;
	margin: auto;
	background-color: rgb(15 26 63);
	 -webkit-box-shadow: 0px 0px 16px -8px black;
    box-shadow: 0px 0px 30px -8px black;
    margin-top: 5%;
    transition: all 0.5s ease;
}
.contact-contnair h1{
	color: white;
	text-align: center;
	font-size: 50px;
	font-weight:bold;
	font-family: inherit;
	transition: all 0.5s ease;
}
.contact-contnair p{
	color: white;
	text-align: center;
	margin: 6%;
	font-size: 20px;
	font-family: Arial, Helvetica, sans-serif;;
}
.contactFeedbackContinaire{
	width: 50%;
	margin: auto;
	height: 200px;
	background-color: red;
}
.contact-Feedback-box{
    padding: 20px;
    align-items: center;
    background-color: rgb(15 26 63);
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.contact-Feedback-input{
	height: 30px;
	width: 50%;
    border-radius: 10px;
    border: 1px solid gray;
    font-size: 18px;
    padding-left: 10px;
    margin: 5px;
}
.textarea{
	width: 52%;
	height: 70px;
	border-radius: 20px;
	padding-left: 10px;
}
.ContactButton{
	    border: none;
    padding: 7px;
    border-radius: 5px;
    background-color: white;
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    color: rgb(15 26 63);
    margin: 10px;
}
textarea::-webkit-scrollbar {
    width: 1em;
    display: none;
}

textarea::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

textarea::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
@media only screen 
and (min-device-width : 320px) 
and (max-device-width : 480px) {
.contact-contnair{
	width: 95%;
}
.contactFeedbackContinaire{
	width: 95%;
}
}
