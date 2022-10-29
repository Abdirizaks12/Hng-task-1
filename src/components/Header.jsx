import React from "react";
import './header.css'
export default function Header(){
    return(
       <div className="header">
        <button className="share-avatar" onClick="share"></button>
        <div id="profile__img"></div>
        <p>Abdirizak Sigat</p>
        
        <p id="slack" >@sigat</p>
   
       </div>

    )
}