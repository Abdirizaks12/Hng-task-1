import React from "react";
import "./footer.css"

export default function Footer(){
  return(
  <div className="footer">
     <div className="footer-top">  
       <a href="#" id="github" ><img src="../src/assets/slack.png"/></a>
       <a href="https://github.com/Abdirizaks12" id="github" ><img src="../src/assets/github.png"/></a>
     
     </div>

     <div className="footer-bottom">
         <img src="../src/assets/Zuri-Logo.png"/>
         <p>HNG Internship 9 Frontend Task</p>
         <img src="../src/assets/I4G.png"/>
     </div>
  </div>)
}

