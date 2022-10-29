import React from "react";
import "./footer.css"
import Logo from "../assets/Zuri-logo.png";
import I4G from "../assets/I4G.png";
import Slack from "../assets/slack.png";
import Github from "../assets/github.png";


export default function Footer(){
  return(
  <div className="footer">
     <div className="footer-top">  
       <a href="#" id="github" ><img src={Slack}/></a>
       <a href="https://github.com/Abdirizaks12" id="github" ><img src={Github}/></a>
     
     </div>

     <div className="footer-bottom">
         <img src={Logo}/>
         <p>HNG Internship 9 Frontend Task</p>
         <img src={I4G}/>
     </div>
  </div>)
}

