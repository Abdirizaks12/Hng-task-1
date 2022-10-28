import React from "react";
import "./footer.css"
import Logo from "../assets/Zuri-logo.png";
import I4G from "../assets/I4G.png";


export default function Footer(){
  return(
  <div className="footer">
     <div className="footer-top">  
       <a href="#" id="github" ><img src="../src/assets/slack.png"/></a>
       <a href="https://github.com/Abdirizaks12" id="github" ><img src="../src/assets/github.png"/></a>
     
     </div>

     <div className="footer-bottom">
         <img src={Logo}/>
         <p>HNG Internship 9 Frontend Task</p>
         <img src={I4G}/>
     </div>
  </div>)
}

